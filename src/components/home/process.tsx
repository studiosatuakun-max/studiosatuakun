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
    <section className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Proses Kerja Kami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Pendekatan sistematis untuk memastikan setiap produk digital dikembangkan dengan standar tertinggi.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Connector Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border/50 -translate-x-1/2"></div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="hidden md:block w-1/2"></div>
                
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary z-10 flex items-center justify-center">
                </div>

                <div className={`ml-20 md:ml-0 md:w-1/2 p-6 rounded-2xl bg-secondary/20 border border-border/50 hover:border-primary/50 transition-colors ${
                  index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                }`}>
                  <div className="text-primary font-mono font-bold mb-2">{step.id}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
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
