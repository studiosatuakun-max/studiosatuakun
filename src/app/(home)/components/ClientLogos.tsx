import React from 'react';

const clients = [
  'skorakhir.com',
  'selfify.id',
  'seangkatan.id',
  'jasurd.com',
  'ronaos.com',
  'saven.com',
  'liceria',
  'Aura Aesthetic'
];

export default function ClientLogos() {
  const doubled = [...clients, ...clients];

  return (
    <section className="bg-[#0C0C0C] py-20 overflow-hidden border-b border-[rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6E73]">
          Our Portfolio
        </span>
      </div>
      
      <div className="relative w-full flex overflow-x-hidden">
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#0C0C0C] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#0C0C0C] to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused] transition-all">
          {doubled.map((client, i) => (
            <div key={i} className="flex items-center">
              <span className="font-mono text-3xl md:text-5xl font-light tracking-tight text-[#6B6E73] hover:text-white transition-colors duration-300 cursor-default px-10 md:px-16">
                {client}
              </span>
              <span className="text-[#333333] text-xl md:text-2xl">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
