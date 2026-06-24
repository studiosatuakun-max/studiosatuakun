"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../shared/button";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Website", "Mobile App", "SaaS", "Dashboard", "Marketplace", "Web App"];

import Image from "next/image";

const portfolioData = [
  {
    title: "Jasurd.com",
    image: "/portfolio/jasurd-com.png",
    category: "Marketplace",
    description: "Marketplace jasa absurd dengan fitur transaksi aman dan real-time chat.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    industry: "E-Commerce",
    slug: "jasurd",
    year: "2024",
    link: "https://jasurd.com",
  },
  {
    title: "SkorAkhir.com",
    image: "/portfolio/skor-akhir.png",
    category: "Website",
    description: "Portal berita olahraga berbasis link affiliate dengan performa tinggi & SEO optimized.",
    tech: ["Next.js", "Sanity CMS", "Redis"],
    industry: "Media & Sports",
    slug: "skorakhir",
    year: "2025",
    link: "https://skorakhir.com",
  },
  {
    title: "Smart Tender",
    image: "/portfolio/smart-tender.png",
    category: "Dashboard",
    description: "Smart dashboard untuk Project dan Tender monitoring yang terintegrasi.",
    tech: ["React", "Node.js", "PostgreSQL"],
    industry: "Construction & B2B",
    slug: "smart-tender",
    year: "2024",
    link: "https://tender-intelligence-project-managem.vercel.app/",
  },
  {
    title: "Selfify.id",
    image: "/portfolio/selfify-id.png",
    category: "Web App",
    description: "Safe space portal untuk kesehatan mental dan komunitas.",
    tech: ["Next.js", "Firebase", "Framer Motion"],
    industry: "Health & Wellness",
    slug: "selfify",
    year: "2024",
    link: "https://selfify.id",
  },
  {
    title: "Smart POS",
    image: "/portfolio/smart-pos.png",
    category: "SaaS",
    description: "Sistem Point of Sales cerdas dengan manajemen inventaris dan laporan real-time.",
    tech: ["Next.js", "Supabase", "Prisma"],
    industry: "Retail & F&B",
    slug: "smart-pos",
    year: "2025",
    link: "https://greennagan-deels-projects.vercel.app/",
  },
  {
    title: "vitation.id",
    image: "/portfolio/vitation-id.png",
    category: "SaaS",
    description: "SaaS Digital Invitation Generator untuk pembuatan undangan interaktif yang elegan.",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
    industry: "Events & Lifestyle",
    slug: "vitation",
    year: "2024",
    link: "https://vitation.id",
  },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  const filteredData = portfolioData.filter(
    (item) => activeCategory === "All" || item.category === activeCategory
  );

  return (
    <div className="py-12">
      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            className="rounded-full text-xs font-mono"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <div ref={containerRef} className="relative">
        <div 
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
          }}
        />
        
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
        >
          <AnimatePresence>
            {filteredData.map((project) => (
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.slug}
                className="group relative flex flex-col bg-[#0a0a0a] cursor-pointer"
              >
                {/* Dashboard Window Mockup */}
                <div className="h-56 w-full bg-[#111] rounded-t-xl border border-white/10 border-b-0 overflow-hidden relative">
                   {/* Fake Browser Header */}
                   <div className="h-8 bg-[#0a0a0a] border-b border-white/10 flex items-center px-4 gap-2 relative z-10">
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.6)] animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.6)] animate-pulse" style={{ animationDelay: '200ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse" style={{ animationDelay: '400ms' }}></div>
                      </div>
                   </div>
                  {/* Content Area */}
                  <div className="absolute inset-x-0 bottom-0 top-8 bg-grid-white/[0.02] bg-[size:16px_16px] flex items-center justify-center pt-6 px-4">
                     <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-0"></div>
                     
                     <div className="w-full h-full rounded-t-xl border border-white/10 border-b-0 bg-[#161616] shadow-2xl translate-y-8 group-hover:translate-y-4 transition-transform duration-500 relative z-10 overflow-hidden">
                       <Image src={project.image} alt={project.title} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 33vw" />
                     </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 border border-white/10 rounded-b-xl flex-grow z-10 bg-[#0a0a0a] flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-bold tracking-tight group-hover:text-white transition-colors">{project.title}</h3>
                    <span className="text-[10px] font-mono text-muted-foreground">{project.category}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] uppercase tracking-wider font-mono text-muted-foreground">
                        {t}{idx < project.tech.length - 1 && <span className="mx-2 text-white/20">/</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
