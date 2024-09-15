import "../../App.css";
import { EkaiIntro } from "../../components/EkaiIntro";
import OurMission from "../../components/OurMission";
import ElevateYourWorkflow from "../../components/ElevateYourWorkflow";
// import Benefits from "../../components/Benefits";
import DataSecurity from "../../components/DataSecurity";
// import Team from "../../components/TeamMember";
import PromoBanner from "../../components/PromoBanner";
import Footer from "../../components/Footer";
// import TransitionDesign from "../../components/AnimationImage/"
// import Integration from "../../components/SeeHowItWorks";

import { useState, useRef, useEffect } from "react";
import TechnologyPartner from "../../components/TechnologyPartner";
import EnhancingProductivity from "../../components/EnhancingProductivity";
import Pricing from "../../components/Pricing";
// import { WhyEkai } from "../../components/WhyEkai";
import WhyEkaiFlow from "../../components/whyEkaiFlow";
import StickyAnimation from "../../components/StickyAnimation";
import { Helmet } from "react-helmet-async";

// import FAQs from "../../components/FAQs";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  console.log(isVisible);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once section is in view
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef?.current);
      }
    };
  }, []);

  return (
    <>
    <Helmet>
      <title>ekai</title>
      <meta name="description" content="Ekai - Revolutionize your workflow with AI automation. Save time and focus on what truly matters by eliminating repetitive tasks and interruptions." />
      <link rel="canonical" href="https://www.ekai.ca" />
      <meta property="og:title" content="AI {YOU} for matters that don’t need real YOU" />
      <meta property="og:description"
        content="Ekai streamlines hybrid work tasks through secure AI technology, enabling your team to concentrate on their core responsibilities as AI manages documentation, coordination, and scheduling efficiently." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ekai.ca" />
      <meta property="og:image" content="%PUBLIC_URL%/ekai-og-bg.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <meta property="og:site_name" content="Ekai" />
    </Helmet>
    <div className="">
      <EkaiIntro />
      <OurMission />
      <div className="StickyAnimationHome">  
        <StickyAnimation/>
      </div>
      {/* <ElevateYourWorkflow /> */}
      <div className="ElevateYourWorkflowHome">
          <ElevateYourWorkflow />
      </div>
      {/* <WhyEkai /> */}
      <WhyEkaiFlow />
      <EnhancingProductivity />
      {/* <Benefits /> */}
      {/* <div ref={sectionRef}>
        {isVisible && <Integration />}
      </div> */}
      {/* <TransitionDesign/> */}
      <DataSecurity />
      <Pricing />
      <TechnologyPartner />
      {/* <Team /> */}
      <PromoBanner />
      {/* <FAQs/> */}
      <Footer />
    </div>
    </>
  );
}

export default Home;
