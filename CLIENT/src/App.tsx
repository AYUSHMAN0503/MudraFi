import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarDefault } from "./Components/Navbar";
import Footer from "./Components/Footer";
import TermsOfService from "./Components/TermsOfService";
import PrivacyPolicy from "./Components/Privacy Policy";
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
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
