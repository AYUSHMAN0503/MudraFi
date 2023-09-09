import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarDefault } from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import TermsOfService from "./Components/TermsOfService";
import PrivacyPolicy from "./Components/Privacy Policy";
import Cards from "./Components/Cards";
const App = () => {
  return (
    <div>
      <Router>
        <div className="pb-20">
          <NavbarDefault />
        </div>

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
