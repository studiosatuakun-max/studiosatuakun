"use client";

import { motion } from "framer-motion";
import { Button } from "../shared/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div 
          className="relative rounded-2xl overflow-hidden bg-[#111] border border-white/10 px-6 py-20 md:px-12 md:py-24 text-center shadow-2xl"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Abstract Grid & Glow */}
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:24px_24px]"></div>
          <div className="absolute top-0 left-1/2 w-full max-w-lg h-full bg-white/[0.03] blur-[100px] -translate-x-1/2 pointer-events-none"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter text-foreground">
              Ready to Build?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 tracking-tight">
              Transform your ideas into high-performance digital products. Let's discuss your technical requirements and architecture.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="h-12 px-8 text-base font-medium shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
