import { Metadata } from "next";
import { HeroSection } from "@/components/landing-pages/HeroSection";
import { ProblemAgitation } from "@/components/landing-pages/ProblemAgitation";
import { SolutionGrid } from "@/components/landing-pages/SolutionGrid";
import { WhyChooseUs } from "@/components/landing-pages/WhyChooseUs";
import { ProcessSteps } from "@/components/landing-pages/ProcessSteps";
import { QuoteSection } from "@/components/landing-pages/QuoteSection";
import { LeadMagnet } from "@/components/landing-pages/LeadMagnet";
import { FAQ } from "@/components/landing-pages/FAQ";
import { WhatsAppFloat } from "@/components/landing-pages/WhatsAppFloat";
import { Globe, LayoutDashboard, Database, Smartphone, Bot, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "Studio Satu Akun | Software Development Studio",
  description: "Punya Ide Software, Website, atau Aplikasi? Kami Bantu Visualisasikan dan Bangun Solusinya dengan Gratis Prototype Dummy.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection 
        badgeText="Gratis Konsultasi & Dummy Prototype"
        headline={
          <>
            Punya Ide Software, Website, <br className="hidden md:block" /> atau Aplikasi? <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Kami Bangun Solusinya.</span>
          </>
        }
        subheadline="Dapatkan konsultasi gratis, analisa kebutuhan bisnis, dan dummy prototype gratis sebelum memutuskan bekerja sama."
        primaryCtaText="Diskusikan Proyek Anda"
        secondaryCtaText="Lihat Portofolio"
      />

      <ProblemAgitation 
        title="Masih Mengelola Bisnis Secara Manual?"
        problems={[
          "Data berantakan dan tersebar di banyak file Excel",
          "Proses operasional lambat dan tidak efisien",
          "Sulit memantau performa bisnis secara real-time",
          "Human error tinggi dalam pencatatan harian",
          "Tidak ada sistem dashboard terpusat"
        ]}
      />

      <SolutionGrid 
        title="Kami Mengubah Proses Bisnis Menjadi Sistem Digital"
        solutions={[
          { title: "Website Development", description: "Website profesional yang responsif dan dioptimasi untuk kecepatan serta SEO.", icon: <Globe /> },
          { title: "Custom Dashboard", description: "Visualisasikan data bisnis Anda dalam satu layar interaktif yang mudah dipahami.", icon: <LayoutDashboard /> },
          { title: "ERP & Internal System", description: "Sistem terintegrasi untuk mengelola seluruh divisi bisnis dari satu platform.", icon: <Database /> },
          { title: "Mobile Application", description: "Aplikasi Android dan iOS native maupun cross-platform untuk pelanggan Anda.", icon: <Smartphone /> },
          { title: "AI Automation", description: "Otomatisasi tugas berulang dengan teknologi kecerdasan buatan terkini.", icon: <Bot /> },
          { title: "Business Digitization", description: "Konsultasi komprehensif untuk merombak operasional konvensional menjadi digital.", icon: <Network /> }
        ]}
      />

      <WhyChooseUs 
        title="Kenapa Studio Satu Akun?"
        features={[
          "Gratis Konsultasi di Awal",
          "Gratis Analisa Kebutuhan Bisnis",
          "Gratis Dummy Prototype UI/UX",
          "Tim Developer Berpengalaman & Profesional",
          "Solusi 100% Sesuai Kebutuhan Unik Bisnis",
          "Dukungan Pemeliharaan Setelah Peluncuran"
        ]}
      />

      <ProcessSteps 
        title="Proses Kerja yang Transparan"
        steps={[
          { title: "Konsultasi Gratis", description: "Ceritakan kendala dan ide bisnis Anda kepada kami." },
          { title: "Analisa Kebutuhan", description: "Tim kami akan menganalisa proses bisnis Anda dan merumuskan solusi digitalnya." },
          { title: "Pembuatan Dummy Prototype", description: "Anda akan mendapatkan visualisasi aplikasi (mockup) secara gratis sebelum deal." },
          { title: "Development", description: "Proses ngoding yang transparan, update mingguan, dan jaminan kualitas." },
          { title: "Testing & Launch", description: "Pengujian menyeluruh sebelum sistem diserahkan dan diluncurkan ke publik." }
        ]}
      />

      <QuoteSection 
        quote={<>"Masa depan bisnis bukan tentang siapa yang bekerja paling keras, tapi siapa yang <strong className="text-white font-bold">membangun sistem paling cerdas</strong>."</>}
      />

      <LeadMagnet 
        headline="Belum Siap Membuat Software?"
        subheadline="Tidak masalah. Ceritakan kebutuhan bisnis Anda dan kami akan membantu membuat dummy prototype secara gratis tanpa kewajiban deal."
        ctaText="Klaim Konsultasi Gratis Sekarang"
      />

      <FAQ 
        questions={[
          { question: "Berapa biaya pembuatan software?", answer: "Biaya sangat bervariasi tergantung kompleksitas fitur. Kami merekomendasikan sesi konsultasi gratis agar kami dapat memberikan estimasi harga yang paling akurat." },
          { question: "Berapa lama waktu pengerjaan?", answer: "Waktu pengerjaan berkisar antara 2 minggu hingga 3 bulan, tergantung skala proyek. Timeline akan diberikan secara transparan di awal." },
          { question: "Apakah sistemnya bisa di-custom 100%?", answer: "Ya, kami membangun sistem dari nol atau menggunakan base framework yang disesuaikan persis dengan proses unik bisnis Anda." },
          { question: "Apakah ada biaya maintenance?", answer: "Kami menyediakan paket pemeliharaan opsional untuk memastikan server aman, sistem ter-update, dan bug diperbaiki dengan cepat." },
          { question: "Apakah UMKM bisa menggunakan layanan ini?", answer: "Sangat bisa! Kami memiliki paket khusus digitalisasi UMKM dengan harga terjangkau." },
          { question: "Apa itu Dummy Prototype Gratis?", answer: "Sebelum Anda membayar sepeser pun, kami akan membuat desain awal (mockup visual) dari aplikasi yang Anda inginkan, sehingga Anda punya gambaran nyata." }
        ]}
      />

      <WhatsAppFloat />
    </main>
  );
}
