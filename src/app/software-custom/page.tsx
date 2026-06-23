import { Metadata } from "next";
import { HeroSection } from "@/components/landing-pages/HeroSection";
import { ProblemAgitation } from "@/components/landing-pages/ProblemAgitation";
import { SolutionGrid } from "@/components/landing-pages/SolutionGrid";
import { WhyChooseUs } from "@/components/landing-pages/WhyChooseUs";
import { ProcessSteps } from "@/components/landing-pages/ProcessSteps";
import { QuoteSection } from "@/components/landing-pages/QuoteSection";
import { LeadMagnet } from "@/components/landing-pages/LeadMagnet";
import { WhatsAppFloat } from "@/components/landing-pages/WhatsAppFloat";
import { Database, LineChart, Briefcase, Activity, GraduationCap, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development | Studio Satu Akun",
  description: "B2B Custom Software Development, ERP, CRM, dan sistem operasional untuk Enterprise dan Perusahaan Menengah.",
};

export default function SoftwareCustomLandingPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection 
        badgeText="Enterprise Grade Solutions"
        headline={
          <>
            Bisnis Bertumbuh, <br className="hidden md:block" />
            Tapi <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">Operasional Masih Berantakan?</span>
          </>
        }
        subheadline="Kami membantu perusahaan membangun sistem digital yang sesuai dengan proses bisnis mereka, mulai dari dashboard monitoring, CRM, ERP, inventory management hingga aplikasi internal."
        primaryCtaText="Jadwalkan Konsultasi Gratis"
      />

      <ProblemAgitation 
        title="Masalah yang Menghambat Pertumbuhan"
        problems={[
          "Masih mengandalkan file Excel yang rawan hilang atau corrupt",
          "Data tersebar di banyak tempat, sulit dikonsolidasikan",
          "Sulit memonitor operasional secara real-time",
          "Human error tinggi dalam pencatatan data harian",
          "Pembuatan laporan memakan waktu berhari-hari",
          "Tidak ada sistem terintegrasi antar departemen"
        ]}
      />

      <SolutionGrid 
        title="Sistem Cerdas untuk Operasional Anda"
        solutions={[
          { title: "ERP System", description: "Sistem Perencanaan Sumber Daya Perusahaan terpusat.", icon: <Database /> },
          { title: "CRM System", description: "Kelola hubungan dan retensi pelanggan dengan efektif.", icon: <Briefcase /> },
          { title: "Inventory Management", description: "Lacak stok barang, mutasi, dan gudang secara akurat.", icon: <Truck /> },
          { title: "Dashboard Monitoring", description: "Visualisasi data bisnis dalam satu panel komprehensif.", icon: <LineChart /> },
          { title: "HR & Payroll System", description: "Otomatisasi absensi, penggajian, dan manajemen karyawan.", icon: <Activity /> },
          { title: "School/Healthcare System", description: "Solusi khusus untuk instansi pendidikan dan medis.", icon: <GraduationCap /> }
        ]}
      />

      <WhyChooseUs 
        title="Return of Investment (ROI) Nyata"
        features={[
          "Kurangi biaya operasional yang tidak perlu",
          "Percepat proses kerja antar divisi",
          "Minimalkan human error dan kebocoran data",
          "Dapatkan data real-time untuk pengambilan keputusan",
          "Arsitektur keamanan data tingkat Enterprise",
          "Garansi dan dukungan SLA 99.9%"
        ]}
      />

      <ProcessSteps 
        title="Bagaimana Kami Membantu Perusahaan Anda?"
        steps={[
          { title: "Fase 1: Audit & Konsultasi (Gratis)", description: "Kami mempelajari alur kerja dan bottleneck di perusahaan Anda." },
          { title: "Fase 2: Requirement Gathering", description: "Mendokumentasikan seluruh fitur dan spesifikasi yang dibutuhkan setiap divisi." },
          { title: "Fase 3: Dummy Prototype (Gratis)", description: "Kami menyajikan visual antarmuka sistem sebelum Anda memutuskan berinvestasi." },
          { title: "Fase 4: Agile Development", description: "Pengembangan sistem secara modular agar bisa digunakan secara bertahap." },
          { title: "Fase 5: UAT & Deployment", description: "Pengujian bersama staf Anda sebelum sistem diimplementasikan sepenuhnya." }
        ]}
      />

      <QuoteSection 
        quote={<>"Investasi terbaik bagi sebuah perusahaan hari ini adalah <strong className="text-white font-bold">digitalisasi operasional</strong> yang terukur dan terintegrasi."</>}
      />

      <LeadMagnet 
        headline="Transformasikan Bisnis Anda Hari Ini"
        subheadline="Jangan biarkan operasional yang buruk menahan laju pertumbuhan perusahaan Anda. Jadwalkan sesi audit dan konsultasi gratis dengan arsitek sistem kami."
        ctaText="Hubungi Tim Enterprise Kami"
      />

      <WhatsAppFloat message="Halo Tim Studio Satu Akun, saya ingin berdiskusi mengenai pembuatan Custom Software / ERP untuk perusahaan saya." />
    </main>
  );
}
