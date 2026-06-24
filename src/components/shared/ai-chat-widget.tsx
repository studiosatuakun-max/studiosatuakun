"use client";

import { useChat } from 'ai/react';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, X, Send, Maximize2, Minimize2, Code, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export function AiChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Look for the latest generated HTML to preview
  const latestHtmlCode = messages
    .filter(m => m.role === 'assistant')
    .map(m => {
      const match = m.content.match(/```html\n([\s\S]*?)\n```/);
      return match ? match[1] : null;
    })
    .filter(Boolean)
    .pop();

  // Auto-expand if HTML is generated and not already expanded
  useEffect(() => {
    if (latestHtmlCode && !isExpanded && isOpen) {
      setIsExpanded(true);
    }
  }, [latestHtmlCode, isOpen, isExpanded]);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={toggleOpen}
            className="fixed bottom-6 right-6 z-50 p-4 bg-yellow-400 text-slate-900 rounded-full shadow-[0_0_20px_rgba(250,204,21,0.4)] hover:bg-yellow-300 transition-colors flex items-center justify-center group"
          >
            <Bot className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="absolute right-full mr-4 bg-slate-900 text-white text-sm px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-xl flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Konsultasikan ide Anda dengan Studio AI Kami
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className={`fixed bottom-6 right-6 z-50 flex overflow-hidden bg-[#0c0c0c] border border-white/10 shadow-2xl rounded-2xl transition-all duration-500 ease-in-out ${
              isExpanded ? 'w-[calc(100vw-3rem)] h-[calc(100vh-3rem)] max-w-7xl max-h-[900px]' : 'w-[400px] h-[600px] flex-col'
            }`}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-black/20 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-yellow-400/20 flex items-center justify-center text-yellow-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm">Studio AI Architect</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-xs text-muted-foreground">Online</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <button onClick={() => setIsExpanded(!isExpanded)} className="p-1.5 hover:bg-white/10 rounded-md transition-colors" title={isExpanded ? "Perkecil Jendela" : "Perbesar Workspace"}>
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button onClick={toggleOpen} className="p-1.5 hover:bg-white/10 hover:text-red-400 rounded-md transition-colors" title="Tutup">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className={`flex flex-1 overflow-hidden ${isExpanded ? 'flex-row' : 'flex-col'}`}>
              {/* Chat Area */}
              <div className={`flex flex-col h-full bg-[#0c0c0c] ${isExpanded ? 'w-1/3 min-w-[350px] border-r border-white/10' : 'w-full'}`}>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                  {messages.length === 0 && (
                    <div className="text-center mt-10">
                      <div className="w-12 h-12 rounded-full bg-yellow-400/10 text-yellow-400 flex items-center justify-center mx-auto mb-4">
                        <Bot className="w-6 h-6" />
                      </div>
                      <h4 className="text-white font-bold mb-2">Halo! Saya Konsultan AI Anda.</h4>
                      <p className="text-sm text-muted-foreground">
                        Ceritakan ide bisnis atau aplikasi Anda. Saya akan bantu merancang strukturnya, bahkan membuatkan desain antarmuka (UI) awalnya secara live!
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
                                        <div className="text-xs text-muted-foreground">Preview updated in panel.</div>
                                     </div>
                                  </div>
                                )
                              }
                              return <code className="bg-black/30 px-1.5 py-0.5 rounded text-yellow-300 text-xs whitespace-pre-wrap break-all" {...props}>{children}</code>
                            }
                          }}
                        >
                          {m.content}
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
                <div className="flex-1 h-full bg-[#050505] relative overflow-hidden flex flex-col">
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
                    <div className="flex-1 flex flex-col items-center justify-center text-muted-foreground p-8 text-center bg-[url('/grid.svg')] bg-center">
                      <Code className="w-12 h-12 mb-4 opacity-20" />
                      <p className="font-mono">Workspace Preview Kosong</p>
                      <p className="text-sm mt-2 opacity-50 max-w-sm">
                        Ceritakan fitur yang Anda inginkan ke AI, dan saksikan AI merakit kode desain secara live di kanvas ini.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
