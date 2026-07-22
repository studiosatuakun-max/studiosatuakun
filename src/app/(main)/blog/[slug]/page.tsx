import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogSlugs } from '@/lib/blog';
import ReactMarkdown from 'react-markdown';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Calendar } from 'lucide-react';

// For Next.js 15, params is a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: 'Artikel Tidak Ditemukan | Studio Satu Akun' };
  }

  return {
    title: `${post.title} | Studio Satu Akun`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage || '/og.jpg',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage || '/og.jpg'],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ''),
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.coverImage ? [post.coverImage] : ['https://studiosatuakun.id/og.jpg'],
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Studio Satu Akun',
      url: 'https://studiosatuakun.id',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Studio Satu Akun',
      logo: {
        '@type': 'ImageObject',
        url: 'https://studiosatuakun.id/assets/images/app_logo.png',
      },
    },
    description: post.excerpt,
  };

  return (
    <div className="flex flex-col min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 max-w-3xl pt-32 pb-20">
        <Link
          href="/blog"
          className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-graphite hover:text-ink transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Journal
        </Link>

        <header className="mb-14">
          <div className="flex items-center gap-2 text-xs text-accent mb-6 font-mono uppercase tracking-wide">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
          <h1 className="font-mono text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-6 text-balance leading-tight text-ink">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-graphite font-light leading-relaxed">{post.excerpt}</p>
        </header>

        {post.coverImage && (
          <div className="aspect-[21/9] w-full overflow-hidden mb-16 bg-gray-100 border border-[rgba(107,110,115,0.15)]">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Prose class requires @tailwindcss/typography */}
        <article className="prose prose-lg md:prose-xl max-w-none text-ink prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-ink prose-a:text-accent prose-a:no-underline hover:prose-a:underline prose-img:border prose-img:border-[rgba(107,110,115,0.15)] prose-hr:border-[rgba(107,110,115,0.15)] prose-strong:text-ink prose-blockquote:border-accent prose-blockquote:bg-accent/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:text-ink/80 prose-blockquote:font-normal prose-blockquote:not-italic font-light leading-relaxed">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
