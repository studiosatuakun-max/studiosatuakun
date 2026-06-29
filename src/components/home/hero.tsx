"use client";

import { motion } from "framer-motion";
import { Button } from "../shared/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      {/* Background Grid & Glow */}
      <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-50"></div>

      <div className="container relative z-10 mx-auto px-4 sm:px-8 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm text-primary backdrop-blur-md">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="font-semibold tracking-wide uppercase text-xs">Premium Software House</span>
            </div>
          </motion.div>

          {/* Massive Typography */}
          <motion.h1 
            variants={itemVariants}
            className="text-6xl sm:text-8xl md:text-[10rem] font-extrabold tracking-tighter mb-4 text-foreground leading-[0.85]"
          >
            STUDIO<br />SATU AKUN
          </motion.h1>

          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-foreground/80 mb-8 max-w-3xl mt-4"
          >
            We engineer <span className="text-primary italic">digital excellence</span> for the modern era.
          </motion.h2>

          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
          >
            Membangun website, aplikasi mobile, dan automasi AI dengan desain premium dan performa tanpa kompromi.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group active:scale-95 transition-all">
                Mulai Projek Baru
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-base rounded-full border-white/20 hover:bg-white/5 active:scale-95 transition-all">
                Lihat Portfolio
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
