import "./App.css";
import GlobalNavbar from "./components/GlobalNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TermsOfUse from "./pages/TermsUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import FAQs from "./pages/FAQs";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalNavbar />} >
            <Route index element={<Home />} />
            <Route path="/FAQs" element={<FAQs />} />
            <Route path="/termsOfUse" element={<TermsOfUse />} />
            <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
