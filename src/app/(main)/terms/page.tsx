import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Studio Satu Akun',
  description: 'Syarat dan Ketentuan Layanan (Terms of Service) Studio Satu Akun.',
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper">
      <div className="container mx-auto px-4 max-w-3xl pt-32 pb-20">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-graphite hover:text-ink transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Home
        </Link>

        <header className="mb-14 border-b border-[rgba(12,12,12,0.15)] pb-10">
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-balance leading-tight text-ink">
            Terms of Service
          </h1>
          <p className="text-lg text-graphite font-light leading-relaxed">
            Terakhir diperbarui: 23 Juni 2026
          </p>
        </header>

        <article className="prose prose-lg max-w-none text-ink prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink font-light leading-relaxed">
          <p>
            Dengan menggunakan situs web dan layanan dari <strong>Studio Satu Akun</strong>, Anda setuju
            untuk terikat oleh syarat dan ketentuan berikut ("Terms of Service"). Harap membaca ketentuan ini dengan
            seksama sebelum menggunakan layanan kami.
          </p>

          <h2>1. Persetujuan Layanan</h2>
          <p>
            Dengan mengakses situs web ini, Anda setuju untuk terikat oleh Syarat dan Ketentuan Penggunaan,
            semua undang-undang dan peraturan yang berlaku, dan setuju bahwa Anda bertanggung jawab untuk
            mematuhi hukum setempat yang berlaku. Jika Anda tidak setuju dengan ketentuan ini, Anda
            dilarang menggunakan atau mengakses situs ini.
          </p>

          <h2>2. Layanan Pengembangan dan Pemesanan</h2>
          <p>
            Studio Satu Akun menyediakan layanan pengembangan web, aplikasi, dan otomatisasi AI. 
            Semua proyek, ruang lingkup kerja (Scope of Work), biaya, dan jadwal akan disepakati secara 
            tertulis (melalui email atau kontrak resmi) sebelum pekerjaan dimulai. Kami berhak menolak proyek 
            yang tidak sesuai dengan nilai atau standar operasi kami.
          </p>

          <h2>3. Hak Kekayaan Intelektual</h2>
          <p>
            Kecuali dinyatakan lain dalam kontrak terpisah:
          </p>
          <ul>
            <li>Desain, kode kustom, dan aset digital yang dibuat secara spesifik untuk klien akan menjadi milik klien setelah pembayaran dilunasi 100%.</li>
            <li>Studio Satu Akun berhak untuk memamerkan proyek tersebut di dalam portofolio, media sosial, atau materi pemasaran kami, kecuali ada perjanjian *Non-Disclosure Agreement (NDA)*.</li>
            <li>Template dasar atau infrastruktur proprietary milik Studio Satu Akun tetap menjadi milik kami, dan klien diberikan lisensi untuk menggunakannya.</li>
          </ul>

          <h2>4. Batasan Tanggung Jawab</h2>
          <p>
            Dalam keadaan apa pun, Studio Satu Akun tidak bertanggung jawab atas kerusakan apa pun 
            (termasuk, tanpa batasan, ganti rugi atas hilangnya data atau keuntungan, atau karena gangguan bisnis) 
            yang timbul dari penggunaan atau ketidakmampuan untuk menggunakan material di situs web Studio Satu Akun 
            atau produk digital yang diserahkan.
          </p>

          <h2>5. Revisi dan Errata</h2>
          <p>
            Materi yang muncul di situs web Studio Satu Akun dapat mencakup kesalahan teknis, tipografi,
            atau fotografi. Kami tidak menjamin bahwa semua materi di situs web ini akurat, lengkap, atau
            terkini. Kami dapat membuat perubahan pada materi yang terkandung di situs web kapan saja
            tanpa pemberitahuan.
          </p>

          <h2>6. Hukum yang Berlaku</h2>
          <p>
            Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia,
            dan Anda secara tunduk pada yurisdiksi eksklusif pengadilan di wilayah tersebut.
          </p>
        </article>
      </div>
    </div>
  );
}
