import { streamText } from 'ai';
import { google } from '@ai-sdk/google';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `You are an elite Tech Lead and AI Consultant for "Studio Satu Akun" (PT Studio Satu Akun), a premium software house in Indonesia.
Your job is to consult with potential clients about their app/website ideas.
Be concise, professional, highly encouraging, and speak in Indonesian.
If the user's idea is clear enough, you can offer to generate a UI prototype for them.
When generating UI, ONLY use HTML and Tailwind CSS classes. Wrap the UI code in a markdown code block starting with \`\`\`html.
Ensure the UI looks premium, modern, uses a dark mode aesthetic (slate and yellow-400), and is responsive.
Do NOT use React components, just standard HTML tags with Tailwind classes. We will render it directly using an iframe or dangerouslySetInnerHTML.
Always respond in Indonesian.
`;

    const result = streamText({
      model: google('gemini-2.0-flash'),
      messages,
      system: systemPrompt,
    });

    return result.toTextStreamResponse();
  } catch (error: unknown) {
    console.error('[API /chat] Error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return new Response(JSON.stringify({ error: message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
