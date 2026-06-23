"use client";

import { motion } from "framer-motion";
import { XCircle, AlertTriangle } from "lucide-react";

interface ProblemAgitationProps {
  title: string;
  problems: string[];
  theme?: "dark" | "light";
}

export function ProblemAgitation({ title, problems, theme = "dark" }: ProblemAgitationProps) {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${
                isLight 
                  ? "bg-slate-50 border-slate-200 shadow-sm" 
                  : "bg-slate-900/50 border-white/5 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
              } flex flex-col items-center text-center gap-4`}
            >
              <div className={`p-3 rounded-full ${isLight ? "bg-red-100 text-red-500" : "bg-red-500/10 text-red-400"}`}>
                <AlertTriangle className="w-6 h-6" />
              </div>
              <p className={`text-lg font-medium ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                {problem}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
