"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface WhyChooseUsProps {
  title: string;
  features: string[];
  theme?: "dark" | "light";
}

export function WhyChooseUs({ title, features, theme = "dark" }: WhyChooseUsProps) {
  const isLight = theme === "light";

  return (
    <section className={`py-20 md:py-32 ${isLight ? "bg-white text-slate-900" : "bg-slate-950 text-slate-50"}`}>
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="text-center mb-16">
          <motion.h2 
            className={`text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance ${isLight ? "text-slate-900" : "text-white"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`flex items-start gap-4 p-6 rounded-2xl border ${
                isLight 
                  ? "bg-slate-50 border-slate-200" 
                  : "bg-white/5 border-white/10"
              }`}
            >
              <CheckCircle2 className={`w-6 h-6 flex-shrink-0 ${isLight ? "text-yellow-500" : "text-yellow-400"}`} />
              <p className={`text-lg font-medium ${isLight ? "text-slate-700" : "text-slate-200"}`}>
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
