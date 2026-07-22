'use client';

import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface CaseStudy {
  id: string;
  category: string;
  whyItMatters: string;
  caseStudyTitle: string;
  problem: string;
  solution: string;
  impact: string;
}

const studies: CaseStudy[] = [
  {
    id: 'cs1',
    category: 'Landing Page',
    whyItMatters:
      'Landing page adalah ujung tombak konversi. Banyak bisnis bakar uang puluhan juta untuk Ads (Meta/Google), tapi pengunjung langsung kabur karena website lambat atau tidak responsif di HP. Kecepatan dan kejelasan UI adalah kunci menekan Cost per Acquisition (CPA).',
    caseStudyTitle: 'Optimalisasi Konversi Kampanye Digital',
    problem:
      'UMKM/Agensi sering terjebak menggunakan pembuat web instan yang berat (bloated CSS/JS). Halaman memuat lebih dari 5 detik, menyebabkan bounce rate tinggi dan budget iklan terbuang sia-sia.',
    solution:
      'Rebuild ulang menggunakan modern web framework dengan kapabilitas server-side. Desain diubah ke format Bento Grid yang rapi dan memanjakan mata menggunakan utility-first CSS. Semua aset gambar dioptimasi otomatis dengan format WebP.',
    impact:
      'LCP (Largest Contentful Paint) turun drastis di bawah 1.5 detik (hijau di PageSpeed Insights). Rasio klik ke tombol WhatsApp/Formulir meningkat hingga 40%.',
  },
  {
    id: 'cs2',
    category: 'Web App',
    whyItMatters:
      'Website informasi saja tidak cukup untuk bisnis yang butuh interaksi dua arah (transaksi, booking, user-generated content). Web App mengubah pengunjung menjadi User, menciptakan ekosistem bisnis yang hidup 24/7 tanpa perlu aplikasi native di PlayStore/AppStore.',
    caseStudyTitle: 'Digitalisasi Operasional Bisnis Berbasis Komunitas',
    problem:
      'Banyak startup atau bisnis jasa mengandalkan kombinasi Google Form, Excel, dan WhatsApp secara manual untuk mengatur pesanan atau member. Saat pengguna tembus ribuan, admin kewalahan dan sering terjadi data ganda/hilang.',
    solution:
      'Pembuatan Progressive Web App (PWA) lengkap dengan sistem autentikasi berbasis cloud yang aman. Mengimplementasikan dashboard pengguna yang dinamis menggunakan komponen interaktif untuk filter dan fungsi server untuk mutasi data yang aman.',
    impact:
      'Beban kerja admin turun 80%. Pengguna bisa self-service mulai dari registrasi, pantau status layanan, hingga pembayaran dalam satu platform terpadu.',
  },
  {
    id: 'cs3',
    category: 'Dashboard Monitoring',
    whyItMatters:
      'Keputusan bisnis yang lambat sering kali disebabkan oleh data yang berantakan. Dasbor menyatukan berbagai sumber data menjadi satu visual yang mudah dipahami (single source of truth), sangat krusial untuk level manajerial.',
    caseStudyTitle: 'Sentralisasi Data Pelaporan (Reporting)',
    problem:
      'Perusahaan (seperti logistik, sales, atau HR) kesulitan membuat laporan mingguan karena data tersebar di berbagai divisi. Rekap data memakan waktu berhari-hari dan rentan human error.',
    solution:
      'Pengembangan Admin Panel custom menggunakan komponen dari shadcn/ui. Sistem menarik data via API real-time ke database terpusat, lalu divisualisasikan dalam bentuk grafik interaktif dan tabel (CRUD) dengan fitur export ke CSV/PDF.',
    impact:
      'Manajemen dapat memantau KPI secara real-time. Waktu penyusunan laporan terpangkas dari hitungan hari menjadi instan (real-time), menghasilkan keputusan bisnis yang lebih cepat dan akurat.',
  },
  {
    id: 'cs4',
    category: 'Software Studio',
    whyItMatters:
      'Tidak semua bisnis bisa dipaksa masuk ke dalam template atau CMS standar. Bisnis skala menengah-atas (Enterprise) memiliki SOP yang spesifik, unik, dan butuh tingkat keamanan serta skalabilitas ekstra yang hanya bisa diselesaikan dengan kode khusus (custom build).',
    caseStudyTitle: 'Sistem Internal yang 100% Menyesuaikan SOP',
    problem:
      'Perusahaan membeli software pabrikan (SaaS) yang mahal, tapi 60% fiturnya tidak terpakai, sementara proses bisnis inti mereka justru tidak terakomodasi karena keterbatasan kustomisasi dari vendor.',
    solution:
      'Rancang bangun arsitektur custom software dari nol menggunakan arsitektur web modern dan Cloud Relational Database. Pembuatan Role-Based Access Control (RBAC) yang sangat granular via middleware untuk mengunci fitur berdasarkan departemen dan jabatan.',
    impact:
      'Sistem berjalan 100% sesuai alur SOP perusahaan tanpa biaya lisensi per- user yang mahal. Skalabilitas aman untuk jangka panjang tanpa vendor lock-in.',
  },
  {
    id: 'cs5',
    category: 'AI Automation',
    whyItMatters:
      'Kita ada di era di mana efisiensi adalah segalanya. AI bukan sekadar gimmick, tapi alat untuk mengotomatisasi pekerjaan kognitif repetitif (membaca dokumen, membalas chat standar, membuat draf konten), sehingga tim bisa fokus ke strategi.',
    caseStudyTitle: 'Otomatisasi Alur Kerja Kognitif Repetitif',
    problem:
      'Tim internal kewalahan merespons ratusan pertanyaan standar atau menghabiskan waktu berjam-jam hanya untuk membuat draft laporan, deskripsi produk, atau menyortir data masuk.',
    solution:
      'Integrasi API LLM (seperti Gemini atau OpenAI) ke dalam arsitektur backend kustom. Pembuatan sistem RAG (Retrieval-Augmented Generation) agar AI bisa menjawab/merangkum berdasarkan dokumen internal klien.',
    impact:
      'Kecepatan respons dan produksi konten naik 3x lipat. Biaya operasional untuk tugas repetitif berkurang drastis karena sistem bekerja otomatis 24/7 dengan konsistensi tinggi.',
  },
];

export default function CaseStudiesBento() {
  const [activeTab, setActiveTab] = useState<string>(studies[0].id);
  const activeStudy = studies.find((s) => s.id === activeTab) || studies[0];

  return (
    <section id="work" className="bg-paper border-t border-[rgba(107,110,115,0.25)]">
      {/* Section header */}
      <div className="px-6 md:px-10 pt-16 pb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest2 text-graphite">
            Row 02 — Case Studies
          </span>
          <h2 className="mt-2 font-mono text-3xl md:text-4xl font-light text-ink tracking-tight">
            Real problems,
            <br />
            <em className="not-italic text-graphite">engineered solutions.</em>
          </h2>
        </div>
      </div>

      {/* Tabs Container */}
      <div className="px-6 md:px-10 pb-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-20">
          {/* Left Column: Sticky Navigation */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="md:sticky md:top-32 flex flex-col gap-2">
              {studies.map((study, idx) => (
                <button
                  key={study.id}
                  onClick={() => setActiveTab(study.id)}
                  className={`
                    text-left px-6 py-5 border-l-4 transition-all duration-300
                    ${
                      activeTab === study.id
                        ? 'border-accent bg-[rgba(107,110,115,0.05)] text-ink'
                        : 'border-[rgba(107,110,115,0.1)] text-graphite hover:bg-[rgba(107,110,115,0.02)] hover:text-ink/70'
                    }
                  `}
                >
                  <span className="block font-mono text-[10px] uppercase tracking-widest opacity-50 mb-1">
                    0{idx + 1}
                  </span>
                  <span className="font-mono text-lg md:text-xl font-medium">{study.category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Active Content */}
          <div className="w-full md:w-2/3 min-h-[500px]">
            {/* Use key to trigger re-animation on tab change */}
            <div key={activeStudy.id} className="animate-fade-in">
              <div className="mb-12">
                <p className="font-mono text-xs uppercase tracking-widest text-accent mb-4">
                  Kenapa Ini Penting
                </p>
                <p className="font-sans text-base md:text-lg leading-relaxed text-graphite">
                  {activeStudy.whyItMatters}
                </p>
              </div>

              <div className="bg-[rgba(107,110,115,0.02)] border border-[rgba(107,110,115,0.1)] p-8 md:p-12 relative group">
                <div className="absolute top-0 right-0 w-16 h-16 bg-[rgba(107,110,115,0.05)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full" />

                <h4 className="font-mono text-lg md:text-xl font-medium text-ink mb-8 pb-4 border-b border-[rgba(107,110,115,0.1)]">
                  Studi Kasus: {activeStudy.caseStudyTitle}
                </h4>

                <div className="flex flex-col gap-8 relative z-10">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-graphite mb-2">
                      Problem
                    </p>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-ink/80">
                      {activeStudy.problem}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-graphite mb-2">
                      Solution
                    </p>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-ink/80">
                      {activeStudy.solution}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-accent mb-2">
                      Impact
                    </p>
                    <p className="font-sans text-sm md:text-base leading-relaxed text-ink font-medium">
                      {activeStudy.impact}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `,
        }}
      />
    </section>
  );
}
