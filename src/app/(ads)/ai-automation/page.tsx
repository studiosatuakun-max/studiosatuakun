import { Metadata } from "next";
import { HeroSection } from "@/components/landing-pages/HeroSection";
import { ProblemAgitation } from "@/components/landing-pages/ProblemAgitation";
import { SolutionGrid } from "@/components/landing-pages/SolutionGrid";
import { WhyChooseUs } from "@/components/landing-pages/WhyChooseUs";
import { ProcessSteps } from "@/components/landing-pages/ProcessSteps";
import { QuoteSection } from "@/components/landing-pages/QuoteSection";
import { LeadMagnet } from "@/components/landing-pages/LeadMagnet";
import { WhatsAppFloat } from "@/components/landing-pages/WhatsAppFloat";
import { Bot, MessageSquare, BookOpen, PenTool, TrendingUp, BarChart3, Users, Network } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation untuk Bisnis | Studio Satu Akun",
  description: "Otomatisasi proses bisnis menggunakan AI untuk meningkatkan produktivitas dan mengurangi biaya operasional.",
};

export default function AIAutomationLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection 
        badgeText="The Future of Business is AI"
        headline={
          <>
            Tim Anda Masih Mengerjakan <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Pekerjaan yang Bisa Dilakukan AI?</span>
          </>
        }
        subheadline="Otomatisasi proses bisnis menggunakan Artificial Intelligence untuk meningkatkan produktivitas, mengurangi biaya operasional, dan mempercepat pertumbuhan bisnis Anda hingga 10x lipat."
        primaryCtaText="Diskusikan Potensi AI Anda"
        secondaryCtaText="Lihat Contoh AI"
      />

      <ProblemAgitation 
        title="Tanda Bisnis Anda Membutuhkan AI"
        problems={[
          "Staf menghabiskan waktu berjam-jam untuk pekerjaan manual yang berulang",
          "Respon Customer Service lambat di luar jam kerja",
          "Banyak lead/calon pelanggan tidak ter-follow up dengan cepat",
          "Laporan mingguan atau bulanan masih dibuat secara manual",
          "Proses operasional tidak efisien dan rentan terhadap human error"
        ]}
      />

      <SolutionGrid 
        title="Solusi AI Khusus Bisnis"
        solutions={[
          { title: "AI Customer Service", description: "Agen AI yang mampu merespon pelanggan 24/7 dengan bahasa natural layaknya manusia.", icon: <MessageSquare /> },
          { title: "AI Chatbot WhatsApp", description: "Otomatisasi penjualan dan pelayanan langsung di WhatsApp pelanggan Anda.", icon: <Bot /> },
          { title: "AI Knowledge Base", description: "Sistem yang bisa menjawab pertanyaan internal tim berdasarkan dokumen SOP perusahaan.", icon: <BookOpen /> },
          { title: "AI Content Automation", description: "Otomatisasi pembuatan konten marketing, blog, dan deskripsi produk dalam hitungan detik.", icon: <PenTool /> },
          { title: "AI Sales Assistant", description: "Asisten virtual yang membantu tim sales menganalisa leads dan menyusun penawaran.", icon: <TrendingUp /> },
          { title: "Workflow Automation", description: "Hubungkan berbagai aplikasi (CRM, Email, ERP) agar berjalan otomatis tanpa campur tangan staf.", icon: <Network /> }
        ]}
      />

      <WhyChooseUs 
        title="Mengapa Mengadopsi AI Sekarang?"
        features={[
          "Hemat waktu operasional hingga 80%",
          "Kurangi biaya SDM untuk tugas repetitif",
          "Respon pelanggan seketika, meningkatkan kepuasan",
          "Operasional bisnis berjalan 24 jam tanpa henti",
          "Keunggulan kompetitif signifikan di industri Anda",
          "Gratis Audit Proses Bisnis & Rekomendasi Otomatisasi"
        ]}
      />

      <ProcessSteps 
        title="Proses Implementasi AI"
        steps={[
          { title: "Konsultasi AI (Gratis)", description: "Kami mengidentifikasi proses mana yang memakan waktu paling lama di bisnis Anda." },
          { title: "Audit & Perancangan Workflow", description: "Membuat alur kerja bagaimana AI akan menggantikan atau membantu proses tersebut." },
          { title: "Pembuatan Dummy Workflow (Gratis)", description: "Mendemonstrasikan cara AI bekerja untuk kasus spesifik bisnis Anda." },
          { title: "Integrasi & Training Model", description: "Menghubungkan AI dengan data perusahaan Anda dengan keamanan tinggi." },
          { title: "Pelatihan Tim & Launching", description: "Mengajarkan tim Anda cara bekerja berdampingan dengan AI untuk hasil maksimal." }
        ]}
      />

      <QuoteSection 
        quote={<>"Perusahaan yang mengadopsi AI lebih cepat hari ini, akan memiliki <strong className="text-white font-bold">keunggulan kompetitif yang eksponensial</strong> di masa depan."</>}
      />

      <LeadMagnet 
        headline="Siap Beralih ke Era AI?"
        subheadline="Dapatkan gratis audit proses bisnis dan cari tahu bagaimana AI bisa menghemat ratusan jam kerja tim Anda setiap bulannya."
        ctaText="Klaim Audit AI Gratis"
      />

      <WhatsAppFloat message="Halo Tim Studio Satu Akun, saya tertarik untuk mengimplementasikan AI Automation di bisnis saya. Kapan kita bisa diskusi?" />
    </main>
  );
}
