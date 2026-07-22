import React from 'react';

const items = [
  'Landing Pages',
  '✦',
  'Web Applications',
  '✦',
  'Fast Performance',
  '✦',
  'Cloud Infrastructure',
  '✦',
  'Responsive UI',
  '✦',
  'Dashboard Monitoring',
  '✦',
  'AI Automation',
  '✦',
  'REST & GraphQL APIs',
  '✦',
  'SaaS Architecture',
  '✦',
  'Enterprise Solutions',
  '✦',
];

export default function MarqueeSection() {
  const doubled = [...items, ...items];

  return (
    <div className="relative z-10 bg-paper border-y border-[rgba(107,110,115,0.25)] overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {doubled?.map((item, i) => (
          <span
            key={i}
            className={`
              font-mono text-xs uppercase tracking-widest px-6
              ${item === '✦' ? 'text-accent' : 'text-graphite'}
            `}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
