"use client";

import { motion } from "framer-motion";

export function CSSOrbs() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
      {/* Orb 1: Primary Yellow */}
      <motion.div
        className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-yellow-400/20 blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "-10%", left: "10%" }}
      />
      
      {/* Orb 2: Slate/Dark Contrast */}
      <motion.div
        className="absolute w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-slate-600/20 blur-[100px] md:blur-[140px]"
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 120, -100, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ top: "30%", right: "-10%" }}
      />

      {/* Orb 3: Secondary Gold Accent */}
      <motion.div
        className="absolute w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-yellow-600/15 blur-[60px] md:blur-[90px]"
        animate={{
          x: [0, 80, -100, 0],
          y: [0, 150, -50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ bottom: "-10%", left: "30%" }}
      />
    </div>
  );
}
