"use client";

import { motion } from "framer-motion";

interface Solution {
  title: string;
  description?: string;
  icon?: React.ReactNode;
}

interface SolutionGridProps {
  title: string;
  solutions: Solution[];
  theme?: "dark" | "light";
}

export function SolutionGrid({ title, solutions, theme = "dark" }: SolutionGridProps) {
  const isLight = theme === "light";

  return (
    <section className={`py-20 md:py-32 ${isLight ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-50"}`}>
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
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
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-3xl border ${
                isLight 
                  ? "bg-white border-slate-200 shadow-md hover:shadow-lg transition-shadow" 
                  : "bg-gradient-to-b from-white/5 to-transparent border-white/10 hover:bg-white/[0.07] transition-colors"
              } flex flex-col gap-4 group`}
            >
              {solution.icon && (
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isLight ? "bg-yellow-100 text-yellow-600" : "bg-yellow-400/10 text-yellow-400"} mb-2`}>
                  {solution.icon}
                </div>
              )}
              <h3 className={`text-xl font-bold ${isLight ? "text-slate-900" : "text-white"}`}>
                {solution.title}
              </h3>
              {solution.description && (
                <p className={`leading-relaxed ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                  {solution.description}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
