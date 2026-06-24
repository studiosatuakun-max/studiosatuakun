"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 md:py-48 relative bg-[#020202] border-t border-white/5 overflow-hidden flex items-center justify-center">
      {/* Subtle minimalist border gradient and glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-[150px] bg-yellow-400/5 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Status Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 mb-10"
          >
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </div>
            <span className="text-xs font-medium text-white/60 tracking-wider uppercase">Available for new projects</span>
          </motion.div>

          {/* Minimalist Heading */}
          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Let's build something <br /> <span className="text-white/40 italic font-normal tracking-normal" style={{ fontFamily: "'Times New Roman MT', 'Times New Roman', serif" }}>extraordinary.</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p 
            className="text-white/40 text-lg md:text-2xl mb-14 tracking-tight max-w-4xl lg:max-w-none"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform your visionary ideas into high-performance digital products. 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link 
              href="https://wa.me/6282260880878?text=Halo%20Studio%20Satu%20Akun,%20saya%20ingin%20konsultasi%20mengenai%20project%20saya."
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 h-16 px-12 bg-transparent text-white font-semibold text-2xl transition-all active:scale-95 border-x border-white/20 hover:border-white/60"
            >
              <span className="relative z-10 flex items-center gap-3">
                Gratis Konsultasi
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
