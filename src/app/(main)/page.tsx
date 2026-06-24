import { Hero } from "@/components/home/hero";
import { Trust } from "@/components/home/trust";
import { Services } from "@/components/home/services";
import { FeaturedPortfolio } from "@/components/home/featured-portfolio";
import { Process } from "@/components/home/process";
import { LatestInsights } from "@/components/home/latest-insights";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <FeaturedPortfolio />
      <Process />
      <LatestInsights />
      <CTA />
    </>
  );
}
