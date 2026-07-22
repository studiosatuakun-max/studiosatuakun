import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 text-center md:text-left">
        <div className="col-span-1 md:col-span-2 flex flex-col items-center md:items-start">
          <Link href="/" className="inline-flex items-center gap-2 group mb-6">
            <span className="font-mono text-lg font-semibold tracking-widest2 text-foreground uppercase group-hover:opacity-80 transition-opacity">
              Studio Satu Akun
            </span>
            <span className="font-mono text-lg text-muted-foreground hidden sm:inline">/</span>
            <span className="font-mono text-sm text-muted-foreground tracking-wide hidden sm:inline">ID</span>
          </Link>
          <p className="font-sans text-muted-foreground text-sm max-w-xs leading-relaxed">
            Website, Mobile App, AI Automation, dan Software Custom untuk membantu bisnis berkembang
            lebih cepat.
          </p>
        </div>
        <div>
          <h3 className="font-mono text-sm uppercase tracking-widest text-foreground mb-4">Company</h3>
          <ul className="space-y-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <li>
              <Link href="/about" className="hover:text-foreground transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-foreground transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-foreground transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-foreground transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-mono text-sm uppercase tracking-widest text-foreground mb-4">Connect</h3>
          <ul className="space-y-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <li>
              <Link href="/contact" className="hover:text-foreground transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-foreground transition-colors">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-8 mt-12 pt-8 border-t border-border/40 text-center flex flex-col md:flex-row justify-between items-center font-mono text-xs text-muted-foreground gap-4 md:gap-0">
        <p>&copy; {new Date().getFullYear()} PT Studio Satu Akun. All rights reserved.</p>
        <div className="flex gap-6 uppercase tracking-widest flex-wrap justify-center">
          <Link href="#" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
