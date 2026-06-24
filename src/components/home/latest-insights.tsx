import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";
import Image from "next/image";

export function LatestInsights() {
  const posts = getAllBlogPosts().slice(0, 3); // Get latest 3 posts

  if (posts.length === 0) return null;

  return (
    <section className="py-24 md:py-32 relative overflow-hidden border-t border-white/5 bg-[#020202]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-white">Latest Insights</h2>
            <p className="text-muted-foreground text-lg">
              Eksplorasi wawasan teknikal, studi kasus, dan tren teknologi terkini untuk membantu transformasi digital bisnis Anda.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-semibold transition-colors group">
            Lihat Semua Artikel
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-500 shadow-lg hover:shadow-yellow-500/5">
              {post.coverImage ? (
                <div className="aspect-[16/9] w-full bg-white/5 relative overflow-hidden">
                  <Image 
                    src={post.coverImage} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-80" />
                </div>
              ) : (
                <div className="aspect-[16/9] w-full bg-gradient-to-br from-yellow-900/20 to-slate-900/40 flex items-center justify-center border-b border-white/10 relative">
                  <span className="font-bold text-white/30 text-xl tracking-widest uppercase relative z-10">INSIGHT</span>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent" />
                </div>
              )}
              
              <div className="p-6 flex flex-col flex-1 relative z-10">
                <div className="flex items-center gap-2 text-xs text-white/40 mb-4 font-mono uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-yellow-500/70" />
                  <span>{new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-white/90 mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2 leading-snug">
                  {post.title}
                </h3>
                
                <p className="text-white/50 text-sm line-clamp-3 mb-8 flex-1 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-sm font-bold text-yellow-500/80 group-hover:text-yellow-400 mt-auto transition-colors uppercase tracking-wider">
                  Baca Artikel
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
