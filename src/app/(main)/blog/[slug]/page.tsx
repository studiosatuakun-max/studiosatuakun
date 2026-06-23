import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blog";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

// For Next.js 15, params is a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: "Artikel Tidak Ditemukan | Studio Satu Akun" };
  }

  return {
    title: `${post.title} | Studio Satu Akun Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      url: `https://studiosatuakun.id/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage || "/og.png",
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug: slug.replace(/\.md$/, ""),
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="container mx-auto px-4 max-w-3xl pt-32 pb-20">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-10 group">
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Blog
        </Link>
        
        <header className="mb-14">
          <div className="flex items-center gap-2 text-sm text-yellow-400 mb-4 font-mono">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </time>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 text-balance leading-tight text-white/90">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </header>

        {post.coverImage && (
          <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden mb-14 bg-white/5 border border-white/10 shadow-2xl">
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        )}

        {/* Prose class requires @tailwindcss/typography */}
        <article className="prose prose-invert prose-lg md:prose-xl max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-yellow-400 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-white/10 prose-hr:border-white/10">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </article>
      </div>
    </div>
  );
}
