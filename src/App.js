import "./App.css";
import { EkaiIntro } from "./components/EkaiIntro";
import { ImpactOfEkai } from "./components/ImpactOfEkai";
import { WhyEkai } from "./components/WhyEkai";
import ActionVedio from "./components/ActionVedio";
import EkaiWorkflowComponent from "./components/EkaiWorkflowComponent";
import EkaiSecurityFocus from "./components/EkaiSecurityFocus";

function App() {
  return (
    <div className="app">
      <EkaiIntro />
      <WhyEkai />
      <ImpactOfEkai />
      <EkaiWorkflowComponent />
      <ActionVedio />
      <EkaiSecurityFocus />
    </div>
  );
}

export default App;
