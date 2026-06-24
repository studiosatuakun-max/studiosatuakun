import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-12 mt-auto">
      <div className="container mx-auto px-4 sm:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="inline-block mb-6">
            <Image 
              src="/bw.svg" 
              alt="Studio Satu Akun Logo" 
              width={180} 
              height={50} 
              className="h-20 w-auto object-contain"
            />
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Website, Mobile App, AI Automation, dan Software Custom untuk membantu bisnis berkembang lebih cepat.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link href="/services" className="hover:text-foreground transition-colors">Services</Link></li>
            <li><Link href="/portfolio" className="hover:text-foreground transition-colors">Portfolio</Link></li>
            <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Connect</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Twitter</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">LinkedIn</a></li>
            <li><a href="#" className="hover:text-foreground transition-colors">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-8 mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} PT Studio Satu Akun. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
