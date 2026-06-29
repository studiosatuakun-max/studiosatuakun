"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function CountUp({ end, suffix = "", duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60); // Assuming 60fps
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="py-20 border-y border-white/5 bg-background/50 relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-16 text-center divide-x divide-white/10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-2">
              <CountUp end={10} suffix="+" />
            </h3>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
              Klien Terpercaya
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-2">
              <CountUp end={7} suffix="+" />
            </h3>
            <p className="text-muted-foreground font-medium uppercase tracking-widest text-sm">
              Project Selesai
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
