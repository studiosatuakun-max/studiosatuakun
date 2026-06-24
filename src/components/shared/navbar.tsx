import Link from "next/link";
import { Button } from "./button";

import Image from "next/image";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 sm:px-8 relative">
        {/* Logo (Absolute Left) */}
        <div className="absolute left-4 sm:left-8 flex items-center">
          <Link href="/">
            <Image 
              src="/bw.svg" 
              alt="Studio Satu Akun" 
              width={140} 
              height={40} 
              className="h-8 w-auto object-contain hover:opacity-80 transition-opacity"
              priority
            />
          </Link>
        </div>

        {/* Menu (Centered) */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
          <Link href="/process" className="hover:text-foreground transition-colors">Process</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        </nav>
        
        {/* CTA (Absolute Right) */}
        <div className="absolute right-4 sm:right-8 flex items-center gap-4">
          <Link href="/contact">
            <Button className="font-medium tracking-wide bg-transparent hover:bg-transparent">Konsultasi Gratis</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
