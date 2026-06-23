"use client";

interface QuoteSectionProps {
  quote: React.ReactNode;
  theme?: "dark" | "light";
}

export function QuoteSection({ quote, theme = "dark" }: QuoteSectionProps) {
  const isLight = theme === "light";

  return (
    <section className={`py-20 relative overflow-hidden ${isLight ? "bg-slate-100 border-y border-slate-200" : "bg-slate-900 border-y border-white/5"}`}>
      {/* Decorative Noise or Grid */}
      <div className={`absolute inset-0 ${isLight ? "bg-grid-black/[0.02]" : "bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"}`}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className={`text-2xl md:text-4xl font-light italic max-w-4xl mx-auto leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
          {quote}
        </h2>
      </div>
    </section>
  );
}
