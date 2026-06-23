import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studiosatuakun.id"),
  title: "Studio Satu Akun | Jasa Pembuatan Website, Aplikasi & Software Custom",
  description: "Software house premium yang membantu bisnis UMKM, Startup, dan Perusahaan bertransformasi digital melalui Website, Mobile App, dan AI Automation.",
  openGraph: {
    title: "Studio Satu Akun | Jasa Pembuatan Website & Software Custom",
    description: "Software house premium yang membantu bisnis UMKM, Startup, dan Perusahaan bertransformasi digital.",
    url: "https://studiosatuakun.id",
    siteName: "Studio Satu Akun",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Studio Satu Akun - Premium Digital Products",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Studio Satu Akun | Jasa Pembuatan Website & Software Custom",
    description: "Premium digital solutions for your business growth.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Studio Satu Akun",
    image: "https://studiosatuakun.id/og.png",
    url: "https://studiosatuakun.id",
    telephone: "+6282260880878",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
    },
    description: "Software house premium melayani pembuatan Website, Aplikasi Mobile, AI Automation, dan Software Custom.",
    priceRange: "$$",
  };

  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
