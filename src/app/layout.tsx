import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Satu Akun | Interactive Digital Product Showcase",
  description: "Website, Mobile App, AI Automation, dan Software Custom untuk membantu bisnis berkembang lebih cepat.",
};

import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased dark`}>
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
