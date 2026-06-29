"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Globe, Smartphone, Bot, LayoutTemplate } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Web Architecture",
    description: "High-performance web applications built with Next.js and React. Scalable, secure, and SEO-optimized by default.",
    tags: ["Next.js", "React", "Node.js"],
    colSpan: "md:col-span-2",
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Agents & Automation",
    description: "Smart automation, LLM integrations, and custom AI agents built to streamline your business operations.",
    tags: ["OpenAI", "LangChain", "Gemini"],
    colSpan: "md:col-span-1",
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile Native",
    description: "Smooth, native-feeling applications for iOS and Android.",
    tags: ["Flutter", "React Native"],
    colSpan: "md:col-span-1",
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    title: "UI/UX Engineering",
    description: "Pixel-perfect, conversion-optimized interfaces that feel premium and intuitive to use. We don't just design, we engineer experiences.",
    tags: ["Figma", "Design Systems", "Framer"],
    colSpan: "md:col-span-2",
  },
];

function ServiceCard({ service, mouseX, mouseY }: { service: any, mouseX: any, mouseY: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className={`group relative rounded-3xl border border-slate-800 bg-slate-900/50 p-8 overflow-hidden transition-colors hover:border-slate-700 ${service.colSpan}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(250, 204, 21, 0.1),
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative z-10 flex flex-col h-full">
        <div className="mb-6 p-4 bg-slate-950/50 rounded-2xl w-fit border border-slate-800 shadow-inner">
          {service.icon}
        </div>
        <h3 className="text-3xl font-bold tracking-tight mb-4 text-foreground">{service.title}</h3>
        <p className="text-muted-foreground text-lg leading-relaxed flex-grow mb-8">
          {service.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {service.tags.map((tag: string, idx: number) => (
            <span key={idx} className="text-xs uppercase tracking-widest font-medium px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Services() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <section className="py-32 relative bg-background">
      <div className="container mx-auto px-4 sm:px-8 max-w-6xl">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">Engineering <br/> <span className="text-slate-500">Capabilities.</span></h2>
          </div>
          <p className="text-muted-foreground max-w-md text-xl tracking-tight leading-relaxed">
            Comprehensive digital solutions crafted with modern tech stacks to give your business an unfair advantage.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 group"
          onMouseMove={handleMouseMove}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} mouseX={mouseX} mouseY={mouseY} />
          ))}
        </div>
      </div>
    </section>
  );
}
