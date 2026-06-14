"use client";

import { motion } from "framer-motion";
import { Button } from "../shared/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const portfolioData = [
  {
    title: "Jasurd.com",
    category: "Marketplace",
    description: "Marketplace jasa absurd dengan fitur transaksi aman dan real-time chat.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    industry: "E-Commerce",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "SkorAkhir.com",
    category: "News Portal",
    description: "Portal berita olahraga berbasis link affiliate dengan performa tinggi & SEO optimized.",
    tech: ["Next.js", "Sanity CMS", "Redis"],
    industry: "Media & Sports",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Smart Tender",
    category: "Dashboard",
    description: "Smart dashboard untuk Project dan Tender monitoring yang terintegrasi.",
    tech: ["React", "Node.js", "PostgreSQL"],
    industry: "Construction & B2B",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Selfify.id",
    category: "Web App",
    description: "Safe space portal untuk kesehatan mental dan komunitas.",
    tech: ["Next.js", "Firebase", "Framer Motion"],
    industry: "Health & Wellness",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "Smart POS",
    category: "SaaS",
    description: "Sistem Point of Sales cerdas dengan manajemen inventaris dan laporan real-time.",
    tech: ["Next.js", "Supabase", "Prisma"],
    industry: "Retail & F&B",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "vitation.id",
    category: "SaaS",
    description: "SaaS Digital Invitation Generator untuk pembuatan undangan interaktif yang elegan.",
    tech: ["Next.js", "Tailwind", "PostgreSQL"],
    industry: "Events & Lifestyle",
    color: "from-zinc-500/20 to-neutral-500/20",
  },
];

export function FeaturedPortfolio() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Work</h2>
            <p className="text-muted-foreground text-lg">
              Bukti nyata dari komitmen kami menghasilkan produk digital berkualitas tinggi.
            </p>
          </div>
          <Link href="/portfolio">
            <Button variant="outline" className="hidden md:flex gap-2">
              Lihat Semua Portfolio <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.map((project, index) => (
            <motion.div
              key={index}
              className={`group relative rounded-2xl border border-border/50 bg-background overflow-hidden cursor-pointer ${
                index === 0 || index === 3 ? "md:col-span-2 lg:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Image / Mockup Area */}
              <div className={`h-64 sm:h-80 w-full bg-gradient-to-br ${project.color} flex items-center justify-center p-8 relative overflow-hidden`}>
                 <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-background/80 backdrop-blur-sm transition-all duration-300 flex items-center justify-center">
                    <Button variant="secondary" className="scale-0 group-hover:scale-100 transition-transform duration-300 gap-2">
                      View Project <ArrowUpRight className="w-4 h-4" />
                    </Button>
                 </div>
                 {/* Placeholder for actual image */}
                 <div className="w-full h-full border border-border/20 bg-background/50 rounded-lg shadow-xl flex items-center justify-center overflow-hidden transform group-hover:-translate-y-2 transition-transform duration-500">
                    <span className="font-bold text-2xl opacity-30">{project.title}</span>
                 </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.industry}</p>
                  </div>
                  <span className="px-3 py-1 bg-secondary rounded-full text-xs font-medium text-muted-foreground">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="text-xs font-medium px-2 py-1 rounded-md border border-border/50 text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 md:hidden flex justify-center">
           <Link href="/portfolio" className="w-full">
            <Button variant="outline" className="w-full gap-2">
              Lihat Semua Portfolio <ArrowUpRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
