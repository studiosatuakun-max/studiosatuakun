"use client";

import { motion } from "framer-motion";

const clients = [
  "ACME CORP", 
  "GLOBAL TECH", 
  "STARTUP.IO", 
  "NEXTGEN VENTURES", 
  "INNOVATE XYZ", 
  "NEXUS LOGISTICS", 
  "ALPHA STUDIO"
];

export function Trust() {
  return (
    <section className="py-16 border-y border-white/5 bg-background overflow-hidden flex flex-col items-center">
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-sm font-medium text-muted-foreground uppercase tracking-widest mb-10"
      >
        Dipercaya Oleh Inovator & Perusahaan Besar
      </motion.p>
      
      <div className="relative w-full flex overflow-hidden group">
         {/* Fade edges */}
         <div className="absolute inset-y-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
         
         {/* Marquee Track */}
         <div className="flex w-fit animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused]">
            {/* We duplicate the array to ensure a seamless infinite scroll */}
            {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
               <div key={i} className="mx-8 sm:mx-16 flex items-center justify-center">
                  <span className="text-3xl sm:text-5xl font-black text-white/20 hover:text-white transition-colors duration-300 cursor-default tracking-tighter">
                     {client}
                  </span>
               </div>
            ))}
         </div>
      </div>
    </section>
  );
}
