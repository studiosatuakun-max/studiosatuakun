'use client';

import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';
import { CATEGORIES } from '@/data/catalog';

export default function ResourcesBento() {
  return (
    <section id="katalog" className="bg-paper border-t border-[rgba(107,110,115,0.25)]">
      {/* Section header */}
      <div className="px-6 md:px-10 pt-16 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest2 text-graphite">
            Row 01 — Katalog
          </span>
          <h2 className="mt-2 font-mono text-3xl md:text-4xl font-light text-ink tracking-tight">
            Our best work,
            <br />
            <em className="not-italic text-graphite">ready for you.</em>
          </h2>
        </div>
        <p className="font-sans text-sm text-graphite max-w-sm leading-relaxed font-light">
          Explore our collection of high-performance landing pages, dashboards, and web apps. Ready
          to deploy or customize.
        </p>
      </div>

      {/* Catalog Categories Grid */}
      <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 border-t border-[rgba(107,110,115,0.25)] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {CATEGORIES.map((cat) => (
          <Link href={`/katalog/${cat.id}`} key={cat.id} className="group w-[85vw] md:w-auto shrink-0 snap-start">
            <div className="h-full border-r md:border-b-0 border-[rgba(107,110,115,0.25)] p-8 md:p-12 transition-colors duration-500 hover:bg-[rgba(107,110,115,0.02)] flex flex-col justify-between min-h-[320px]">
              <div>
                <div className="w-12 h-12 flex items-center justify-center border border-[rgba(107,110,115,0.25)] rounded-full text-graphite group-hover:bg-ink group-hover:text-paper group-hover:border-ink transition-all duration-500 mb-8">
                  <Icon name={cat.iconName} size={20} />
                </div>
                <h3 className="font-mono text-2xl font-light text-ink mb-3 group-hover:text-accent transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="font-sans text-sm text-graphite leading-relaxed">{cat.description}</p>
              </div>

              <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-graphite group-hover:text-ink transition-colors duration-300">
                <span>View Foundations</span>
                <Icon
                  name="ArrowRightIcon"
                  size={12}
                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                />
              </div>
            </div>
          </Link>
        ))}

        {/* Placeholder / CTA tile for the 6th slot to balance the grid (since we have 5 categories) */}
        <div className="h-full border-r md:border-b-0 border-[rgba(107,110,115,0.25)] bg-ink p-8 md:p-12 flex flex-col justify-between min-h-[320px] w-[85vw] md:w-auto shrink-0 snap-start">
          <div>
            <h3 className="font-mono text-2xl font-light text-paper mb-3">
              Need a Custom Solution?
            </h3>
            <p className="font-sans text-sm text-paper/60 leading-relaxed max-w-xs">
              If you can't find what you're looking for in our catalog, we can build it from
              scratch.
            </p>
          </div>

          <a
            href="#services"
            className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent hover:text-paper transition-colors duration-300"
          >
            <span>Start a Project</span>
            <Icon name="ArrowRightIcon" size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
