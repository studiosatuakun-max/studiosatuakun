import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://studiosatuakun.id"),
  title: "Studio Satu Akun | Premium Software House & Web Development",
  description: "Premium Software House yang menyediakan jasa pembuatan website, aplikasi mobile, dan software custom untuk digitalisasi UMKM dan perusahaan lokal di Indonesia.",
  keywords: ["Jasa Pembuatan Website", "Jasa Pembuatan Software", "Web Developer Lokal", "Jasa Bikin Aplikasi", "Software House Indonesia", "Konsultan IT Lokal", "Jasa Pembuatan Web Custom"],
  openGraph: {
    title: "Studio Satu Akun | Premium Software House & Web Development",
    description: "Premium Software House yang menyediakan jasa pembuatan website, aplikasi mobile, dan software custom untuk digitalisasi UMKM dan perusahaan lokal di Indonesia.",
    url: "https://studiosatuakun.id",
    siteName: "Studio Satu Akun",
    images: [
      {
        url: "https://studiosatuakun.id/og.png",
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
    title: "Studio Satu Akun | Premium Software House & Web Development",
    description: "Premium Software House yang menyediakan jasa pembuatan website, aplikasi mobile, dan software custom.",
    images: ["https://studiosatuakun.id/og.png"],
  },
  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/icon.png?v=2",
    apple: "/icon.png?v=2",
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
    description: "Premium Software House lokal yang melayani jasa pembuatan Website, Aplikasi Mobile, AI Automation, dan Software Custom profesional.",
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
