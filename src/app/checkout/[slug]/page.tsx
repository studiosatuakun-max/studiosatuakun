import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { TEMPLATES } from '@/data/catalog';
import { CheckoutForm } from './CheckoutForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const template = TEMPLATES.find((t) => t.id === slug);
  if (!template) return { title: 'Checkout' };

  return {
    title: `Pesan ${template.title} | Studio Satu Akun`,
    description: `Isi project brief untuk memulai pembuatan website "${template.title}" bersama Studio Satu Akun.`,
  };
}

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const template = TEMPLATES.find((t) => t.id === slug);

  if (!template) {
    notFound();
  }

  return <CheckoutForm template={template} />;
}
