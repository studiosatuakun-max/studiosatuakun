"use client";

import { useChat } from '@ai-sdk/react';
import { useState, useRef, useEffect } from 'react';
import { Bot, Send, Code, Loader2, Sparkles, LayoutPanelLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function AiChatSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const [input, setInput] = useState('');
  
  // @ts-ignore - Vercel AI SDK type mismatch workaround
  const { messages, sendMessage, status } = useChat();
  const isLoading = status === 'streaming' || status === 'submitted';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input?.trim() || isLoading) return;
    // @ts-ignore
    sendMessage({ role: 'user', text: input, content: input, parts: [{ type: 'text', text: input }] });
    setInput('');
  };

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getMessageText = (m: any) => {
    if (m.content) return m.content;
    if (m.parts) return m.parts.map((p: any) => p.type === 'text' ? p.text : '').join('');
    if (m.text) return m.text;
    return '';
  };

  // Look for the latest generated HTML to preview
  const latestHtmlCode = messages
    .filter(m => m.role === 'assistant')
    .map(m => {
      const text = getMessageText(m);
      const match = text.match(/```html\n([\s\S]*?)\n```/);
      return match ? match[1] : null;
    })
    .filter(Boolean)
    .pop();

  // Auto-expand if HTML is generated and not already expanded
  useEffect(() => {
    if (latestHtmlCode && !isExpanded) {
      setIsExpanded(true);
    }
  }, [latestHtmlCode, isExpanded]);

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden" id="ai-architect">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 font-medium text-sm mb-6 border border-yellow-400/20">
            <Sparkles className="w-4 h-4" />
            <span>Studio AI Architect</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
            Konsultasikan Ide Anda dengan <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">AI Kami</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Ceritakan ide bisnis atau fitur aplikasi yang Anda inginkan. AI Tech Lead kami akan berdiskusi dengan Anda dan membuatkan draf prototipe antarmuka secara live di kanvas ini.
          </p>
        </div>

        {/* Chat Interface Container */}
        <div className={`mx-auto bg-[#0c0c0c] border border-white/10 shadow-2xl rounded-2xl overflow-hidden transition-all duration-500 ease-in-out flex ${
          isExpanded ? 'w-full max-w-7xl h-[800px] flex-row' : 'w-full max-w-5xl h-[650px] flex-col'
        }`}>
          
          {/* Chat Area */}
          <div className={`flex flex-col h-full bg-[#0c0c0c] ${isExpanded ? 'w-1/3 min-w-[350px] border-r border-white/10' : 'w-full'}`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Ai Studio</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              {latestHtmlCode && (
                <button onClick={() => setIsExpanded(!isExpanded)} className="p-1.5 hover:bg-white/10 rounded-md transition-colors text-muted-foreground" title="Toggle UI Canvas">
                  <LayoutPanelLeft className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
              {messages.length === 0 && (
                <div className="text-center mt-10 opacity-70">
                  <Bot className="w-10 h-10 mx-auto text-yellow-500 mb-4 opacity-50" />
                  <p className="text-sm text-muted-foreground">
                    Ceritakan ide Anda untuk memulai.
                  </p>
                </div>
              )}

              {messages.map(m => (
                <div key={m.id} className={`flex gap-3 max-w-[90%] ${m.role === 'user' ? 'ml-auto flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex shrink-0 items-center justify-center ${m.role === 'user' ? 'bg-slate-800 text-white' : 'bg-yellow-400/20 text-yellow-400'}`}>
                    {m.role === 'user' ? <div className="w-4 h-4 rounded-full bg-white/20" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`rounded-2xl px-4 py-3 text-sm overflow-hidden ${m.role === 'user' ? 'bg-slate-800 text-white rounded-tr-sm' : 'bg-white/5 text-slate-200 rounded-tl-sm border border-white/5'}`}>
                    <ReactMarkdown
                      components={{
                        code({node, className, children, ...props}: any) {
                          const match = /language-(\w+)/.exec(className || '')
                          const isHtml = match && match[1] === 'html';
                          
                          if (isHtml) {
                            return (
                              <div className="mt-4 mb-2 bg-black/40 rounded-lg p-3 border border-yellow-500/30 flex items-center gap-3">
                                 <Code className="w-5 h-5 text-yellow-500" />
                                 <div>
                                    <div className="text-yellow-400 font-bold">UI Generated!</div>
                                    <div className="text-xs text-muted-foreground">Preview kanvas di-update.</div>
                                 </div>
                              </div>
                            )
                          }
                          return <code className="bg-black/30 px-1.5 py-0.5 rounded text-yellow-300 text-xs whitespace-pre-wrap break-all" {...props}>{children}</code>
                        }
                      }}
                    >
                      {getMessageText(m)}
                    </ReactMarkdown>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-yellow-400/20 text-yellow-400 flex items-center justify-center shrink-0">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="bg-white/5 rounded-2xl rounded-tl-sm px-4 py-3 text-sm flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-black/20 border-t border-white/10 shrink-0">
              <form onSubmit={handleSubmit} className="relative flex items-center">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ketik ide aplikasi Anda di sini..."
                  className="w-full bg-[#111] border border-white/10 rounded-full pl-5 pr-12 py-3 text-sm text-white focus:outline-none focus:border-yellow-400/50 focus:ring-1 focus:ring-yellow-400/50 transition-all placeholder:text-muted-foreground"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-2 w-8 h-8 flex items-center justify-center rounded-full bg-yellow-400 text-slate-900 hover:bg-yellow-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </button>
              </form>
            </div>
          </div>

          {/* Preview Panel (Only visible when expanded) */}
          {isExpanded && (
            <div className="flex-1 h-full bg-[#050505] relative overflow-hidden flex flex-col border-l border-white/10">
              {latestHtmlCode ? (
                <iframe
                  srcDoc={`
                    <html>
                      <head>
                        <script src="https://cdn.tailwindcss.com"></script>
                        <style>
                          body { background-color: #050505; color: white; padding: 2rem; font-family: system-ui, sans-serif; }
                        </style>
                      </head>
                      <body>
                        ${latestHtmlCode}
                      </body>
                    </html>
                  `}
                  className="w-full h-full border-none"
                  title="UI Preview"
                  sandbox="allow-scripts"
                />
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-8 text-center bg-[url('/grid.svg')] bg-center opacity-50">
                  <Code className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-mono">Workspace Preview Kosong</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
