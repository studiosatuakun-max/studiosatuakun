'use client';

import React, { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-10 py-4 flex items-center justify-between ${
          scrolled ? 'nav-glass' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <span className="font-mono text-sm font-semibold tracking-widest2 text-ink uppercase">
            Studio Satu Akun
          </span>
          <span className="font-mono text-sm text-graphite">/</span>
          <span className="font-mono text-xs text-graphite tracking-wide">ID</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Work', 'Services', 'Katalog', 'About']?.map((item) => (
            <a
              key={item}
              href={pathname === '/home' || pathname === '/' ? `#${item?.toLowerCase()}` : `/home#${item?.toLowerCase()}`}
              className="font-mono text-xs uppercase tracking-widest text-graphite hover:text-ink transition-colors duration-200"
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/6282260880878"
            target="_blank" rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest px-4 py-2 bg-ink text-paper hover:bg-accent transition-colors duration-200"
          >
            Mulai Konsultasi
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-ink transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}
          />
        </button>
      </nav>
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-paper flex flex-col justify-center items-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 text-center">
          {['Work', 'Services', 'Katalog', 'About']?.map((item, i) => (
            <a
              key={item}
              href={pathname === '/home' || pathname === '/' ? `#${item?.toLowerCase()}` : `/home#${item?.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-4xl uppercase tracking-tighter text-ink hover:text-accent transition-colors duration-200"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {item}
            </a>
          ))}
          <a
            href="https://wa.me/6282260880878"
            target="_blank" rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-4 font-mono text-sm uppercase tracking-widest px-8 py-4 bg-ink text-paper hover:bg-accent transition-colors duration-200"
          >
            Mulai Konsultasi
          </a>
        </div>
      </div>
    </>
  );
}
