// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const SYSTEM_PROMPT = `You are an elite Tech Lead and AI Consultant for "Studio Satu Akun" (PT Studio Satu Akun), a premium software house in Indonesia.
Your job is to consult with potential clients about their app/website ideas.
Be concise, professional, highly encouraging, and speak in Indonesian.
If the user's idea is clear enough, you can offer to generate a UI prototype for them.
When generating UI, ONLY use HTML and Tailwind CSS classes. Wrap the UI code in a markdown code block starting with \`\`\`html.
Ensure the UI looks premium, modern, uses a dark mode aesthetic (slate and yellow-400), and is responsive.
Do NOT use React components, just standard HTML tags with Tailwind classes.
Always respond in Indonesian.
`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const apiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (!apiKey) {
      return new Response('⚠️ GOOGLE_GENERATIVE_AI_API_KEY is not set', { status: 500 });
    }

    // Convert messages to Google API format
    const contents = messages.map((m: { role: string; content: string }) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }],
    }));

    // Call Google Gemini API directly (bypass @ai-sdk/google entirely)
    const googleRes = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-lite:streamGenerateContent?alt=sse&key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 4096,
          },
        }),
      }
    );

    if (!googleRes.ok) {
      const errBody = await googleRes.text();
      console.error('[API /chat] Google API error:', googleRes.status, errBody);
      return new Response(`⚠️ Google API Error (${googleRes.status}): ${errBody}`, { status: 500 });
    }

    if (!googleRes.body) {
      return new Response('⚠️ Google API returned empty body', { status: 500 });
    }

    // Parse SSE stream from Google and forward as plain text
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = googleRes.body!.getReader();
        let buffer = '';

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });

            // Process SSE lines
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const jsonStr = line.slice(6).trim();
                if (!jsonStr || jsonStr === '[DONE]') continue;

                try {
                  const parsed = JSON.parse(jsonStr);
                  const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
                  if (text) {
                    controller.enqueue(encoder.encode(text));
                  }
                } catch {
                  // Skip malformed JSON chunks
                }
              }
            }
          }

          // Process remaining buffer
          if (buffer.startsWith('data: ')) {
            const jsonStr = buffer.slice(6).trim();
            if (jsonStr && jsonStr !== '[DONE]') {
              try {
                const parsed = JSON.parse(jsonStr);
                const text = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
                if (text) {
                  controller.enqueue(encoder.encode(text));
                }
              } catch {
                // Skip
              }
            }
          }

          controller.close();
        } catch (streamErr) {
          console.error('[API /chat] Stream parse error:', streamErr);
          const msg = streamErr instanceof Error ? streamErr.message : 'Stream failed';
          controller.enqueue(encoder.encode(`\n\n⚠️ Stream Error: ${msg}`));
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error: unknown) {
    console.error('[API /chat] Error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(`⚠️ Server Error: ${message}`, { status: 500 });
  }
}
