import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog & Insights | Studio Satu Akun",
  description: "Artikel terbaru seputar teknologi web, aplikasi mobile, AI automation, dan strategi digital marketing.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-gradient">Blog & Insights</h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Eksplorasi wawasan teknikal, studi kasus, dan tren teknologi terkini untuk membantu bisnis Anda bertumbuh.
          </p>
        </div>
      </section>

      <section className="py-12 flex-1 container mx-auto px-4 max-w-4xl">
        {posts.length === 0 ? (
          <div className="text-center py-20 border border-dashed border-white/20 rounded-2xl bg-white/5">
            <h3 className="text-xl font-bold mb-2">Belum ada artikel</h3>
            <p className="text-muted-foreground">Kami sedang menyiapkan artikel pertama kami. Pantau terus!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug} className="group flex flex-col bg-[#0c0c0c] border border-white/10 rounded-2xl overflow-hidden hover:border-yellow-500/50 transition-all duration-300 shadow-lg hover:shadow-yellow-500/10">
                {post.coverImage ? (
                  <div className="aspect-[16/9] w-full bg-white/5 relative overflow-hidden">
                    <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="aspect-[16/9] w-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center border-b border-white/10">
                    <span className="font-bold text-white/30 text-2xl tracking-widest uppercase">INSIGHT</span>
                  </div>
                )}
                
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs text-white/40 mb-3 font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{new Date(post.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white/90 mb-3 group-hover:text-yellow-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm font-bold text-blue-400 group-hover:text-yellow-400 mt-auto transition-colors">
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
