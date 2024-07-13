import "../../App.css";
import { EkaiIntro } from "../../components/EkaiIntro";
import OurMission from "../../components/OurMission";
import ElevateYourWorkflow from "../../components/ElevateYourWorkflow";
import Benefits from "../../components/Benefits";
import DataSecurity from "../../components/DataSecurity";
import Team from "../../components/TeamMember";
import PromoBanner from "../../components/PromoBanner";
import Footer from "../../components/Footer";
import Integration from "../../components/SeeHowItWorks";
// import FAQs from "../../components/FAQs";

function Home() {
  return (
    <div className="">
      <EkaiIntro />
    
      <OurMission />
      <ElevateYourWorkflow />
      <Benefits />
      <Integration />
      <DataSecurity />
      <Team />
      <PromoBanner />
      {/* <FAQs/> */}
      <Footer />
    </div>
  );
}

export default Home;
