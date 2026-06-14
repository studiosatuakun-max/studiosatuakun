"use client";

import { motion } from "framer-motion";
import { Button } from "../shared/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-8">
        <motion.div 
          className="relative rounded-3xl overflow-hidden bg-primary px-6 py-20 md:px-12 md:py-24 text-center border border-primary/20"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Abstract BG */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/3"></div>

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground tracking-tight">
              Punya Ide Produk Digital?
            </h2>
            <p className="text-primary-foreground/80 text-lg md:text-xl mb-10">
              Mari diskusikan kebutuhan bisnis Anda. Kami siap membantu mewujudkan ide Anda menjadi produk digital yang sukses.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="text-primary gap-2 h-14 px-8 text-lg font-semibold shadow-xl">
                Mulai Diskusi <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
