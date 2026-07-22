import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy | Studio Satu Akun',
  description: 'Kebijakan Privasi (Privacy Policy) untuk layanan Studio Satu Akun.',
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-lg text-graphite font-light leading-relaxed">
            Terakhir diperbarui: 23 Juni 2026
          </p>
        </header>

        <article className="prose prose-lg max-w-none text-ink prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-strong:text-ink font-light leading-relaxed">
          <p>
            Selamat datang di <strong>Studio Satu Akun</strong>. Kami sangat menghargai privasi Anda dan
            berkomitmen untuk melindungi data pribadi yang Anda berikan kepada kami. Kebijakan Privasi
            ini menjelaskan bagaimana kami mengumpulkan, menggunakan, membagikan, dan melindungi informasi
            Anda ketika Anda menggunakan layanan kami, baik melalui situs web maupun aplikasi yang kami
            kembangkan.
          </p>

          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami mengumpulkan beberapa jenis informasi untuk memberikan dan meningkatkan layanan kami:
          </p>
          <ul>
            <li>
              <strong>Data Pribadi:</strong> Saat Anda menghubungi kami, mengisi formulir pemesanan, atau 
              menggunakan layanan, kami mungkin meminta informasi identitas pribadi (seperti nama, email, 
              dan nomor telepon).
            </li>
            <li>
              <strong>Data Penggunaan:</strong> Kami secara otomatis mengumpulkan informasi tentang bagaimana 
              layanan kami diakses dan digunakan, termasuk alamat IP, jenis browser, versi browser, halaman 
              situs kami yang Anda kunjungi, serta waktu dan tanggal kunjungan Anda.
            </li>
          </ul>

          <h2>2. Penggunaan Data</h2>
          <p>
            Studio Satu Akun menggunakan data yang dikumpulkan untuk berbagai keperluan:
          </p>
          <ul>
            <li>Untuk menyediakan dan memelihara layanan kami</li>
            <li>Untuk memberi tahu Anda tentang perubahan pada layanan kami</li>
            <li>Untuk memberikan dukungan pelanggan (Customer Support)</li>
            <li>Untuk memantau penggunaan layanan dan melakukan perbaikan teknis</li>
          </ul>

          <h2>3. Keamanan Data</h2>
          <p>
            Keamanan data Anda sangat penting bagi kami. Kami mengimplementasikan berbagai standar keamanan 
            yang ketat (termasuk enkripsi dan manajemen akses terbatas) pada semua infrastruktur web dan 
            aplikasi yang kami kelola. Namun, perlu diingat bahwa tidak ada metode transmisi melalui Internet 
            atau metode penyimpanan elektronik yang 100% aman.
          </p>

          <h2>4. Perubahan pada Kebijakan Privasi Ini</h2>
          <p>
            Kami dapat memperbarui Kebijakan Privasi kami dari waktu ke waktu. Kami akan memberi tahu Anda 
            tentang segala perubahan dengan memposting Kebijakan Privasi yang baru di halaman ini. Kami 
            menyarankan Anda untuk meninjau Kebijakan Privasi ini secara berkala.
          </p>

          <h2>5. Hubungi Kami</h2>
          <p>
            Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di:
            <br />
            <strong>Email:</strong> dev@studiosatuakun.id
            <br />
            <strong>WhatsApp:</strong> 082260880878
          </p>
        </article>
      </div>
    </div>
  );
}
