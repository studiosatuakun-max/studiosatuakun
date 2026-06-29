import { Hero } from "@/components/home/hero";
import { Metrics } from "@/components/home/metrics";
import { Trust } from "@/components/home/trust";
import { Services } from "@/components/home/services";
import { FeaturedPortfolio } from "@/components/home/featured-portfolio";
import { Process } from "@/components/home/process";
import { LatestInsights } from "@/components/home/latest-insights";
import { CTA } from "@/components/home/cta";
import { AiChatSection } from "@/components/home/ai-chat-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Metrics />
      <Trust />
      <Services />
      <AiChatSection />
      <FeaturedPortfolio />
      <Process />
      <LatestInsights />
      <CTA />
    </>
  );
}
