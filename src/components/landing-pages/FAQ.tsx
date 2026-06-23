"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  questions: FAQItem[];
  theme?: "dark" | "light";
}

export function FAQ({ questions, theme = "dark" }: FAQProps) {
  const isLight = theme === "light";
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`py-20 md:py-32 ${isLight ? "bg-slate-50 text-slate-900" : "bg-slate-950 text-slate-50"}`}>
      <div className="container mx-auto px-4 sm:px-8 max-w-3xl">
        <div className="text-center mb-16">
          <motion.h2 
            className={`text-3xl md:text-5xl font-bold tracking-tight mb-6 text-balance ${isLight ? "text-slate-900" : "text-white"}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Pertanyaan yang Sering Diajukan
          </motion.h2>
        </div>

        <div className="space-y-4">
          {questions.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`rounded-2xl border ${isLight ? "bg-white border-slate-200" : "bg-white/5 border-white/10"} overflow-hidden`}
            >
              <button
                className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className={`font-semibold text-lg ${isLight ? "text-slate-900" : "text-slate-100"}`}>
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""} ${isLight ? "text-slate-500" : "text-slate-400"}`} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`px-6 pb-4 pt-0 ${isLight ? "text-slate-600" : "text-slate-400"} leading-relaxed`}>
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
