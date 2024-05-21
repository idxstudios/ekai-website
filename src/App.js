import "./App.css";
import { EkaiIntro } from "./components/EkaiIntro";
import { WhyEkai } from "./components/WhyEkai";
import ActionVedio from "./components/ActionVedio";

function App() {
  return (
    <div className="app">
      <EkaiIntro />
      <WhyEkai />
      <ActionVedio />
    </div>
  );
}

export default App;
