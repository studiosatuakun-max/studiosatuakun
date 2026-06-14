"use client";

import { motion } from "framer-motion";

const steps = [
  { id: "01", title: "Discovery", desc: "Memahami visi, kebutuhan bisnis, dan target audiens Anda." },
  { id: "02", title: "Design", desc: "Merancang wireframe dan UI/UX yang intuitif & modern." },
  { id: "03", title: "Development", desc: "Proses coding menggunakan teknologi terbaik dan clean code." },
  { id: "04", title: "Testing", desc: "Quality assurance ketat untuk memastikan tidak ada bug." },
  { id: "05", title: "Launch", desc: "Deployment aplikasi ke server production." },
  { id: "06", title: "Maintenance", desc: "Dukungan berkelanjutan dan pembaruan sistem." },
];

export function Process() {
  return (
    <section className="py-24 overflow-hidden relative bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:64px_64px]"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">The Development Lifecycle</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg tracking-tight">
            A precise, iterative process engineered for velocity and quality.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Subtle Connector Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2"></div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="hidden md:block w-1/2"></div>
                
                {/* Minimalist Node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#111] border border-white/20 z-10 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                </div>

                <div className={`ml-16 md:ml-0 md:w-1/2 p-6 rounded-xl bg-white/[0.02] border border-white/5 backdrop-blur-sm ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}>
                  <div className="text-white/40 font-mono text-xs mb-2">PHASE {step.id}</div>
                  <h3 className="text-xl font-bold tracking-tight mb-2 text-foreground/90">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
