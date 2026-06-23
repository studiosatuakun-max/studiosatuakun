"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

interface HeroSectionProps {
  badgeText?: string;
  headline: React.ReactNode;
  subheadline: string;
  primaryCtaText: string;
  secondaryCtaText?: string;
  primaryCtaLink?: string;
  secondaryCtaLink?: string;
  theme?: "dark" | "light";
  children?: React.ReactNode; // For mockups or other elements below the hero text
}

export function HeroSection({
  badgeText,
  headline,
  subheadline,
  primaryCtaText,
  secondaryCtaText,
  primaryCtaLink = "https://wa.me/6282260880878", // WA link default
  secondaryCtaLink = "/portfolio",
  theme = "dark",
  children
}: HeroSectionProps) {
  const isLight = theme === "light";

  return (
    <section className={`relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden ${isLight ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-50"}`}>
      {/* Subtle grid background */}
      <div className={`absolute inset-0 ${isLight ? "bg-grid-black/[0.03]" : "bg-grid-white/[0.02]"} bg-[size:32px_32px]`}></div>
      
      {/* Spotlight Radial Gradient */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] ${isLight ? "bg-yellow-400/10" : "bg-yellow-400/5"} blur-[100px] rounded-full pointer-events-none`}></div>

      <motion.div 
        className="container relative z-10 mx-auto px-4 sm:px-8 text-center max-w-4xl flex flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <Link href="/" className="mb-12 inline-block">
            <Image 
              src={isLight ? "/color.svg" : "/bw.svg"} 
              alt="Studio Satu Akun Logo" 
              width={200} 
              height={60} 
              className="h-16 sm:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Pill Badge */}
          {badgeText && (
            <div className={`inline-flex items-center rounded-full border ${isLight ? "border-slate-200 bg-white/50 text-slate-700 shadow-sm" : "border-white/10 bg-white/5 text-slate-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]"} px-4 py-1.5 text-xs sm:text-sm mb-8 backdrop-blur-md`}>
              <Sparkles className={`w-3 h-3 sm:w-4 sm:h-4 mr-2 ${isLight ? "text-yellow-500" : "text-yellow-400"}`} />
              <span className="font-medium tracking-tight">{badgeText}</span>
            </div>
          )}
        </motion.div>

        <motion.h1 
          className={`text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-balance drop-shadow-2xl ${isLight ? "text-slate-900" : "text-white"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {headline}
        </motion.h1>

        <motion.p 
          className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto text-balance leading-relaxed tracking-tight ${isLight ? "text-slate-600" : "text-slate-400"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {subheadline}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href={primaryCtaLink} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className={`w-full sm:w-auto gap-3 group text-xl tracking-wide border-none ${isLight ? "bg-yellow-400 hover:bg-yellow-500 text-slate-900" : "bg-yellow-400 hover:bg-yellow-500 text-slate-900"}`}>
              {primaryCtaText}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          {secondaryCtaText && (
            <Link href={secondaryCtaLink}>
              <Button size="lg" variant="outline" className={`w-full sm:w-auto text-xl tracking-wide ${isLight ? "border-slate-300 text-slate-700 hover:bg-slate-100" : "border-white/20 text-white hover:bg-white/10"}`}>
                {secondaryCtaText}
              </Button>
            </Link>
          )}
        </motion.div>
      </motion.div>

      {/* Children for mockups or illustrations */}
      {children && (
        <motion.div 
          className="mt-20 mx-auto max-w-5xl px-4 sm:px-8 relative z-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}
