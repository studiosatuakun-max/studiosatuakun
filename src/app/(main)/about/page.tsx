export const metadata = {
  title: "About Us | Studio Satu Akun",
  description: "Learn more about Studio Satu Akun and our mission.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
      
      <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 text-gradient">About Us</h1>
      <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8 leading-relaxed">
        We are a premium software development studio focused on crafting high-performance digital products that drive exponential growth for businesses.
      </p>
      <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
        Full page content is being crafted...
      </div>
    </div>
  );
}
