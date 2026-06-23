"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
            <PortfolioCard key={index} project={project} index={index} />
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

function PortfolioCard({ project, index }: { project: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1500 }}
    >
      <motion.div 
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="h-full w-full flex flex-col transition-all duration-300 hover:shadow-[0_40px_80px_-20px_rgba(255,255,255,0.05)] rounded-xl relative"
      >
        {/* Glow effect behind */}
        <div className="absolute inset-0 bg-white/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" style={{ transform: "translateZ(-20px)" }}></div>
        
        {/* Dashboard Window Mockup */}
        <div className="h-64 sm:h-80 w-full bg-[#111] rounded-t-xl border border-white/10 border-b-0 overflow-hidden relative" style={{ transform: "translateZ(20px)" }}>
          {/* Fake Browser Header */}
          <div className="h-10 bg-[#0a0a0a] border-b border-white/10 flex items-center px-4 gap-2 relative z-10" style={{ transform: "translateZ(10px)" }}>
             <div className="flex gap-1.5">
               <div className="w-2.5 h-2.5 rounded-full bg-white/20 shadow-sm"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-white/20 shadow-sm"></div>
               <div className="w-2.5 h-2.5 rounded-full bg-white/20 shadow-sm"></div>
             </div>
             <div className="ml-4 px-3 py-1 bg-white/5 rounded-md text-[10px] font-mono text-muted-foreground border border-white/5 shadow-inner">
               {project.title.toLowerCase().replace(/\s+/g, '-')}
             </div>
          </div>
          {/* Content Area */}
          <div className="absolute inset-x-0 bottom-0 top-10 bg-grid-white/[0.02] bg-[size:16px_16px] flex items-center justify-center pt-6 px-6" style={{ transformStyle: "preserve-3d" }}>
             <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent z-0"></div>
             
             {/* App UI Representation */}
             <div className="w-full h-full rounded-t-xl border border-white/10 border-b-0 bg-[#161616] shadow-[0_-10px_30px_rgba(0,0,0,0.5)] translate-y-8 group-hover:translate-y-4 transition-transform duration-500 relative z-10 overflow-hidden" style={{ transform: "translateZ(30px)" }}>
               <ProjectMockup title={project.title} />
             </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="p-6 bg-[#0a0a0a] border border-white/10 rounded-b-xl flex-grow z-20" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-3" style={{ transform: "translateZ(10px)" }}>
            <h3 className="text-xl font-bold tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
            <span className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded-md border border-white/5">{project.category}</span>
          </div>
          <p className="text-muted-foreground text-sm mb-6" style={{ transform: "translateZ(5px)" }}>
            {project.description}
          </p>
          <div className="flex gap-2" style={{ transform: "translateZ(15px)" }}>
            {project.tech.map((t: string, idx: number) => (
              <span key={idx} className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground">
                {t}{idx < project.tech.length - 1 && <span className="mx-2 text-white/20">/</span>}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.a>
  );
}
