"use client";

import { motion } from "framer-motion";

interface Step {
  title: string;
  description?: string;
}

interface ProcessStepsProps {
  title: string;
  steps: Step[];
  theme?: "dark" | "light";
}

export function ProcessSteps({ title, steps, theme = "dark" }: ProcessStepsProps) {
  const isLight = theme === "light";

  return (
    <section className={`py-20 md:py-32 ${isLight ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-50"}`}>
      <div className="container mx-auto px-4 sm:px-8 max-w-4xl">
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

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 ${isLight ? "bg-yellow-400 border-white text-slate-900" : "bg-yellow-400 border-slate-900 text-slate-900"} font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10`}>
                {index + 1}
              </div>
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border ${isLight ? "bg-white border-slate-200 shadow-sm" : "bg-white/5 border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.02)]"}`}>
                <h3 className={`text-xl font-bold mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>{step.title}</h3>
                {step.description && (
                  <p className={`${isLight ? "text-slate-600" : "text-slate-400"}`}>{step.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
