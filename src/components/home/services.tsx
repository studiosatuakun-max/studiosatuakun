"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Globe, Smartphone, Bot, LayoutTemplate } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-6 h-6 text-foreground" />,
    title: "Web Architecture",
    description: "High-performance web applications built with Next.js and React. Scalable, secure, and SEO-optimized by default.",
    tags: ["Next.js", "React", "Node.js"],
    colSpan: "md:col-span-2 lg:col-span-2",
  },
  {
    icon: <Smartphone className="w-6 h-6 text-foreground" />,
    title: "Mobile Native",
    description: "Smooth, native-feeling applications for iOS and Android.",
    tags: ["Flutter", "React Native"],
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: <Bot className="w-6 h-6 text-foreground" />,
    title: "AI Integration",
    description: "Smart automation, LLM integrations, and custom AI agents.",
    tags: ["OpenAI", "LangChain"],
    colSpan: "md:col-span-1 lg:col-span-1",
  },
  {
    icon: <LayoutTemplate className="w-6 h-6 text-foreground" />,
    title: "UI/UX Engineering",
    description: "Pixel-perfect, conversion-optimized interfaces that feel premium and intuitive to use.",
    tags: ["Figma", "Design Systems"],
    colSpan: "md:col-span-2 lg:col-span-2",
  },
];

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
    }
    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Engineering Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl text-lg tracking-tight">
            Comprehensive digital solutions crafted with modern tech stacks to give your business an unfair advantage.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 relative"
        >
          {/* Spotlight Effect that follows mouse over the entire grid */}
          <div 
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.06), transparent 40%)`
            }}
          />

          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: any, index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`${service.colSpan} relative w-full h-full`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1200 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="group relative h-full rounded-2xl border border-white/5 bg-[#111] shadow-2xl transition-all duration-300 hover:shadow-[0_30px_60px_-15px_rgba(255,255,255,0.05)] cursor-pointer overflow-hidden"
      >
        {/* Glow effect that tracks the light source internally */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ transform: "translateZ(10px)" }} />
        
        <div className="p-8 h-full flex flex-col relative z-10" style={{ transform: "translateZ(30px)" }}>
          <div className="mb-6 p-3 bg-white/5 border border-white/10 rounded-xl inline-block w-fit shadow-[0_0_15px_rgba(255,255,255,0.05)]" style={{ transform: "translateZ(20px)" }}>
            {service.icon}
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-3" style={{ transform: "translateZ(10px)" }}>{service.title}</h3>
          <p className="text-muted-foreground mb-8 text-sm leading-relaxed flex-grow">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto" style={{ transform: "translateZ(15px)" }}>
            {service.tags.map((tag: string, idx: number) => (
              <span key={idx} className="text-[10px] uppercase tracking-wider font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground shadow-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
