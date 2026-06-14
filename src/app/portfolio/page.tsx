import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { CTA } from "@/components/home/cta";

export const metadata = {
  title: "Portfolio | Studio Satu Akun",
  description: "Lihat hasil karya digital terbaik kami dari berbagai industri.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Selected Works</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Kami telah membantu berbagai startup dan perusahaan bertransformasi secara digital. Berikut adalah beberapa project pilihan kami.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-8">
          <PortfolioGrid />
        </div>
      </section>

      <CTA />
    </>
  );
}
