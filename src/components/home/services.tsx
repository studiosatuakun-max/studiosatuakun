"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Bot, LayoutTemplate } from "lucide-react";

const services = [
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: "Web Development",
    description: "Website Company Profile, Landing Page, dan Web App yang cepat dan SEO-friendly.",
    tags: ["Next.js", "React", "Laravel"],
  },
  {
    icon: <Smartphone className="w-8 h-8 text-primary" />,
    title: "Mobile Development",
    description: "Aplikasi Android dan iOS yang smooth dengan user experience terbaik.",
    tags: ["Flutter", "React Native", "iOS/Android"],
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    title: "AI Automation",
    description: "Chatbot cerdas, workflow automation, dan AI agent untuk efisiensi bisnis.",
    tags: ["OpenAI", "LangChain", "n8n"],
  },
  {
    icon: <LayoutTemplate className="w-8 h-8 text-primary" />,
    title: "UI/UX Design",
    description: "Desain antarmuka yang intuitif, modern, dan berfokus pada konversi pengguna.",
    tags: ["Figma", "Wireframe", "Prototype"],
  },
];

export function Services() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Layanan Kami</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Solusi digital komprehensif untuk membantu bisnis Anda bertransformasi dan memenangkan persaingan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group rounded-2xl border border-border/50 bg-secondary/20 p-6 hover:bg-secondary/40 transition-colors cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 p-3 bg-secondary rounded-xl inline-block group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6 text-sm line-clamp-3">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs font-medium px-2 py-1 rounded-md bg-background border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
