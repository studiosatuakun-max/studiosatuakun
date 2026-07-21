import Link from 'next/link';

export default function CheckoutSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ template?: string }>;
}) {
  return (
    <SuccessContent searchParams={searchParams} />
  );
}

async function SuccessContent({
  searchParams,
}: {
  searchParams: Promise<{ template?: string }>;
}) {
  const params = await searchParams;
  const templateName = params.template || 'Foundation';

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col items-center justify-center px-6 text-center">
      {/* Animated checkmark */}
      <div className="w-20 h-20 border-2 border-ink flex items-center justify-center mb-8 animate-[fadeIn_0.6s_ease-out]">
        <svg
          className="w-10 h-10 text-ink"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>

      <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-3">
        Brief Terkirim
      </p>
      <h1 className="font-mono text-2xl md:text-3xl font-medium mb-4 max-w-lg leading-tight">
        Terima kasih! Kami sudah menerima brief project Anda.
      </h1>
      <p className="font-sans text-sm text-graphite max-w-md leading-relaxed mb-10">
        Tim Studio Satu Akun akan menghubungi Anda via <strong>WhatsApp</strong> dalam{' '}
        <strong>1×24 jam</strong> untuk berdiskusi lebih lanjut mengenai project{' '}
        <em>&ldquo;{templateName}&rdquo;</em> dan memberikan penawaran harga terbaik.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_WA_NUMBER || '6282260880878'}?text=${encodeURIComponent('Halo Studio Satu Akun, saya baru saja mengisi project brief dan ingin follow up lebih cepat.')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs uppercase tracking-widest px-6 py-3 bg-ink text-paper hover:bg-accent transition-colors"
        >
          Chat via WhatsApp
        </a>
        <Link
          href="/katalog/landing-page"
          className="font-mono text-xs uppercase tracking-widest px-6 py-3 border border-[rgba(107,110,115,0.4)] hover:border-ink transition-colors"
        >
          Lihat Foundation Lain
        </Link>
      </div>
    </div>
  );
}
