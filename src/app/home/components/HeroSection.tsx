'use client';

import React, { useEffect, useRef } from 'react';
import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-ink grain-overlay">
      {/* Full-bleed desk photograph */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="/hero-bg.jpg"
          alt="Developer desk from above — mechanical keyboard with blue backlit keys, monitor showing block editor, notebook with wireframes, ceramic mug"
          fill
          className="w-full h-full object-cover object-center"
          priority
        />

        {/* Ink wash overlay — preserves depth, darkens edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/30 to-ink/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/30 via-transparent to-ink/30" />
      </div>

      {/* Bottom-anchored content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row md:items-end justify-between gap-8">
          {/* Primary tagline */}
          <div className="flex flex-col gap-4">
            <span className="tag-pill border-paper/20 text-paper/50">
              Web App · Landing Page · Dashboard
            </span>
            <p
              ref={taglineRef}
              className="animate-fade-up-delay font-mono text-2xl md:text-4xl lg:text-5xl text-paper font-light leading-tight tracking-tight max-w-2xl"
            >
              We build Platforms
              <br />
              <em className="not-italic text-paper/70">like software,</em>
              <br />
              not just websites.
            </p>
          </div>

          {/* Right: descriptor + scroll cue */}
          <div
            ref={subRef}
            className="animate-fade-up-delay-2 flex flex-col items-start md:items-end gap-6"
          >
            <p className="font-sans text-sm text-paper/60 max-w-xs md:text-right leading-relaxed font-light">
              Custom web applications. High-converting landing pages. Data-driven dashboards built
              with modern web technologies and secure cloud databases.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#katalog"
                className="font-mono text-xs uppercase tracking-widest px-5 py-3 bg-accent text-paper hover:bg-accent-hover transition-colors duration-200"
              >
                Lihat Katalog
              </a>
              <a
                href="#work"
                className="font-mono text-xs uppercase tracking-widest px-5 py-3 border border-paper/30 text-paper hover:border-paper/70 transition-colors duration-200"
              >
                See Our Work
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up-delay-2">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-paper/40">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-paper/40 to-transparent animate-bounce-y" />
        </div>
      </div>
    </section>
  );
}
