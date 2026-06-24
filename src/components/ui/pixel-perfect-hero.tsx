"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code } from "lucide-react";

interface PixelHeroProps {
  word1: string;
  word2: string;
  description: string;
  primaryCta: string;
  primaryCtaMobile: string;
  secondaryCta: string;
  secondaryCtaMobile: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  githubUrl?: string;
}

export function PixelHero({
  word1,
  word2,
  description,
  primaryCta,
  primaryCtaMobile,
  secondaryCta,
  secondaryCtaMobile,
  onPrimaryClick,
  onSecondaryClick,
  githubUrl = "#",
}: PixelHeroProps) {
  // Utility to split text into characters for a "pixel-perfect" staggered reveal
  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <motion.span
        key={index}
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ));
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full min-h-[80vh] overflow-hidden bg-background px-4 sm:px-8">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-white/[0.02] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        
        {/* Animated Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white mb-6 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center">
          <span className="flex justify-center">{splitText(word1)}</span>
          <span className="flex justify-center text-white/40 italic font-serif">{splitText(word2)}</span>
        </h1>

        {/* Animated Description */}
        <motion.p 
          className="text-lg md:text-xl text-white/50 max-w-2xl mb-12 tracking-tight leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          {description}
        </motion.p>

        {/* Action Buttons with the | Button | style */}
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-0 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
        >
          {/* Primary CTA */}
          <button 
            onClick={onPrimaryClick}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto h-16 px-10 sm:px-12 bg-transparent text-white font-medium text-lg transition-all active:scale-95 sm:border-x border-white/20 hover:border-white/60"
          >
            <span className="sm:hidden">{primaryCtaMobile}</span>
            <span className="hidden sm:inline-block">{primaryCta}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Secondary CTA */}
          <Link 
            href={githubUrl}
            onClick={onSecondaryClick}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto h-16 px-10 sm:px-12 bg-transparent text-white/70 hover:text-white font-medium text-lg transition-all active:scale-95 sm:border-x border-white/20 hover:border-white/60 sm:border-l-0 mt-4 sm:mt-0"
          >
            <Code className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity" />
            <span className="sm:hidden">{secondaryCtaMobile}</span>
            <span className="hidden sm:inline-block">{secondaryCta}</span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
