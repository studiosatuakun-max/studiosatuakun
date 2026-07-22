import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { Calendar, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Blog & Insights | Studio Satu Akun',
  description:
    'Artikel terbaru seputar teknologi web, aplikasi mobile, AI automation, dan strategi digital marketing.',
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="flex flex-col min-h-screen bg-paper">
      <section className="relative pt-32 pb-16 overflow-hidden border-b border-[rgba(107,110,115,0.15)]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="font-mono text-4xl md:text-6xl font-light tracking-tight mb-4 text-ink">
            Blog & Insights
          </h1>
          <p className="text-graphite text-lg md:text-xl leading-relaxed font-light">
            Eksplorasi wawasan teknikal, studi kasus, dan tren teknologi terkini untuk membantu
            bisnis Anda bertumbuh.
          </p>
        </div>
      </section>

      <section className="py-12 flex-1 container mx-auto px-4 max-w-5xl">
        {posts.length === 0 ? (
          <div className="text-center py-20 border border-[rgba(107,110,115,0.15)] bg-white">
            <h3 className="text-xl font-bold mb-2 text-ink">Belum ada artikel</h3>
            <p className="text-graphite">
              Kami sedang menyiapkan artikel pertama kami. Pantau terus!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                href={`/blog/${post.slug}`}
                key={post.slug}
                className="group flex flex-col bg-white border border-[rgba(107,110,115,0.15)] hover:border-ink/30 transition-all duration-300"
              >
                {post.coverImage ? (
                  <div className="aspect-[16/9] w-full bg-gray-100 relative overflow-hidden border-b border-[rgba(107,110,115,0.15)]">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div className="aspect-[16/9] w-full bg-ink/5 flex items-center justify-center border-b border-[rgba(107,110,115,0.15)]">
                    <span className="font-mono font-bold text-ink/20 text-2xl tracking-widest uppercase">
                      INSIGHT
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-graphite mb-4 font-mono uppercase tracking-wide">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>
                      {new Date(post.date).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>

                  <h2 className="font-mono text-xl md:text-2xl font-medium tracking-tight text-ink mb-4 group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-graphite text-sm line-clamp-3 mb-8 flex-1 font-light leading-relaxed">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center text-xs font-mono font-semibold text-ink group-hover:text-accent uppercase tracking-widest mt-auto transition-colors">
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
