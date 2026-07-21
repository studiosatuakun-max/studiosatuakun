'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { submitOrder } from './actions';
import type { CatalogTemplate } from '@/data/catalog';

const ADDONS = [
  { id: 'multi-bahasa', label: 'Multi-Bahasa (ID / EN)' },
  { id: 'custom-admin', label: 'Custom Admin Dashboard' },
  { id: 'integrasi', label: 'Integrasi Pihak Ketiga (API, Payment, dll)' },
];

const schema = z.object({
  full_name: z.string().min(2, 'Nama minimal 2 karakter'),
  email: z.string().email('Format email tidak valid'),
  whatsapp: z.string().min(10, 'Nomor WhatsApp minimal 10 digit').regex(/^[0-9+]+$/, 'Hanya angka dan +'),
  company: z.string().optional(),
  domain_plan: z.string().optional(),
  content_status: z.enum(['ready', 'need_dummy']),
  addons: z.array(z.string()),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function CheckoutForm({ template }: { template: CatalogTemplate }) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      content_status: 'need_dummy',
      addons: [],
    },
  });

  const selectedAddons = watch('addons');

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitOrder({
      ...data,
      template_id: template.id,
      template_title: template.title,
    });

    if (result.success) {
      router.push(`/checkout/success?template=${encodeURIComponent(template.title)}`);
    } else {
      setSubmitError('Gagal mengirim pesanan. Silakan coba lagi atau hubungi kami via WhatsApp.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* Top Bar */}
      <div className="h-14 border-b border-[rgba(107,110,115,0.25)] flex items-center px-6 bg-paper">
        <Link
          href={`/preview/${template.id}`}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-graphite hover:text-ink transition-colors"
        >
          <Icon name="ArrowLeftIcon" size={14} />
          <span>Kembali ke Preview</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left: Order Summary */}
        <div className="space-y-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-2">Foundation yang dipilih</p>
            <h1 className="font-mono text-2xl md:text-3xl font-medium leading-tight">{template.title}</h1>
          </div>

          {/* Template Preview Image */}
          {template.imageUrl && (
            <div className="relative h-56 border border-[rgba(107,110,115,0.25)] overflow-hidden">
              <AppImage
                src={template.imageUrl}
                alt={template.title}
                fill
                className="object-cover"
              />
            </div>
          )}

          <p className="font-sans text-sm text-graphite leading-relaxed">{template.description}</p>

          {/* Tech Stack */}
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-3">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {template.techStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 border border-[rgba(107,110,115,0.25)] text-graphite"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing Note */}
          <div className="border border-[rgba(107,110,115,0.25)] p-6">
            <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-1">Estimasi Harga</p>
            <p className="font-mono text-xl font-medium">Custom Quote</p>
            <p className="font-sans text-xs text-graphite mt-2 leading-relaxed">
              Tim kami akan menghubungi Anda dalam 1×24 jam untuk mendiskusikan kebutuhan dan memberikan penawaran terbaik. Pembayaran via transfer rekening PT Studio Satu Akun.
            </p>
          </div>
        </div>

        {/* Right: Project Brief Form */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-graphite mb-2">Project Brief</p>
          <h2 className="font-mono text-xl font-medium mb-8">Isi detail project Anda</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Nama Lengkap */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest mb-2">
                Nama Lengkap <span className="text-red-500">*</span>
              </label>
              <input
                {...register('full_name')}
                type="text"
                placeholder="Budi Santoso"
                className="w-full h-11 px-4 bg-transparent border border-[rgba(107,110,115,0.35)] font-sans text-sm focus:outline-none focus:border-ink transition-colors"
              />
              {errors.full_name && (
                <p className="font-mono text-[10px] text-red-500 mt-1">{errors.full_name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="budi@perusahaan.com"
                className="w-full h-11 px-4 bg-transparent border border-[rgba(107,110,115,0.35)] font-sans text-sm focus:outline-none focus:border-ink transition-colors"
              />
              {errors.email && (
                <p className="font-mono text-[10px] text-red-500 mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* WhatsApp */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest mb-2">
                Nomor WhatsApp <span className="text-red-500">*</span>
              </label>
              <input
                {...register('whatsapp')}
                type="tel"
                placeholder="08123456789"
                className="w-full h-11 px-4 bg-transparent border border-[rgba(107,110,115,0.35)] font-sans text-sm focus:outline-none focus:border-ink transition-colors"
              />
              {errors.whatsapp && (
                <p className="font-mono text-[10px] text-red-500 mt-1">{errors.whatsapp.message}</p>
              )}
            </div>

            {/* Perusahaan */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest mb-2">
                Nama Perusahaan / Organisasi <span className="text-graphite">(opsional)</span>
              </label>
              <input
                {...register('company')}
                type="text"
                placeholder="PT Contoh Maju"
                className="w-full h-11 px-4 bg-transparent border border-[rgba(107,110,115,0.35)] font-sans text-sm focus:outline-none focus:border-ink transition-colors"
              />
            </div>

            {/* Domain */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest mb-2">
                Rencana Nama Domain <span className="text-graphite">(opsional)</span>
              </label>
              <input
                {...register('domain_plan')}
                type="text"
                placeholder="contoh.com atau belum tahu"
                className="w-full h-11 px-4 bg-transparent border border-[rgba(107,110,115,0.35)] font-sans text-sm focus:outline-none focus:border-ink transition-colors"
              />
            </div>

            {/* Status Konten */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest mb-3">
                Status Konten / Materi <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-4 border border-[rgba(107,110,115,0.25)] cursor-pointer hover:border-ink transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink/5">
                  <input
                    {...register('content_status')}
                    type="radio"
                    value="ready"
                    className="accent-ink"
                  />
                  <span className="font-mono text-xs">Sudah siap<br /><span className="text-graphite font-sans normal-case text-[11px]">Foto & teks tersedia</span></span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-[rgba(107,110,115,0.25)] cursor-pointer hover:border-ink transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink/5">
                  <input
                    {...register('content_status')}
                    type="radio"
                    value="need_dummy"
                    className="accent-ink"
                  />
                  <span className="font-mono text-xs">Butuh dummy<br /><span className="text-graphite font-sans normal-case text-[11px]">Isi dulu oleh tim kami</span></span>
                </label>
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest mb-3">
                Add-ons <span className="text-graphite">(opsional)</span>
              </label>
              <div className="space-y-2">
                {ADDONS.map((addon) => (
                  <label
                    key={addon.id}
                    className="flex items-center gap-3 p-4 border border-[rgba(107,110,115,0.25)] cursor-pointer hover:border-ink transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink/5"
                  >
                    <input
                      {...register('addons')}
                      type="checkbox"
                      value={addon.id}
                      className="accent-ink w-4 h-4"
                    />
                    <span className="font-sans text-sm">{addon.label}</span>
                    {addon.id === 'integrasi' && (
                      <span className="ml-auto font-mono text-[10px] text-graphite uppercase tracking-widest">Perlu konsultasi</span>
                    )}
                  </label>
                ))}
              </div>
            </div>

            {/* Catatan */}
            <div>
              <label className="block font-mono text-xs uppercase tracking-widest mb-2">
                Catatan Tambahan <span className="text-graphite">(opsional)</span>
              </label>
              <textarea
                {...register('notes')}
                rows={4}
                placeholder="Ceritakan lebih detail kebutuhan project Anda, referensi desain, atau pertanyaan spesifik..."
                className="w-full px-4 py-3 bg-transparent border border-[rgba(107,110,115,0.35)] font-sans text-sm focus:outline-none focus:border-ink transition-colors resize-none"
              />
            </div>

            {/* Error Message */}
            {submitError && (
              <div className="p-4 border border-red-300 bg-red-50 text-red-700 font-sans text-sm">
                {submitError}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-ink text-paper font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Mengirim Brief...' : 'Kirim Project Brief →'}
            </button>

            <p className="font-sans text-xs text-graphite text-center leading-relaxed">
              Dengan mengirim form ini, tim Studio Satu Akun akan menghubungi Anda via WhatsApp dalam 1×24 jam untuk berdiskusi lebih lanjut.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
