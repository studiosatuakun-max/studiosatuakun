import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Icon from '@/components/ui/AppIcon';
import { TEMPLATES } from '@/data/catalog';

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '6282260880878';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = TEMPLATES.find((t) => t.id === slug);

  if (!template) return { title: 'Foundation Tidak Ditemukan' };

  return {
    title: `Jasa Website ${template.title} | Studio Satu Akun`,
    description: `Bangun website profesional dengan desain "${template.title}". Lihat preview lengkapnya dan konsultasikan kebutuhan Anda bersama Studio Satu Akun.`,
    openGraph: {
      title: `Jasa Website ${template.title} | Studio Satu Akun`,
      description: `Lihat preview dan pesan jasa pembuatan website dengan desain "${template.title}".`,
      images: template.imageUrl ? [{ url: template.imageUrl }] : [],
    },
  };
}

export default async function PreviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = TEMPLATES.find((t) => t.id === slug);

  if (!template) {
    notFound();
  }

  const waMessage = encodeURIComponent(
    `Halo Studio Satu Akun, saya tertarik dengan desain "${template.title}" dan ingin konsultasi lebih lanjut.`
  );
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Jasa Pembuatan Website — ${template.title}`,
    provider: {
      '@type': 'Organization',
      name: 'Studio Satu Akun',
      url: 'https://studiosatuakun.id',
    },
    description: template.description,
    serviceType: 'Web Development',
    areaServed: 'ID',
    url: `https://studiosatuakun.id/preview/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col h-screen overflow-hidden bg-paper text-ink">
        {/* Sticky Top Bar */}
        <div className="h-16 border-b border-[rgba(107,110,115,0.25)] flex items-center justify-between px-4 md:px-6 flex-shrink-0 bg-paper z-50 relative">
          {/* Left: Back + Title */}
          <div className="flex items-center gap-4 h-full overflow-hidden">
            <Link
              href={`/katalog/${template.category}`}
              className="flex-shrink-0 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-graphite hover:text-ink transition-colors h-full border-r border-[rgba(107,110,115,0.25)] pr-4"
            >
              <Icon name="ArrowLeftIcon" size={14} />
              <span className="hidden md:inline">Katalog</span>
            </Link>
            <div className="overflow-hidden">
              <p className="font-mono text-sm font-medium truncate">{template.title}</p>
              <p className="font-mono text-[10px] text-graphite uppercase tracking-widest hidden md:block">
                Live Preview
              </p>
            </div>
          </div>

          {/* Right: Dual CTA */}
          <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
            {/* WA — Warm Lead */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-[10px] md:text-xs uppercase tracking-widest px-3 md:px-4 py-2 border border-[rgba(107,110,115,0.4)] text-graphite hover:border-ink hover:text-ink transition-colors"
            >
              <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="hidden md:inline">Konsultasi Dulu</span>
              <span className="md:hidden">WA</span>
            </a>

            {/* Checkout — Hot Lead */}
            <Link
              href={`/checkout/${template.id}`}
              className="font-mono text-[10px] md:text-xs uppercase tracking-widest px-4 py-2 bg-ink text-paper hover:bg-accent transition-colors"
            >
              Pesan Sekarang
            </Link>
          </div>
        </div>

        {/* Iframe */}
        <div className="flex-1 w-full bg-[rgba(107,110,115,0.05)] relative">
          {template.liveDemoUrl ? (
            <iframe
              src={template.liveDemoUrl}
              className="w-full h-full border-none"
              title={`${template.title} Live Preview`}
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-graphite p-6 text-center">
              <Icon name="WindowIcon" size={48} className="mb-4 opacity-50" />
              <h2 className="font-mono text-xl font-medium mb-2 text-ink">Preview Unavailable</h2>
              <p className="font-sans text-sm max-w-md">
                Live demo URL belum dikonfigurasi untuk foundation ini.
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
