import "./ScenarioSelection.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function ScenarioSelection() {
  const cards = [
    { title: "Fundraising First", desc: "Optimized for rapid scale and VC Management", icon: "/assets/fund.png" },
    { title: "Register First", desc: "Focus on the legal compliance and foundational setup", icon: "/assets/register.png" },
    { title: "Community/Opensource", desc: "Collaborative builds and decentralised governance", icon: "/assets/community.png" },
    { title: "Side - hustle", desc: "Lean operations while managing other priorities", icon: "/assets/side.png" },
    { title: "MVP First", desc: "Product-led growth with rapid iterative cycles.", icon: "/assets/mvp.png" },
    { title: "Exit -Oriented", desc: "Designed for eventual acquisition or buyout.", icon: "/assets/exit.png" },
    { title: "Revenue First", desc: "Prioritizing profitability and sustainable growth.", icon: "/assets/revenue.png" },
    { title: "Corporate spin off", desc: "Structured enterprise scaling from established firms.", icon: "/assets/corporate.png" },
    { title: "Grant funded", desc: "Non-dilutive grant support", icon: "/assets/grant.png" },
    { title: "Accelerator Path", desc: "Mentorship-led rapid scaling", icon: "/assets/accelerator.png" },
    { title: "Others", desc: "Alternative startup paths", icon: "/assets/others.png" }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const goBackToLogin = () => {
    navigate("/login");
  };

const handleContinue = () => {
  if (selectedIndex === null) {
    alert("Please select a scenario");
    return;
  }

  const title = cards[selectedIndex].title;

  if (title === "Register First") navigate("/register-first");
  else if (title === "MVP First") navigate("/mvp-first");
  else if (title === "Exit -Oriented") navigate("/exit-oriented");
  else if (title === "Revenue First") navigate("/revenue-first");
  else if (title === "Side - hustle") navigate("/side-hustle");
  else {
    alert("Page not built yet for this scenario");
  }
};

  return (
    <div className="scenario-wrapper">

      {/* NAV */}
      <div className="scenario-nav">
        <div className="logo">
          <img src="/assets/logo.png" alt="logo" />
        </div>

        <div className="steps">
          <span className="active">Scenario Selection</span>
          <span onClick={() => navigate("/company-profile")}>
  Company Profile
</span>
          <span>Goals & Needs</span>
        </div>
      </div>

      {/* MAIN */}
      <div className="scenario-box">

        <h2>Select Your Path</h2>

        <p className="desc">
          Every greatest venture starts with a clear direction. Choose the scenario that
          best describes your current journey to customize your fintech experience.
        </p>

        {/* GRID */}
        <div className="scenario-grid">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`scenario-card ${selectedIndex === i ? "selected" : ""}`}
              onClick={() => setSelectedIndex(i)}
            >
              {/* ICON */}
              <div className="icon-box">
                <img
                  className={selectedIndex === i ? "active-icon" : ""}
                  src={card.icon}
                  alt={card.title}
                />
              </div>

              {/* TEXT */}
              <h3>{card.title}</h3>
              <p>{card.desc}</p>

              {/* TICK */}
              {selectedIndex === i && (
                <div className="tick">
                  <img src="/assets/tick.png" alt="tick" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="scenario-actions">
          <button className="back-btn" onClick={goBackToLogin}>
            Back
          </button>

          <button className="continue-btn" onClick={handleContinue}>
            Continue
          </button>
        </div>

      </div>
    </div>
  );
}

export default ScenarioSelection;