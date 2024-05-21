import "./App.css";
import { EkaiIntro } from "./components/EkaiIntro";
import { WhyEkai } from "./components/WhyEkai";
import ActionVedio from "./components/ActionVedio";
import EkaiWorkflowComponent from "./components/EkaiWorkflowComponent";
import EkaiSecurityFocus from "./components/EkaiSecurityFocus";

function App() {
  return (
    <div className="app">
      <EkaiIntro />
      <WhyEkai />
      <EkaiWorkflowComponent />
      <ActionVedio />
      <EkaiSecurityFocus />
    </div>
  );
}

export default App;
