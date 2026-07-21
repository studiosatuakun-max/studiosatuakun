'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function MockFadePage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ffffff] font-sans overflow-x-hidden selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full p-6 flex justify-between items-center z-50 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
      >
        <div className="font-mono text-sm tracking-widest uppercase">Fade.Studio</div>
        <div className="flex gap-8 text-xs font-mono uppercase tracking-widest opacity-60">
          <Link href="#" className="hover:opacity-100 transition-opacity">
            Work
          </Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">
            About
          </Link>
          <Link href="#" className="hover:opacity-100 transition-opacity">
            Contact
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="min-h-screen flex flex-col justify-center px-10 md:px-24">
        <h1
          className={`text-6xl md:text-8xl lg:text-[10rem] font-light tracking-tighter leading-[0.9] transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
        >
          Simplicity is
          <br />
          <span className="text-[#666666] italic font-serif">the ultimate</span>
          <br />
          sophistication.
        </h1>

        <div
          className={`mt-24 max-w-md transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] delay-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <p className="text-[#888888] font-mono text-sm leading-relaxed">
            This is a mock preview of the "Fade Interactive Layout". In a real scenario, this iframe
            would point to a fully deployed Vercel URL of the cloned Github repository.
          </p>
          <button className="mt-8 px-8 py-4 bg-white text-black font-mono text-xs uppercase tracking-widest hover:bg-[#cccccc] transition-colors">
            Explore Foundation
          </button>
        </div>
      </main>

      {/* Scroll indicator */}
      <div
        className={`fixed bottom-10 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-1000 ${mounted ? 'opacity-30' : 'opacity-0'}`}
      >
        <div className="w-px h-16 bg-white mx-auto overflow-hidden">
          <div className="w-full h-full bg-black animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `,
        }}
      />
    </div>
  );
}
