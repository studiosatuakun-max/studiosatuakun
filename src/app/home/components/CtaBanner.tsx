import React from 'react';

export default function CtaBanner() {
  return (
    <section className="bg-paper border-b border-[rgba(107,110,115,0.25)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="font-mono text-2xl md:text-3xl font-light text-ink tracking-tight">
            Let's build something extraordinary.
          </h3>
          <p className="mt-2 font-sans text-sm text-graphite max-w-lg leading-relaxed">
            Tell us about your project requirements, target audience, and main challenges. We'll
            respond within one business day.
          </p>
        </div>
        <a
          href="https://wa.me/6282260880878"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 font-mono text-xs uppercase tracking-widest px-8 py-4 bg-ink text-paper hover:bg-accent transition-colors duration-200 whitespace-nowrap"
        >
          Start Project Inquiry →
        </a>
      </div>
    </section>
  );
}
