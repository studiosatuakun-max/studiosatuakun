"use client";

import { motion } from "framer-motion";
import { Button } from "../shared/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Vercel-style subtle grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
      
      {/* Spotlight Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-foreground/80 mb-8 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-foreground/70" />
            <span className="font-medium tracking-tight">We Build Premium Digital Products</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-balance text-gradient"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Crafting Digital Products That Drive Growth
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A software development studio focused on building high-performance websites, mobile apps, and AI automations with unparalleled user experience.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto gap-2 group">
              Start a Project 
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              View Our Work
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Vercel/Linear style minimal mock mockup */}
      <motion.div 
        className="mt-20 mx-auto max-w-5xl px-4 sm:px-8 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="relative rounded-xl border border-white/10 bg-black/50 p-1 backdrop-blur-xl shadow-2xl overflow-hidden aspect-[16/9] flex flex-col">
           {/* Fake macOS window header */}
           <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
             <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
             <div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
           </div>
           {/* Mockup content area */}
           <div className="flex-1 bg-[#0a0a0a] flex items-center justify-center overflow-hidden relative">
             <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:24px_24px]"></div>
             <div className="text-muted-foreground font-mono text-sm opacity-40 flex items-center gap-2">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               System Initialized
             </div>
           </div>
        </div>
        
        {/* Glow behind mockup */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-white/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </motion.div>
    </section>
  );
}
