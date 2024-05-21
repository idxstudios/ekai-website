import "./App.css";
import { EkaiIntro } from "./components/EkaiIntro";
import { ImpactOfEkai } from "./components/ImpactOfEkai";
import { WhyEkai } from "./components/WhyEkai";

function App() {
  return (
    <div className="app">
      <EkaiIntro />
      <WhyEkai />
      <ImpactOfEkai />
    </div>
  );
}

export default App;
