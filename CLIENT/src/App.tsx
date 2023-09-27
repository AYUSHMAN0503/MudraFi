import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NavbarDefault } from "./Components/Navbar";
import TermsOfService from "./Components/footer/TermsOfService";
import PrivacyPolicy from "./Components/footer/Privacy Policy";
import AboutUs from "./Components/footer/AboutUs";
import ReviewPage from "./Components/footer/ReviewPage";
import SwapInterface from "./Components/swap/SwapInterface";
import Home from "./Components/Home";
import Bottom from "./Components/Bottom";
import Tokens from "./Components/Tokens";
import LiquidityPool from "./Components/Pool/PoolHome";
import { Pool } from "./Components/Pool/PoolPage";
import AiDashboard from "./Components/AI Analytics/AiDashboard";
const App = () => {
  return (
    <div >
      <Router>
        <div className="pb-20">
          <NavbarDefault />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/termsofservice" element={<TermsOfService />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ReviewPage" element={<ReviewPage />} />
          <Route path="/SwapInterface" element={<SwapInterface />} />
          <Route path="/Pool" element={<LiquidityPool/>} />
          <Route path="/Pools" element={<Pool/>} />
          <Route path="/tokens" element={<Tokens />} />
          <Route path="/AiDashboard" element={<AiDashboard/>} />
        </Routes>
       <Bottom/>
      </Router>
    </div>
  );
};

export default App;
