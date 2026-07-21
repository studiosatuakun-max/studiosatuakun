'use client';

import Link from 'next/link';

export default function PreviewError({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-paper text-ink p-8 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-4">Error</p>
      <h2 className="font-mono text-2xl font-medium mb-3">Preview Gagal Dimuat</h2>
      <p className="font-sans text-sm text-graphite max-w-sm mb-8">
        Terjadi kesalahan saat memuat halaman preview. Silakan coba lagi.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="font-mono text-xs uppercase tracking-widest px-5 py-3 bg-ink text-paper hover:bg-accent transition-colors"
        >
          Coba Lagi
        </button>
        <Link
          href="/katalog/landing-page"
          className="font-mono text-xs uppercase tracking-widest px-5 py-3 border border-[rgba(107,110,115,0.4)] hover:border-ink transition-colors"
        >
          Kembali ke Katalog
        </Link>
      </div>
    </div>
  );
}
