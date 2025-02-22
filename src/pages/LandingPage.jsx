import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="content">
        <h1 className="animated-text">Auctronix</h1>
        <p className="tagline">The Future of Smart Bidding</p>

        <div className="features">
          <p>✔️ Real-Time Bidding & Live Auctions</p>
          <p>✔️ AI-Powered Price Insights</p>
          <p>✔️ 100% Secure Transactions</p>
          <p>✔️ Tailored Dashboards for Users</p>
        </div>

        <button className="cta-button" onClick={() => navigate("/signup")}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
