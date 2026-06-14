"use client";

import { motion } from "framer-motion";
import { Button } from "../shared/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { ProjectMockup } from "../portfolio/project-mockups";

const portfolioData = [
  {
    title: "Jasurd.com",
    category: "Marketplace",
    description: "Marketplace jasa absurd dengan fitur transaksi aman dan real-time chat.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    industry: "E-Commerce",
    link: "https://jasurd.com",
  },
  {
    title: "SkorAkhir.com",
    category: "News Portal",
    description: "Portal berita olahraga berbasis link affiliate dengan performa tinggi & SEO optimized.",
    tech: ["Next.js", "Sanity CMS", "Redis"],
    industry: "Media & Sports",
    link: "https://skorakhir.com",
  },
  {
    title: "Smart Tender",
    category: "Dashboard",
    description: "Smart dashboard untuk Project dan Tender monitoring yang terintegrasi.",
    tech: ["React", "Node.js", "PostgreSQL"],
    industry: "Construction & B2B",
    link: "https://tender-intelligence-project-managem.vercel.app/",
  },
  {
    title: "Selfify.id",
    category: "Web App",
    description: "Safe space portal untuk kesehatan mental dan komunitas.",
    tech: ["Next.js", "Firebase", "Framer Motion"],
    industry: "Health & Wellness",
    link: "https://selfify.id",
  },
  {
    title: "Smart POS",
    category: "SaaS",
    description: "Sistem Point of Sales cerdas dengan manajemen inventaris dan laporan real-time.",
    tech: ["Next.js", "Supabase", "Prisma"],
    industry: "Retail & F&B",
    link: "https://greennagan-deels-projects.vercel.app/",
  },
  {
    title: "vitation.id",
    category: "SaaS",
    description: "SaaS Digital Invitation Generator untuk pembuatan undangan interaktif yang elegan.",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
    industry: "Events & Lifestyle",
    link: "https://vitation.id",
  },
];

export function FeaturedPortfolio() {
  return (
    <section className="py-24 relative border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Selected Works</h2>
            <p className="text-muted-foreground text-lg tracking-tight">
              A showcase of robust applications designed for scale and conversion.
            </p>
          </div>
          <Link href="/portfolio">
            <Button variant="outline" className="hidden md:flex gap-2">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioData.slice(0, 4).map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="group relative flex flex-col cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Dashboard Window Mockup */}
              <div className="h-64 sm:h-80 w-full bg-[#111] rounded-t-xl border border-white/10 border-b-0 overflow-hidden relative">
                {/* Fake Browser Header */}
                <div className="h-10 bg-[#0a0a0a] border-b border-white/10 flex items-center px-4 gap-2 relative z-10">
                   <div className="flex gap-1.5">
                     <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                     <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                   </div>
                   <div className="ml-4 px-3 py-1 bg-white/5 rounded-md text-[10px] font-mono text-muted-foreground border border-white/5">
                     {project.title.toLowerCase().replace(/\s+/g, '-')}
                   </div>
                </div>
                {/* Content Area */}
                <div className="absolute inset-x-0 bottom-0 top-10 bg-grid-white/[0.02] bg-[size:16px_16px] flex items-center justify-center pt-6 px-6">
                   <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-0"></div>
                   
                   {/* App UI Representation */}
                   <div className="w-full h-full rounded-t-xl border border-white/10 border-b-0 bg-[#161616] shadow-2xl translate-y-8 group-hover:translate-y-4 transition-transform duration-500 relative z-10 overflow-hidden">
                     <ProjectMockup title={project.title} />
                   </div>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-b-xl flex-grow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
                  <span className="text-xs font-mono text-muted-foreground">{project.category}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground">
                      {t}{idx < project.tech.length - 1 && <span className="mx-2 text-white/20">/</span>}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 md:hidden flex justify-center">
           <Link href="/portfolio" className="w-full">
            <Button variant="outline" className="w-full gap-2">
              View All Projects <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
