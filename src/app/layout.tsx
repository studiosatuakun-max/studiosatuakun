import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://studiosatuakun.id'),
  title: 'Studio Satu Akun — Lead Generation & Web Catalog',
  description:
    'Studio Satu Akun builds high-performance web applications, landing pages, and AI automations. Explore our live catalog to find the perfect solution for your business.',
  icons: {
    icon: [{ url: '/assets/images/app_logo.png', type: 'image/x-icon' }],
  },
  openGraph: {
    images: ['/og.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og.jpg'],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script
          type="module"
          async
          src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fscaffold12825back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.19"
        />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" />
      </body>
    </html>
  );
}
