import GlobalNavbar from "./components/GlobalNavbar";
import Career from "./pages/Career";
import FAQ from "./pages/fAQs";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TermsOfUse from "./pages/TermsUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalNavbar />} >       
          <Route index element={<Home />} />
          {/* <Route path="/career" element={<Career />} /> */}
          <Route path="/FAQs" element={<FAQ />} />
          <Route path="/termsOfUse" element={<TermsOfUse/>} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy/>} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
