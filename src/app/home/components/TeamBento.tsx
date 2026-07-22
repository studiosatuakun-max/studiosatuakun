'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  imageAlt: string;
  dark: boolean;
  span: string;
  stat?: string;
  statLabel?: string;
  iconName?: string;
}

const team: TeamMember[] = [
  {
    id: 't1',
    name: 'Core Engineering',
    role: 'System Architecture',
    bio: 'Expertise in modern web architecture, crafting highly interactive platforms, scalable APIs, and robust server-side logic.',
    image: '',
    imageAlt: '',
    dark: true,
    span: 'col-span-2 md:col-span-1',
    iconName: 'ServerStackIcon',
  },
  {
    id: 't2',
    name: 'Creative Design',
    role: 'Front-end & UI/UX',
    bio: 'Crafting pixel-perfect, highly responsive interfaces focusing on seamless user experiences, micro-interactions, and brand identity.',
    image: '',
    imageAlt: '',
    dark: false,
    span: 'col-span-2 md:col-span-1',
    iconName: 'PaintBrushIcon',
  },
  {
    id: 't3',
    name: '',
    role: '',
    bio: 'Combined years of software engineering across the Studio Satu Akun team',
    image: '',
    imageAlt: '',
    dark: false,
    span: 'col-span-2 md:col-span-1',
    stat: '15+',
    statLabel: 'YEARS TECH EXP.',
  },
  {
    id: 't4',
    name: 'AI & Automation',
    role: 'Agentic Workflows',
    bio: 'Integrating Large Language Models and automated AI workflows to accelerate development speed and client operational efficiency.',
    image: '',
    imageAlt: '',
    dark: true,
    span: 'col-span-2 md:col-span-1',
    iconName: 'SparklesIcon',
  },
];

export default function TeamBento() {
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>(new Array(team.length).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = parseInt(entry.target.getAttribute('data-idx') || '0', 10);
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisible((prev) => {
                const n = [...prev];
                n[idx] = true;
                return n;
              });
            }, idx * 100);
          }
        });
      },
      { threshold: 0.1 }
    );
    tileRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="bg-paper border-t border-[rgba(107,110,115,0.25)]">
      {/* Section header */}
      <div className="px-6 md:px-10 pt-16 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest2 text-graphite">
            Row 03 — Team
          </span>
          <h2 className="mt-2 font-mono text-3xl md:text-4xl font-light text-ink tracking-tight">
            Who we are,
            <br />
            <em className="not-italic text-graphite">hands on keyboards.</em>
          </h2>
        </div>
        <p className="font-sans text-sm text-graphite max-w-sm leading-relaxed font-light">
          A dedicated team of developers, designers, and AI specialists building robust digital
          ecosystems.
        </p>
      </div>

      <div className="bento-grid flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {team.map((member, idx) => (
          <div
            key={member.id}
            ref={(el) => {
              tileRefs.current[idx] = el;
            }}
            data-idx={idx}
            className={`
              reveal-tile bento-tile
              ${member.dark ? 'bento-tile-dark' : ''}
              ${member.span}
              ${visible[idx] ? '' : 'hidden-tile'}
              w-[85vw] md:w-auto shrink-0 snap-start
            `}
          >
            <TeamTile member={member} />
          </div>
        ))}
      </div>

    </section>
  );
}

function TeamTile({ member }: { member: TeamMember }) {
  if (member.stat) {
    return (
      <div className="p-8 md:p-10 h-full flex flex-col justify-between min-h-[220px]">
        <span className="tag-pill">The Team</span>
        <div>
          <div className="font-mono text-6xl md:text-7xl font-light text-accent leading-none">
            {member.stat}
          </div>
          <div className="mt-2 font-mono text-xs uppercase tracking-widest text-graphite">
            {member.statLabel}
          </div>
          <p className="mt-3 font-sans text-xs text-graphite leading-relaxed">{member.bio}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="group h-full flex flex-col">
      {/* Icon Monogram */}
      <div
        className={`relative h-[260px] md:h-[300px] flex items-center justify-center overflow-hidden transition-colors duration-700 ${member.dark ? 'bg-ink group-hover:bg-[#1C1C1E]' : 'bg-[rgba(12,12,12,0.02)] group-hover:bg-[rgba(12,12,12,0.06)]'}`}
      >
        <div
          className={`opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ${member.dark ? 'text-paper/20 group-hover:text-paper' : 'text-ink/10 group-hover:text-ink'}`}
        >
          {member.iconName ? (
            <Icon name={member.iconName} size={140} />
          ) : (
            <div className="font-mono text-[140px] leading-none font-light tracking-tighter">
              {member.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-6 md:p-8 flex-1 flex flex-col justify-end">
        <p
          className={`font-mono text-[10px] uppercase tracking-widest mb-1 ${member.dark ? 'text-paper/50' : 'text-graphite'}`}
        >
          {member.role}
        </p>
        <h3
          className={`font-mono text-lg font-medium mb-3 ${member.dark ? 'text-paper' : 'text-ink'}`}
        >
          {member.name}
        </h3>
        <p
          className={`font-sans text-xs leading-relaxed ${member.dark ? 'text-paper/60' : 'text-graphite'}`}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
}
