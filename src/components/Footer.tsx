import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(12,12,12,0.15)] bg-paper px-6 md:px-10 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Arc pattern: logo+tagline left, links right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <span className="font-mono text-sm font-semibold tracking-widest2 text-ink uppercase">
              Studio Satu Akun
            </span>
            <p className="font-mono text-xs text-graphite max-w-xs leading-relaxed">
              PT Studio Satu Akun
              <br />
              Email: dev@studiosatuakun.id
              <br />
              Whatsapp:{' '}
              <a href="https://wa.me/6282260880878" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors duration-200">
                082260880878
              </a>
            </p>
          </div>

          {/* Right links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-x-10 gap-y-3">
            {[
              { label: 'Work', href: '#work' },
              { label: 'Services', href: '#services' },
              { label: 'Katalog', href: '#katalog' },
              { label: 'About', href: '#about' },
              { label: 'Journal', href: '/blog' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
            ]?.map((link) => (
              <a
                key={link?.label}
                href={link?.href}
                className="font-mono text-xs uppercase tracking-widest text-graphite hover:text-ink transition-colors duration-200"
              >
                {link?.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-6 border-t border-[rgba(12,12,12,0.15)] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-xs text-graphite">
            © 2026 Studio Satu Akun. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            {[
              { label: 'GitHub', href: '#' },
              { label: 'Twitter', href: '#' },
              { label: 'LinkedIn', href: '#' },
            ]?.map((s) => (
              <a
                key={s?.label}
                href={s?.href}
                className="font-mono text-xs uppercase tracking-widest text-graphite hover:text-ink transition-colors duration-200"
              >
                {s?.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
