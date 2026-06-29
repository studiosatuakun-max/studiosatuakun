import { Hero } from "@/components/home/hero";
import { Trust } from "@/components/home/trust";
import { Services } from "@/components/home/services";
import { FeaturedPortfolio } from "@/components/home/featured-portfolio";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <FeaturedPortfolio />
      <CTA />
    </>
  );
}
