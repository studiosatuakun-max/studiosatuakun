import Link from "next/link";
import { Button } from "./button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center font-bold text-primary-foreground text-xl">
            S
          </div>
          <span className="font-bold text-lg hidden sm:inline-block">Studio Satu Akun</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
          <Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link>
          <Link href="/process" className="hover:text-foreground transition-colors">Process</Link>
          <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact">
            <Button className="font-medium tracking-wide bg-transparent hover:bg-transparent">Konsultasi Gratis</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
