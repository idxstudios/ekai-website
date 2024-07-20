import "../../App.css";
import ActionVedio from "../../components/ActionVedio";
import EkaiWorkflowComponent from "../../components/EkaiWorkflowComponent";
import { EkaiIntro } from "../../components/EkaiIntro";
import { ImpactOfEkai } from "../../components/ImpactOfEkai";
import { WhyEkai } from "../../components/WhyEkai";
import EkaiSecurityFocus from "../../components/EkaiSecurityFocus";
import Footer from "../../components/Footer";


function Home() {
  return (
    <div className="Home">
      <EkaiIntro />
      <WhyEkai />
      <ImpactOfEkai />
      <EkaiWorkflowComponent />
      <ActionVedio />
      <EkaiSecurityFocus />
      <Footer/>
    </div>
  );
}

export default Home;
