import Link from "next/link";
import { Mail, Phone } from "lucide-react";

function MinimalFooter() {
  return (
    <footer className="py-12 border-t border-white/10 bg-slate-950 text-slate-400 text-center">
      <div className="container mx-auto px-4 max-w-4xl">
        <h3 className="text-xl font-bold text-white mb-4">Studio Satu Akun</h3>
        <p className="mb-8 max-w-2xl mx-auto leading-relaxed">
          Website, Mobile App, AI Automation, dan Software Custom untuk membantu bisnis berkembang lebih cepat.
        </p>
        
        <div className="flex items-center justify-center gap-6 mb-8">
          <Link href="mailto:hello@studiosatuakun.id" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
            <Mail className="w-4 h-4" />
            <span className="text-sm">hello@studiosatuakun.id</span>
          </Link>
          <Link href="https://wa.me/6282260880878" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition-colors">
            <Phone className="w-4 h-4" />
            <span className="text-sm">+62 822-6088-0878</span>
          </Link>
        </div>

        <p className="text-sm opacity-60">
          &copy; 2026 Studio Satu Akun. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function AdsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex-1 flex flex-col">{children}</main>
      <MinimalFooter />
    </>
  );
}
