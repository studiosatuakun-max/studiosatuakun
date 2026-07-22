import Link from 'next/link';
import { Button } from './button';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 sm:px-8 relative">
        {/* Logo (Absolute Left) */}
        <div className="absolute left-4 sm:left-8 flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-mono text-sm font-semibold tracking-widest2 text-foreground uppercase group-hover:opacity-80 transition-opacity">
              Studio Satu Akun
            </span>
            <span className="font-mono text-sm text-muted-foreground hidden sm:inline">/</span>
            <span className="font-mono text-xs text-muted-foreground tracking-wide hidden sm:inline">ID</span>
          </Link>
        </div>

        {/* Menu (Centered) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-foreground transition-colors">
            Portfolio
          </Link>
          <Link href="/process" className="hover:text-foreground transition-colors">
            Process
          </Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">
            Blog
          </Link>
        </nav>

        {/* CTA (Absolute Right) */}
        <div className="absolute right-4 sm:right-8 flex items-center gap-4">
          <Link href="/contact">
            <Button className="font-medium tracking-wide bg-transparent hover:bg-transparent">
              Konsultasi Gratis
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
