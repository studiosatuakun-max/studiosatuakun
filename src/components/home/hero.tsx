"use client";

import { motion } from "framer-motion";
import { Button } from "../shared/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-8 text-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm text-primary mb-8">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
            We Build Digital Products
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We Build Digital Products That <span className="text-primary">Grow Businesses</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Website, Mobile App, AI Automation, dan Software Custom untuk membantu bisnis berkembang lebih cepat dan efisien di era digital.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              Konsultasi Gratis <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Lihat Portfolio
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Mockup Area */}
      <motion.div 
        className="mt-20 mx-auto max-w-5xl px-4 sm:px-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <div className="rounded-xl border border-border/50 bg-secondary/50 p-2 backdrop-blur-sm shadow-2xl overflow-hidden aspect-video relative flex items-center justify-center">
           <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/10"></div>
           <p className="text-muted-foreground font-mono text-sm opacity-50">Interactive Dashboard Preview</p>
        </div>
      </motion.div>
    </section>
  );
}
