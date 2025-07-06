// import FAQsTwo from "@/components/faqs-2";
import FooterSection from "@/components/footer";
import { LampDemo } from "@/components/LampDemo";
import PricingComparator from "@/components/pricing-comparator";
import SomeFaq from "@/components/SomeFaq";
import Testimonials from "@/components/testimonials";

// import TeamSection from "@/components/team";
// import WallOfLoveSection from "@/components/testimonials";

export default function Pricing() {
  return (
    <>
    {/* <Pricing/> */}
    <PricingComparator/>
    <LampDemo/>
    <Testimonials/>
    <SomeFaq/>
    <FooterSection/>
    </>
  );
}
