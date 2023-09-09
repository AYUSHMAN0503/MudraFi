import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarDefault } from "./Components/Navbar";
import Footer from "./Components/Footer";
import TermsOfService from "./Components/TermsOfService";
import PrivacyPolicy from "./Components/Privacy Policy";
import AboutUs from "./Components/AboutUs";

import Home from "./Components/Home";

const App = () => {
  return (
    <div>
      <Router>
        <div className="pb-20">
          <NavbarDefault />
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
