import { Metadata } from "next";
import { HeroSection } from "@/components/landing-pages/HeroSection";
import { ProblemAgitation } from "@/components/landing-pages/ProblemAgitation";
import { SolutionGrid } from "@/components/landing-pages/SolutionGrid";
import { WhyChooseUs } from "@/components/landing-pages/WhyChooseUs";
import { ProcessSteps } from "@/components/landing-pages/ProcessSteps";
import { QuoteSection } from "@/components/landing-pages/QuoteSection";
import { LeadMagnet } from "@/components/landing-pages/LeadMagnet";
import { WhatsAppFloat } from "@/components/landing-pages/WhatsAppFloat";
import { LayoutTemplate, Calculator, PackageCheck, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: "Website, POS & Sistem Kasir UMKM | Studio Satu Akun",
  description: "Digitalisasi UMKM dengan Website Toko Online, Sistem Kasir (POS), dan Manajemen Stok. Harga terjangkau, mudah digunakan.",
};

export default function UMKMLandingPage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection 
        theme="light"
        badgeText="Program Digitalisasi UMKM Indonesia"
        headline={
          <>
            Bisnis Jalan Terus, <br className="hidden md:block" />
            Tapi <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-yellow-600">Laporan Kasir & Stok Berantakan?</span>
          </>
        }
        subheadline="Kami membantu UMKM naik kelas dengan Website Toko Online, Sistem Kasir (POS), dan Manajemen Stok. Solusi digital profesional dengan harga yang masuk akal untuk bisnis Anda."
        primaryCtaText="Konsultasi Kebutuhan Bisnis"
      />

      <ProblemAgitation 
        theme="light"
        title="Kendala Operasional UMKM Sehari-hari"
        problems={[
          "Pembukuan masih manual di buku tulis, rawan hilang & salah hitung",
          "Stok barang di gudang sering selisih dengan catatan",
          "Pusing memantau penjualan dari jarak jauh atau multi-cabang",
          "Belum punya website jualan, masih bergantung pada pesanan chat manual",
          "Laporan untung rugi akhir bulan susah direkap"
        ]}
      />

      <SolutionGrid 
        theme="light"
        title="Sistem Digital Terpadu untuk UMKM"
        solutions={[
          { title: "Website Toko Online", description: "Buka cabang digital Anda 24 jam dengan website toko online yang bisa menerima pesanan otomatis.", icon: <LayoutTemplate /> },
          { title: "Sistem Kasir (POS)", description: "Aplikasi kasir yang cepat, mudah digunakan, dan terintegrasi langsung dengan laporan penjualan harian.", icon: <Calculator /> },
          { title: "Manajemen Stok Barang", description: "Pantau keluar masuk barang secara real-time. Ketahui kapan harus restock agar tidak kehabisan barang.", icon: <PackageCheck /> },
          { title: "Laporan Keuangan Otomatis", description: "Laporan penjualan dan laba rugi otomatis tersusun setiap kali ada transaksi yang terjadi.", icon: <FileSpreadsheet /> }
        ]}
      />

      <WhyChooseUs 
        theme="light"
        title="Mengapa UMKM Memilih Kami?"
        features={[
          "Harga transparan dan paket berlangganan ramah UMKM",
          "Sistem mudah digunakan (User Friendly) oleh kasir & staf",
          "Gratis konsultasi & demo aplikasi sebelum komitmen",
          "Termasuk pembuatan website profil/toko online",
          "Bisa pantau omset cabang dari HP kapan saja",
          "Pendampingan & training langsung untuk staf Anda"
        ]}
      />

      <ProcessSteps 
        theme="light"
        title="Cara Mudah Digitalisasi Usaha"
        steps={[
          { title: "Langkah 1: Ngobrol Santai", description: "Hubungi kami via WhatsApp, ceritakan jenis bisnis Anda (F&B, Retail, Jasa, dll)." },
          { title: "Langkah 2: Cek Demo Sistem", description: "Kami tunjukkan demo Sistem POS & Website yang cocok untuk model bisnis Anda." },
          { title: "Langkah 3: Setup & Penyesuaian", description: "Kami bantu setup menu, harga, dan stok barang ke dalam sistem baru Anda." },
          { title: "Langkah 4: Training & Mulai Jualan!", description: "Sistem siap dipakai! Kami ajarkan cara pakainya ke kasir dan admin Anda." }
        ]}
      />

      <QuoteSection 
        theme="light"
        quote={<>"Di era modern, UMKM yang bisa tumbuh membesar adalah UMKM yang <strong className="text-slate-900 font-bold">operasionalnya rapi, stoknya akurat, dan penjualannya mudah dipantau</strong>."</>}
      />

      <LeadMagnet 
        theme="light"
        headline="Waktunya UMKM Naik Kelas!"
        subheadline="Jangan biarkan bisnis Anda jalan di tempat karena pembukuan manual. Hubungi kami untuk coba demo Sistem POS dan Website UMKM secara gratis."
        ctaText="Minta Demo Gratis"
      />

      <WhatsAppFloat message="Halo Mas/Mbak, saya punya bisnis UMKM dan butuh sistem kasir (POS), manajemen stok, dan website. Bisa konsultasi dulu?" />
    </main>
  );
}
