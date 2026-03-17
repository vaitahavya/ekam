import { HeroSection } from "@/components/HeroSection";
import { IdeaSection } from "@/components/IdeaSection";
import { ProcessFlow } from "@/components/ProcessFlow";
import { ProjectSnapshot } from "@/components/ProjectSnapshot";
import { PreLaunchPricing } from "@/components/PreLaunchPricing";
import { RevenueChart } from "@/components/RevenueChart";
import { FeatureCards } from "@/components/FeatureCards";
import { DemandDrivers } from "@/components/DemandDrivers";
import { ExitStrategy } from "@/components/ExitStrategy";
import { FounderTrust } from "@/components/FounderTrust";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-w-0 w-full overflow-x-hidden">
      <HeroSection />
      <IdeaSection />
      <ProcessFlow />
      <ProjectSnapshot />
      <FeatureCards />
      <DemandDrivers />
      <PreLaunchPricing />
      <RevenueChart />
      <ExitStrategy />
      <FounderTrust />
      <CTASection />
      <Footer />
    </main>
  );
}
