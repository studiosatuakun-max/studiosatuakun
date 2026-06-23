"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../shared/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { CentralHubView, CodeToUIView, WebsiteView, AppView, SoftwareView } from "./hero-mockups";

export function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPct = e.clientX / innerWidth - 0.5;
      const yPct = e.clientY / innerHeight - 0.5;
      x.set(xPct);
      y.set(yPct);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background" style={{ perspective: 1200 }}>
      {/* Vercel-style subtle grid background */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
      
      {/* Spotlight Radial Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-white/[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <motion.div 
        className="container relative z-10 mx-auto px-4 sm:px-8 text-center max-w-4xl flex flex-col items-center"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ transform: "translateZ(60px)" }}
        >
          {/* Pill Badge */}
          <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs sm:text-sm text-foreground/80 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-foreground/70" />
            <span className="font-medium tracking-tight">We Build Premium Digital Products</span>
          </div>
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-balance text-gradient drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ transform: "translateZ(80px)" }}
        >
          Crafting Digital Products That Drive Growth
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ transform: "translateZ(40px)" }}
        >
          A software development studio focused on building high-performance websites, mobile apps, and AI automations with unparalleled user experience.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-0 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{ transform: "translateZ(60px)" }}
        >
          <Link href="/contact">
            <Button size="lg" className="w-full sm:w-auto gap-3 group text-xl tracking-wide shadow-none bg-transparent">
              Start a Project 
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button size="lg" variant="outline" className="w-full sm:w-auto text-xl tracking-wide hover:bg-transparent shadow-none bg-transparent sm:border-l-0">
              View Our Work
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Vercel/Linear style minimal mock mockup with 3D Float */}
      <motion.div 
        className="mt-20 mx-auto max-w-5xl px-4 sm:px-8 relative"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        style={{ perspective: 1200 }}
      >
        <motion.div 
          className="relative rounded-xl border border-white/10 bg-black/50 p-1 backdrop-blur-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.05)] overflow-hidden aspect-[16/9] flex flex-col"
          style={{ rotateX, rotateY, transformStyle: "preserve-3d", transform: "translateZ(30px)" }}
        >
           {/* Fake macOS window header */}
           <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5" style={{ transform: "translateZ(10px)" }}>
             <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_5px_rgba(239,68,68,0.5)]"></div>
             <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-[0_0_5px_rgba(234,179,8,0.5)]"></div>
             <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
           </div>
           {/* Mockup content area */}
           <div className="flex-1 bg-[#050505] flex overflow-hidden relative" style={{ transform: "translateZ(20px)" }}>
             <PlatformRotator />
           </div>
        </motion.div>
        
        {/* Glow behind mockup */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-1/2 bg-white/5 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
      </motion.div>
    </section>
  );
}


function PlatformRotator() {
  const [index, setIndex] = useState(0);
  const views = [
    <CentralHubView key="central-hub" />,
    <CodeToUIView key="code-ui" />,
    <AppView key="app" />,
    <SoftwareView key="software" />
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % views.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {views[index]}
    </AnimatePresence>
  );
}
