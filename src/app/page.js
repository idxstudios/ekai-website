import Footer from "@/components/Footer/footer";
import Pricing from "@/components/pricing/Pricing";
import PromoBanner from "@/components/promo/PromoBanner";
import Section1 from "@/components/section1/Section1";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/section3/Section3";
import Section4 from "@/components/section4/Section4";
import Section5 from "@/components/section5/Section5";
import Section6 from "@/components/section6/Section6";
import Section7 from "@/components/section7/Section7";
import TechnologyPartner from "@/components/technologypartner/TechnologyPartner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      <div className="StickyAnimationHome">
        <Section3 />
      </div>
      <div className="ElevateYourWorkflowHome">
        <Section4 />
      </div>

      <Section5 />
      <Section6 />
      <Section7 />
      <div id="pricing">
        <Pricing />
      </div>

      <TechnologyPartner />
      <PromoBanner />
    </div>
  );
}
