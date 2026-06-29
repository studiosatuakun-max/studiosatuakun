import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog";

export function LatestInsights() {
  const posts = getAllBlogPosts().slice(0, 4); // Get latest 4 posts for a solid list

  if (posts.length === 0) return null;

  return (
    <section className="py-24 md:py-32 relative bg-background border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-8 max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-4">Latest Insights.</h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Perspektif teknikal dan studi kasus terbaru dari tim engineering kami.
            </p>
          </div>
          <Link href="/blog" className="inline-flex items-center text-foreground hover:text-slate-300 font-bold transition-colors uppercase tracking-widest text-xs border-b border-foreground pb-1">
            Lihat Semua Artikel
          </Link>
        </div>

        <div className="flex flex-col">
          {posts.map((post) => (
            <Link 
              href={`/blog/${post.slug}`} 
              key={post.slug} 
              className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-t border-slate-800 hover:bg-slate-900/30 transition-colors -mx-4 px-4 sm:mx-0 sm:px-6 rounded-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-16">
                <span className="text-xs md:text-sm font-mono text-slate-500 min-w-[120px] uppercase tracking-widest">
                  {new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-slate-300 transition-colors tracking-tight">
                  {post.title}
                </h3>
              </div>
              <div className="mt-6 md:mt-0 flex shrink-0">
                <div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </Link>
          ))}
          {/* Bottom border for the last item */}
          <div className="border-t border-slate-800 w-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}
