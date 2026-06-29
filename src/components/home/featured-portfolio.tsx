"use client";

import { motion } from "framer-motion";
import { Button } from "../shared/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const portfolioData = [
  {
    title: "Jasurd.com",
    image: "/portfolio/jasurd-com.png",
    category: "Marketplace",
    description: "Marketplace jasa absurd dengan fitur transaksi aman dan real-time chat.",
    tech: ["Next.js", "Supabase", "Tailwind"],
    industry: "E-Commerce",
    link: "https://jasurd.com",
  },
  {
    title: "SkorAkhir.com",
    image: "/portfolio/skor-akhir.png",
    category: "News Portal",
    description: "Portal berita olahraga berbasis link affiliate dengan performa tinggi & SEO optimized.",
    tech: ["Next.js", "Sanity CMS", "Redis"],
    industry: "Media & Sports",
    link: "https://skorakhir.com",
  },
  {
    title: "Selfify.id",
    image: "/portfolio/selfify-id.png",
    category: "Web App",
    description: "Safe space portal untuk kesehatan mental dan komunitas.",
    tech: ["Next.js", "Firebase", "Framer Motion"],
    industry: "Health & Wellness",
    link: "https://selfify.id",
  },
  {
    title: "Smart POS",
    image: "/portfolio/smart-pos.png",
    category: "SaaS",
    description: "Sistem Point of Sales cerdas dengan manajemen inventaris dan laporan real-time.",
    tech: ["Next.js", "Supabase", "Prisma"],
    industry: "Retail & F&B",
    link: "https://greennagan-deels-projects.vercel.app/",
  },
];

export function FeaturedPortfolio() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-32 relative bg-background border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-24">
          {/* Left Column - Sticky Info */}
          <div className="w-full md:w-1/3 md:sticky md:top-32 h-fit">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-[0.9]">Selected <br/> <span className="text-slate-500">Works.</span></h2>
            
            <div className="hidden md:block min-h-[300px]">
               <motion.div
                 key={activeIndex}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.5 }}
               >
                 <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6 inline-block tracking-widest uppercase">
                    {portfolioData[activeIndex].category}
                 </span>
                 <h3 className="text-4xl font-bold mb-4 text-foreground">{portfolioData[activeIndex].title}</h3>
                 <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{portfolioData[activeIndex].description}</p>
                 <div className="flex flex-wrap gap-2 mb-10">
                    {portfolioData[activeIndex].tech.map((t, i) => (
                      <span key={i} className="text-xs uppercase tracking-widest font-medium px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300">
                        {t}
                      </span>
                    ))}
                 </div>
                 <Link href={portfolioData[activeIndex].link} target="_blank">
                    <Button variant="outline" className="gap-2 rounded-full border-white/20 hover:bg-white/5 active:scale-95 transition-all h-12 px-6">
                      Visit Site <ArrowUpRight className="w-4 h-4" />
                    </Button>
                 </Link>
               </motion.div>
            </div>
            
            {/* View All Mobile */}
            <div className="mt-8 md:hidden">
              <Link href="/portfolio" className="w-full">
                <Button variant="outline" className="w-full gap-2 rounded-full h-14 text-base border-white/20 hover:bg-white/5 active:scale-95 transition-all">
                  View All Projects <ArrowUpRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Scrollable Images */}
          <div className="w-full md:w-2/3 flex flex-col gap-16 md:gap-32 pb-10">
            {portfolioData.map((project, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                onViewportEnter={() => setActiveIndex(index)}
                transition={{ duration: 0.6 }}
                className="group relative"
              >
                {/* Mobile Info Overlay */}
                <div className="md:hidden mb-6">
                   <span className="text-xs font-mono text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-4 inline-block tracking-widest uppercase">
                      {project.category}
                   </span>
                   <h3 className="text-3xl font-bold mb-3">{project.title}</h3>
                   <p className="text-muted-foreground text-base leading-relaxed mb-6">{project.description}</p>
                   <Link href={project.link} target="_blank">
                      <Button variant="outline" className="gap-2 rounded-full border-white/20 hover:bg-white/5 active:scale-95 transition-all h-12 px-6">
                        Visit Site <ArrowUpRight className="w-4 h-4" />
                      </Button>
                   </Link>
                </div>

                {/* Project Image wrapped in Browser Mockup */}
                <a href={project.link} target="_blank" rel="noreferrer" className="block w-full overflow-hidden rounded-xl border border-slate-800 bg-[#0f172a] shadow-2xl relative group-hover:border-slate-700 transition-colors">
                  {/* Browser Header */}
                  <div className="h-10 bg-[#020617] border-b border-slate-800 flex items-center px-4 gap-4 relative z-20">
                    {/* Traffic Lights */}
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                    </div>
                    {/* Fake URL Bar */}
                    <div className="flex-1 max-w-[200px] sm:max-w-sm h-6 bg-slate-900 rounded-md border border-slate-800 flex items-center px-3">
                      <span className="text-[10px] text-slate-500 font-mono truncate">
                        {project.link.replace(/^https?:\/\//, '')}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 top-10 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] w-full overflow-hidden bg-slate-800/50">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, 66vw" 
                    />
                  </div>
                  {/* Floating Action Button on Hover */}
                  <div className="absolute bottom-6 right-6 z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                     <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                        <ArrowUpRight className="w-6 h-6" />
                     </div>
                  </div>
                </a>
              </motion.div>
            ))}

            {/* View All Desktop */}
            <div className="hidden md:flex justify-center mt-10">
               <Link href="/portfolio">
                 <Button size="lg" variant="outline" className="gap-2 rounded-full border-white/20 hover:bg-white/5 h-16 px-10 active:scale-95 transition-all text-lg font-medium">
                   View All Projects <ArrowUpRight className="w-5 h-5" />
                 </Button>
               </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
