"use client";

import { Calendar, Code, FileText, User, Clock, CheckCircle } from "lucide-react";
import { RadialOrbitalTimeline, TimelineItem } from "../ui/radial-orbital-timeline";

const timelineData: TimelineItem[] = [
  {
    id: 1,
    title: "Discovery",
    date: "Phase 01",
    content: "Memahami visi, kebutuhan bisnis, dan target audiens Anda. Kami melakukan riset mendalam untuk menyusun strategi digital.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Phase 02",
    content: "Merancang wireframe dan UI/UX yang intuitif & modern. Fokus pada pixel-perfect design dan user experience yang tak tertandingi.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Phase 03",
    content: "Proses coding menggunakan teknologi terbaik dan clean code. Mengubah desain menjadi produk fungsional yang berkecepatan tinggi.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    date: "Phase 04",
    content: "Quality assurance ketat untuk memastikan tidak ada bug. Uji performa, keamanan, dan fungsionalitas di berbagai perangkat.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending",
    energy: 30,
  },
  {
    id: 5,
    title: "Launch",
    date: "Phase 05",
    content: "Deployment aplikasi ke server production. Perilisan resmi produk digital Anda ke publik.",
    category: "Release",
    icon: Clock,
    relatedIds: [4, 6],
    status: "pending",
    energy: 10,
  },
  {
    id: 6,
    title: "Maintenance",
    date: "Phase 06",
    content: "Dukungan berkelanjutan dan pembaruan sistem. Memastikan produk Anda tetap aman, cepat, dan relevan.",
    category: "Maintenance",
    icon: CheckCircle,
    relatedIds: [5],
    status: "pending",
    energy: 5,
  },
];

export function Process() {
  return (
    <section className="py-24 overflow-hidden relative bg-[#0a0a0a]">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:64px_64px]"></div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-white">The Development Lifecycle</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg tracking-tight">
            A precise, iterative process engineered for velocity and quality. Klik tiap fase di orbit untuk melihat detail alur kerja kami.
          </p>
        </div>

        {/* Radial Orbital Timeline Integration */}
        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}
