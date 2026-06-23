"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/button";
import Link from "next/link";
import { ArrowRight, Code2, Rocket, Target, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-8 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-balance text-gradient">
              Driving Growth Through Technology
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              Studio Satu Akun adalah perangkat lunak (Software Studio) premium yang berfokus membantu UMKM, Startup, dan Perusahaan korporasi untuk bertransformasi secara digital.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#050505] border-y border-white/5 relative">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Nilai Inti Kami</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Filosofi yang mendasari setiap baris kode dan desain yang kami buat.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Zap className="w-8 h-8 text-yellow-400" />, title: "High Performance", desc: "Kami membangun aplikasi yang ringan, cepat, dan dioptimalkan untuk performa SEO serta rasio konversi." },
              { icon: <Target className="w-8 h-8 text-emerald-400" />, title: "Business Centric", desc: "Solusi teknologi dan desain kami selalu berorientasi pada pencapaian target bisnis Anda yang sesungguhnya." },
              { icon: <Code2 className="w-8 h-8 text-blue-400" />, title: "Clean Architecture", desc: "Kode yang modular, rapi, dan dirancang dengan pondasi arsitektur solid untuk kemudahan maintenance jangka panjang." },
              { icon: <Rocket className="w-8 h-8 text-rose-400" />, title: "Future Proof", desc: "Beradaptasi secara proaktif menggunakan teknologi modern (seperti Next.js 15 & Otomatisasi AI) demi relevansi masa depan." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-black/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white/90">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full bg-yellow-500/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Siap Berkolaborasi?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Mari diskusikan bagaimana teknologi dapat mempercepat pertumbuhan operasional bisnis Anda. Konsultasi rancangan awal selalu gratis.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-3 group text-lg h-14 px-8 bg-yellow-400 hover:bg-yellow-500 text-slate-900 border-none font-bold">
              Mulai Konsultasi
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
