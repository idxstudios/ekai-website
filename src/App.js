import GlobalNavbar from "./components/GlobalNavbar";
import Career from "./pages/Career";
import FAQ from "./pages/fAQs";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GlobalNavbar />} >       
          <Route index element={<Home />} />
          <Route path="/career" element={<Career />} />
          <Route path="/FAQs" element={<FAQ />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
