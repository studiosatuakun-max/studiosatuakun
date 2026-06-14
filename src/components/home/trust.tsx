"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Projects Deployed" },
  { value: "30+", label: "Startup Partners" },
  { value: "5+", label: "Years Expertise" },
  { value: "99.9%", label: "Uptime SLA" },
];

export function Trust() {
  return (
    <section className="py-20 border-y border-white/10 bg-background/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
      <div className="container relative z-10 mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="text-center px-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
