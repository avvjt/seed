
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
import LogoCloud from "@/components/logo-cloud";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import StatsSection from "@/components/stats";
import WallOfLoveSection from "@/components/testimonials";
import { TimelineDemo } from "@/components/TimelineDemo";


export default function Home() {
  return (
    <>
      <HeroSection />
      <MacbookScrollDemo/>
      <AuroraBackgroundDemo/>
      <LogoCloud/>
      <TimelineDemo/>
      <StatsSection />
      <IntegrationsSection />
      <WallOfLoveSection />
      <FooterSection />
    </>
  );
}
