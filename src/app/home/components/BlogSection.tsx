import React from 'react';
import Link from 'next/link';
import { getAllBlogPosts } from '@/lib/blog';
import { Calendar, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const posts = getAllBlogPosts().slice(0, 3); // Ambil 3 terbaru

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 px-6 md:px-10 border-t border-[rgba(107,110,115,0.15)] bg-paper">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-3">
            <span className="font-mono text-sm font-semibold tracking-widest2 text-ink uppercase">
              Insights & Articles
            </span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-ink">
              Latest from the Blog.
            </h2>
          </div>
          <Link
            href="/blog"
            className="font-mono text-xs uppercase tracking-widest px-5 py-3 border border-[rgba(107,110,115,0.3)] text-ink hover:border-ink transition-colors duration-200"
          >
            Lihat Semua Artikel
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="group flex flex-col border border-[rgba(107,110,115,0.15)] bg-white hover:border-ink/50 transition-all duration-300"
            >
              {post.coverImage ? (
                <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="aspect-[16/9] w-full bg-ink/5 flex items-center justify-center border-b border-[rgba(107,110,115,0.15)]">
                  <span className="font-mono font-bold text-ink/20 text-xl tracking-widest uppercase">
                    INSIGHT
                  </span>
                </div>
              )}

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-graphite mb-4 font-mono uppercase tracking-wide">
                  <Calendar className="w-3 h-3" />
                  <span>
                    {new Date(post.date).toLocaleDateString('id-ID', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-ink mb-3 group-hover:text-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-graphite text-sm line-clamp-3 mb-6 font-light leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <div className="flex items-center text-xs font-mono font-semibold text-ink group-hover:text-accent uppercase tracking-widest mt-auto transition-colors">
                  Baca Artikel
                  <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
