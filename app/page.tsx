import FAQsTwo from "@/components/faqs-2";
import FeaturesCard from "@/components/features-11";
import Features from "@/components/features-12";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import IntegrationsSection from "@/components/integrations-7";
import LogoCloud from "@/components/logo-cloud";
import StatsSection from "@/components/stats";
import TeamSection from "@/components/team";
import WallOfLoveSection from "@/components/testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <HeroSection />
    <LogoCloud />
    <Features/>
    <FeaturesCard/>
    <IntegrationsSection/>
    <StatsSection/>
    <TeamSection/>
    <WallOfLoveSection/>
    <FAQsTwo/>
    <FooterSection/>
    </>
  );
}
