import "./ScenarioSelection.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function ScenarioSelection() {
  const cards = [
    { title: "Fundraising First", desc: "Optimized for rapid scale and VC Management" },
    { title: "Register First", desc: "Focus on the legal compliance and foundational setup" },
    { title: "Community/Opensource", desc: "Collaborative builds and decentralised governance" },
    { title: "Side - hustle", desc: "Lean operations while managing other priorities" },
    { title: "MVP First", desc: "Product-led growth with rapid iterative cycles." },
    { title: "Exit -Oriented", desc: "Designed for eventual acquisition or buyout." },
    { title: "Revenue First", desc: "Prioritizing profitability and sustainable growth." },
    { title: "Corporate spin off", desc: "Structured enterprise scaling from established firms." },
    { title: "Grant funded", desc: "Non-dilutive grant support" },
    { title: "Accelerator Path", desc: "Mentorship-led rapid scaling" },
    { title: "Others", desc: "Alternative startup paths" }
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

const goBackToLogin = () => {
  navigate("/login");
};

  return (
    <div className="scenario-wrapper">

      {/* TOP NAV */}
      <div className="scenario-nav">
       <div className="logo">
          <img src="/assets/logo.png" alt="logo" />
        </div>

        <div className="steps">
          <span className="active">Scenario Selection</span>
          <span>Company Profile</span>
          <span>Goals & Needs</span>
        </div>
      </div>

      {/* MAIN BOX */}
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
              className={`scenario-card ${hoveredIndex === i ? "selected" : ""}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              {hoveredIndex === i && <div className="tick">✔</div>}
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="scenario-actions">
          <button className="back-btn" onClick={goBackToLogin}>
           Back
           </button>
          <button className="continue-btn">Continue</button>
        </div>

      </div>
    </div>
  );
}

export default ScenarioSelection;