"use client";

import { motion } from "framer-motion";

const row1 = ["Figma", "Node.js", "MongoDB", "Supabase", "Webflow", "WordPress", "Shopify", "Next.js", "React", "TypeScript"];
const row2 = ["Replicate", "OpenAI", "Anthropic", "Google Gemini", "Perplexity", "Hugging Face", "Stability AI", "ElevenLabs", "Mistral AI"];
const row3 = ["Zapier", "n8n", "HubSpot", "Mailchimp", "Stripe", "Google Analytics", "Meta Ads", "Ahrefs", "Semrush", "Notion", "Slack"];

function TechPill({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-3 px-6 py-3 rounded-2xl border border-slate-800 bg-slate-900/40 hover:bg-slate-800 hover:border-slate-600 transition-all cursor-default mx-2">
      {/* Generic dot to mimic the icon space */}
      <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
      <span className="text-slate-300 font-medium text-sm md:text-base whitespace-nowrap">{name}</span>
    </div>
  );
}

export function Trust() {
  return (
    <section className="py-24 border-y border-slate-800 bg-background overflow-hidden flex flex-col items-center">
      <div className="text-center mb-16 px-4">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4"
        >
          THE STACK
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-foreground mb-6 tracking-tight"
        >
          TOOLS WE WORK WITH
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 max-w-lg mx-auto text-sm md:text-base leading-relaxed"
        >
          Powered by the industry's most trusted platforms — built for speed, scale, and results.
        </motion.p>
      </div>
      
      <div className="relative w-full flex flex-col gap-4 overflow-hidden group">
         {/* Fade edges */}
         <div className="absolute inset-y-0 left-0 w-24 sm:w-64 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
         <div className="absolute inset-y-0 right-0 w-24 sm:w-64 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
         
         {/* Row 1 */}
         <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center">
            {[...row1, ...row1, ...row1, ...row1].map((tech, i) => (
               <TechPill key={`r1-${i}`} name={tech} />
            ))}
         </div>

         {/* Row 2 (Reverse) */}
         <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center" style={{ animationDirection: "reverse", animationDuration: "45s" }}>
            {[...row2, ...row2, ...row2, ...row2].map((tech, i) => (
               <TechPill key={`r2-${i}`} name={tech} />
            ))}
         </div>

         {/* Row 3 */}
         <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center" style={{ animationDuration: "50s" }}>
            {[...row3, ...row3, ...row3, ...row3].map((tech, i) => (
               <TechPill key={`r3-${i}`} name={tech} />
            ))}
         </div>
      </div>
    </section>
  );
}
