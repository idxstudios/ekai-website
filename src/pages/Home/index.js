import "../../App.css";
import { EkaiIntro } from "../../components/EkaiIntro";
import OurMission from "../../components/OurMission";
import ElevateYourWorkflow from "../../components/ElevateYourWorkflow";
import Benefits from "../../components/Benefits";
import DataSecurity from "../../components/DataSecurity";
import Team from "../../components/TeamMember";
import PromoBanner from "../../components/PromoBanner";
import Footer from "../../components/Footer";
import TransitionDesign from "../../components/AnimationImage/"
// import Integration from "../../components/SeeHowItWorks";

import { useState, useRef, useEffect } from "react";
import TechnologyPartner from "../../components/TechnologyPartner";


// import FAQs from "../../components/FAQs";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  console.log(isVisible)
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
    <div className="">
      <EkaiIntro />
      <OurMission />
      <ElevateYourWorkflow />
      <Benefits />
      {/* <div ref={sectionRef}>
        {isVisible && <Integration />}
      </div> */}
      <TransitionDesign/>
      <DataSecurity />
      <TechnologyPartner/>
      <Team />
      <PromoBanner />
      {/* <FAQs/> */}
      <Footer />
    </div>
  );
}

export default Home;
