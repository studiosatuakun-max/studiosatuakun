"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../shared/button";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Website", "Mobile App", "SaaS", "Dashboard", "Marketplace", "Web App"];

const portfolioData = [
  {
    title: "Jasurd.com",
    category: "Marketplace",
    description: "Marketplace jasa absurd dengan fitur transaksi aman dan real-time chat.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    industry: "E-Commerce",
    color: "from-blue-500/20 to-purple-500/20",
    slug: "jasurd",
    year: "2024"
  },
  {
    title: "SkorAkhir.com",
    category: "Website",
    description: "Portal berita olahraga berbasis link affiliate dengan performa tinggi & SEO optimized.",
    tech: ["Next.js", "Sanity CMS", "Redis"],
    industry: "Media & Sports",
    color: "from-green-500/20 to-emerald-500/20",
    slug: "skorakhir",
    year: "2025"
  },
  {
    title: "Smart Tender",
    category: "Dashboard",
    description: "Smart dashboard untuk Project dan Tender monitoring yang terintegrasi.",
    tech: ["React", "Node.js", "PostgreSQL"],
    industry: "Construction & B2B",
    color: "from-orange-500/20 to-red-500/20",
    slug: "smart-tender",
    year: "2024"
  },
  {
    title: "Selfify.id",
    category: "Web App",
    description: "Safe space portal untuk kesehatan mental dan komunitas.",
    tech: ["Next.js", "Firebase", "Framer Motion"],
    industry: "Health & Wellness",
    color: "from-pink-500/20 to-rose-500/20",
    slug: "selfify",
    year: "2024"
  },
  {
    title: "Smart POS",
    category: "SaaS",
    description: "Sistem Point of Sales cerdas dengan manajemen inventaris dan laporan real-time.",
    tech: ["Next.js", "Supabase", "Prisma"],
    industry: "Retail & F&B",
    color: "from-cyan-500/20 to-blue-500/20",
    slug: "smart-pos",
    year: "2025"
  },
  {
    title: "vitation.id",
    category: "SaaS",
    description: "SaaS Digital Invitation Generator untuk pembuatan undangan interaktif yang elegan.",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
    industry: "Events & Lifestyle",
    color: "from-zinc-500/20 to-neutral-500/20",
    slug: "vitation",
    year: "2026"
  },
];

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

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
            className="rounded-full"
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </Button>
        ))}
      </div>

      {/* Grid */}
      <motion.div 
        layout 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence>
          {filteredData.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.slug}
              className="group rounded-2xl border border-border/50 bg-secondary/10 overflow-hidden hover:border-primary/50 transition-colors"
            >
              {/* Image / Mockup Area with Interactive Hover */}
              <div className={`h-64 w-full bg-gradient-to-br ${project.color} p-6 relative overflow-hidden`}>
                 <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center backdrop-blur-sm">
                    <h4 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h4>
                    <p className="text-sm text-primary mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.industry} • {project.year}</p>
                    <Button variant="secondary" className="gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150">
                      View Case Study <ArrowUpRight className="w-4 h-4" />
                    </Button>
                 </div>
                 {/* Placeholder for actual image */}
                 <div className="w-full h-full border border-border/20 bg-background/50 rounded-lg shadow-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                    <span className="font-bold text-2xl opacity-30">{project.title}</span>
                 </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="px-3 py-1 bg-background border border-border/50 rounded-full text-xs font-medium text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-medium px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
