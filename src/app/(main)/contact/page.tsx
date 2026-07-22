import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Studio Satu Akun',
  description: 'Hubungi Studio Satu Akun untuk konsultasi proyek web, aplikasi, dan automasi AI.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-paper">
      <div className="container mx-auto px-4 max-w-3xl pt-32 pb-20 flex-grow">
        <Link
          href="/"
          className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-graphite hover:text-ink transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Home
        </Link>

        <header className="mb-14 pb-10">
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-balance leading-tight text-ink">
            Let's build something <br />
            <em className="not-italic text-graphite">great together.</em>
          </h1>
          <p className="text-lg text-graphite font-light leading-relaxed max-w-xl">
            Ceritakan tantangan bisnis Anda, dan kami akan merancang solusi digital 
            yang tepat sasaran, terukur, dan premium.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* WhatsApp Card */}
          <a 
            href="https://wa.me/6282260880878" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex flex-col p-8 border border-[rgba(12,12,12,0.1)] bg-[rgba(12,12,12,0.02)] hover:bg-ink hover:border-ink transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[rgba(255,255,255,0.05)] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Phone className="w-6 h-6 text-ink group-hover:text-paper mb-6 transition-colors" strokeWidth={1.5} />
            <h3 className="font-mono text-xl text-ink group-hover:text-paper mb-2 transition-colors">WhatsApp</h3>
            <p className="font-mono text-sm text-graphite group-hover:text-[rgba(255,255,255,0.7)] mb-8 transition-colors">
              Fast response untuk diskusi cepat.
            </p>
            <div className="mt-auto flex items-center text-xs font-mono uppercase tracking-widest text-ink group-hover:text-paper transition-colors">
              <span>0822 6088 0878</span>
              <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Email Card */}
          <a 
            href="mailto:dev@studiosatuakun.id" 
            className="group flex flex-col p-8 border border-[rgba(12,12,12,0.1)] bg-[rgba(12,12,12,0.02)] hover:bg-ink hover:border-ink transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-[rgba(255,255,255,0.05)] rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Mail className="w-6 h-6 text-ink group-hover:text-paper mb-6 transition-colors" strokeWidth={1.5} />
            <h3 className="font-mono text-xl text-ink group-hover:text-paper mb-2 transition-colors">Email</h3>
            <p className="font-mono text-sm text-graphite group-hover:text-[rgba(255,255,255,0.7)] mb-8 transition-colors">
              Untuk pengiriman dokumen / RFP.
            </p>
            <div className="mt-auto flex items-center text-xs font-mono uppercase tracking-widest text-ink group-hover:text-paper transition-colors">
              <span>dev@studiosatuakun.id</span>
              <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Office Info (Full Width) */}
          <div className="md:col-span-2 p-8 border border-[rgba(12,12,12,0.1)] bg-[rgba(12,12,12,0.02)] flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[rgba(12,12,12,0.05)] rounded-full">
              <MapPin className="w-5 h-5 text-ink" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="font-mono text-sm font-semibold tracking-widest uppercase text-ink mb-1">
                PT Studio Satu Akun
              </h3>
              <p className="font-mono text-xs text-graphite leading-relaxed">
                Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
