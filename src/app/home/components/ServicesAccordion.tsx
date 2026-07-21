'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Service {
  num: string;
  title: string;
  price: string;
  detail: string;
  tags: string[];
}

const services: Service[] = [
  {
    num: '01',
    title: 'Web Custom',
    price: 'From IDR 15.000.000',
    detail:
      'Bespoke web solutions tailored to your unique business needs, featuring cutting-edge technologies and fully customized architectures.',
    tags: ['Custom Build', 'Tailored', 'Scalable'],
  },
  {
    num: '02',
    title: 'Landing Page',
    price: 'From IDR 2.500.000',
    detail:
      'Focus on conversion, SEO, high-speed access, and visual appeal with Bento Grid and smooth animations. Perfect for personal branding or product showcase.',
    tags: ['Conversion', 'SEO', 'Fast Loading', 'Animations'],
  },
  {
    num: '03',
    title: 'Web App',
    price: 'From IDR 8.000.000',
    detail:
      'Highly interactive web applications with robust state management, authentication, and database logic. Ideal for marketplaces, SaaS, and community portals.',
    tags: ['Next.js', 'Supabase', 'React', 'Interactive'],
  },
  {
    num: '04',
    title: 'Dashboard Monitoring',
    price: 'From IDR 12.000.000',
    detail:
      'Data visualization with charts, tables, complex CRUD operations, reporting, and role/permission management. For Logistics, HR, Finance.',
    tags: ['Data Viz', 'CRUD', 'Roles', 'Reporting'],
  },
  {
    num: '05',
    title: 'Software Studio',
    price: 'From IDR 25.000.000',
    detail:
      'Custom solutions built from scratch, third-party API integrations, and modular architecture for unique business logic. For Enterprise clients.',
    tags: ['Custom', 'API Integration', 'Enterprise', 'Modular'],
  },
  {
    num: '06',
    title: 'AI Automation',
    price: 'Retainer',
    detail:
      'Integrating LLMs, multimodal AI tools, and automated workflows to significantly increase client operational efficiency.',
    tags: ['LLMs', 'Automation', 'Workflows', 'AI'],
  },
];

export default function ServicesAccordion() {
  const [open, setOpen] = useState<string | null>('01');

  return (
    <section id="services" className="bg-paper border-t border-[rgba(107,110,115,0.25)]">
      {/* Header */}
      <div className="px-6 md:px-10 pt-16 pb-8">
        <span className="font-mono text-xs uppercase tracking-widest2 text-graphite">Services</span>
        <div className="mt-2 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="font-mono text-3xl md:text-4xl font-light text-ink tracking-tight">
            Bring us your
            <br />
            <em className="not-italic text-graphite">biggest challenges.</em>
          </h2>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent hover:text-accent-hover transition-colors duration-200"
          >
            Start a Project Inquiry
            <Icon name="ArrowRightIcon" size={12} />
          </a>
        </div>
      </div>

      {/* Accordion */}
      <div className="border-t border-[rgba(107,110,115,0.25)]">
        {services.map((svc) => (
          <div
            key={svc.num}
            className={`
              border-b border-[rgba(107,110,115,0.25)] cursor-pointer
              transition-colors duration-300 group
              ${open === svc.num ? 'bg-ink text-paper' : 'bg-paper hover:bg-ink/4'}
            `}
            onClick={() => setOpen(open === svc.num ? null : svc.num)}
          >
            <div className="px-6 md:px-10 py-6 flex items-center justify-between">
              <div className="flex items-baseline gap-6 md:gap-10">
                <span
                  className={`font-mono text-xs opacity-40 ${open === svc.num ? 'text-paper' : 'text-ink'}`}
                >
                  {svc.num}
                </span>
                <h3
                  className={`font-mono text-xl md:text-3xl font-light tracking-tight ${open === svc.num ? 'text-paper' : 'text-ink'}`}
                >
                  {svc.title}
                </h3>
              </div>
              <div className="flex items-center gap-6">
                <span
                  className={`font-mono text-xs uppercase tracking-widest hidden md:block ${open === svc.num ? 'text-paper/60' : 'text-graphite'}`}
                >
                  {svc.price}
                </span>
                <div
                  className={`transition-transform duration-300 ${open === svc.num ? 'rotate-45' : ''}`}
                >
                  <Icon
                    name="PlusIcon"
                    size={16}
                    className={open === svc.num ? 'text-paper' : 'text-graphite'}
                  />
                </div>
              </div>
            </div>

            <div className={`accordion-content ${open === svc.num ? 'open' : ''}`}>
              <div className="px-6 md:px-10 pb-8 md:pl-[calc(2.5rem+1.5rem+2.5rem)]">
                <p
                  className={`font-sans text-sm leading-relaxed mb-4 max-w-2xl ${open === svc.num ? 'text-paper/70' : 'text-graphite'}`}
                >
                  {svc.detail}
                </p>
                <div className="flex flex-wrap gap-2">
                  {svc.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`tag-pill ${open === svc.num ? 'border-paper/20 text-paper/50' : ''}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
