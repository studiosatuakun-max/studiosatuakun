"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface LeadMagnetProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink?: string;
  theme?: "dark" | "light";
}

export function LeadMagnet({ headline, subheadline, ctaText, ctaLink = "https://wa.me/6282260880878", theme = "dark" }: LeadMagnetProps) {
  const isLight = theme === "light";

  return (
    <section className={`py-20 md:py-32 ${isLight ? "bg-white" : "bg-slate-950"}`}>
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <motion.div 
          className={`relative rounded-3xl overflow-hidden p-8 md:p-16 text-center ${
            isLight 
              ? "bg-slate-900 text-white" 
              : "bg-slate-900 border border-white/10"
          }`}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[600px] bg-yellow-400/20 blur-[100px] pointer-events-none rounded-full"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance text-white">
              {headline}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-10 text-balance">
              {subheadline}
            </p>
            <Link href={ctaLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="w-full sm:w-auto gap-3 group text-xl tracking-wide bg-yellow-400 hover:bg-yellow-500 text-slate-900 border-none">
                {ctaText}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
