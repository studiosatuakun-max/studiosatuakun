"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/shared/button";
import Link from "next/link";
import { ArrowRight, Search, PenTool, Braces, TestTube, Rocket } from "lucide-react";

export default function ProcessPage() {
  const steps = [
    {
      icon: <Search className="w-5 h-5 text-blue-400" />,
      title: "1. Discovery & Strategy",
      desc: "Semuanya dimulai dari pemahaman mendalam tentang lanskap bisnis Anda. Kami menganalisis audiens, kompetitor, dan tantangan yang Anda hadapi untuk merumuskan arsitektur dan strategi digital yang paling efektif sebelum satu baris kodepun ditulis."
    },
    {
      icon: <PenTool className="w-5 h-5 text-purple-400" />,
      title: "2. UI/UX Design",
      desc: "Berdasarkan rumusan strategi, kami merancang purwarupa interaktif (wireframe) dan antarmuka visual (UI) yang memukau. Kami sangat peduli pada User Journey yang intuitif demi menghasilkan konversi terbaik."
    },
    {
      icon: <Braces className="w-5 h-5 text-yellow-400" />,
      title: "3. Engineering & Development",
      desc: "Desain tersebut diwujudkan secara presisi menjadi kode (pixel-perfect). Tim engineer kami memanfaatkan tech-stack modern (Next.js, TypeScript, Tailwind CSS) untuk membangun perangkat lunak yang andal, aman, dan scalable."
    },
    {
      icon: <TestTube className="w-5 h-5 text-emerald-400" />,
      title: "4. Quality Assurance (QA)",
      desc: "Produk melewati siklus pengujian yang ketat. Mulai dari pengujian performa kecepatan (Web Vitals), responsivitas layar (Mobile-first), hingga keamanan celah kerentanan untuk memastikan hasil tanpa bug/cacat (zero-defect)."
    },
    {
      icon: <Rocket className="w-5 h-5 text-rose-400" />,
      title: "5. Deployment & Handover",
      desc: "Saat produk 100% sempurna, aplikasi resmi diluncurkan (Go-Live). Kami mengelola proses migrasi DNS, pengaturan Cloud Server (Vercel/AWS), serta melakukan pendampingan operasional (handover) kepada tim bisnis Anda."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="container relative z-10 mx-auto px-4 sm:px-8 text-center max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-balance text-gradient">
              Metodologi Rekayasa Terstruktur
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-balance leading-relaxed">
              Kami tidak sekadar merakit kode lalu berharap keajaiban terjadi. Kami mematuhi alur rekayasa (engineering flow) tingkat Enterprise agar produk akhir yang diciptakan sesuai dengan spesifikasi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative bg-[#030303] border-t border-white/5">
        <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
          <div className="space-y-12 md:space-y-0 relative md:before:absolute md:before:inset-0 md:before:mx-auto md:before:h-full md:before:w-px md:before:bg-gradient-to-b md:before:from-transparent md:before:via-white/10 md:before:to-transparent">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col md:flex-row items-center justify-center md:odd:flex-row-reverse group"
              >
                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-1/2 px-8"></div>
                
                {/* Center Node / Marker */}
                <div className="md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border-[4px] border-[#030303] bg-[#111] shadow-[0_0_15px_rgba(255,255,255,0.05)] z-10 mb-6 md:mb-0">
                  {step.icon}
                </div>
                
                {/* Content Card */}
                <div className="w-full md:w-1/2 px-0 md:px-12 pb-12 md:pb-24 flex md:group-even:justify-end md:group-odd:justify-start text-center md:text-left md:group-odd:text-right">
                  <div className="bg-black/40 border border-white/10 rounded-2xl p-6 backdrop-blur-sm shadow-xl max-w-md w-full hover:bg-black/60 transition-colors">
                    <h3 className="text-xl font-bold mb-3 text-white/90">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Wujudkan Ide Eksekusional Anda</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Jangan biarkan ide cemerlang Anda terhambat oleh proses yang berantakan. Percayakan pada tim rekayasa kami.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-3 group text-lg h-14 px-8 bg-white text-black hover:bg-slate-200 border-none font-bold">
              Jadwalkan Diskusi Pertama
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
