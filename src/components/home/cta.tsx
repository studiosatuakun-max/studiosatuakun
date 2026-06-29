"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../shared/button";

export function CTA() {
  return (
    <section className="pt-32 pb-16 relative bg-background border-t border-slate-800 overflow-hidden flex flex-col items-center justify-center">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[200px] bg-primary/5 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-8 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Status Indicator */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-12">
            <div className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </div>
            <span className="text-xs font-medium text-slate-300 tracking-wider uppercase">Tersedia Untuk Projek Baru</span>
          </div>

          {/* Massive Typography CTA */}
          <h2 className="text-[12vw] sm:text-[10vw] md:text-[8rem] font-black tracking-tighter text-foreground leading-[0.85] mb-12 uppercase">
            MARI <br className="md:hidden" /> MULAI
          </h2>

          <p className="text-muted-foreground text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
            Wujudkan visi digital Anda menjadi kenyataan dengan tim engineering terbaik.
          </p>

          <Link 
            href="https://wa.me/6282260880878?text=Halo%20Studio%20Satu%20Akun,%20saya%20ingin%20konsultasi%20mengenai%20project%20saya."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button size="lg" className="h-16 px-10 text-lg bg-primary text-primary-foreground hover:bg-primary/90 rounded-full group active:scale-95 transition-all w-full sm:w-auto shadow-xl shadow-primary/20">
              Gratis Konsultasi
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Simple Footer built-in */}
        <div className="mt-40 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} PT Studio Satu Akun. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-primary transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-primary transition-colors">GitHub</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
