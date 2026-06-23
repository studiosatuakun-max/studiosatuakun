import { Services as ServicesGrid } from "@/components/home/services";
import { CTA } from "@/components/home/cta";

export const metadata = {
  title: "Services | Studio Satu Akun",
  description: "Layanan pengembangan produk digital kami.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 sm:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Layanan Kami</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Kami menyediakan solusi end-to-end untuk kebutuhan digitalisasi bisnis Anda. Dari ideasi hingga deployment.
          </p>
        </div>
      </section>

      <ServicesGrid />

      <CTA />
    </>
  );
}
