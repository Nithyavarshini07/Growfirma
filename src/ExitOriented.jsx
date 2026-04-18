import "./RegisterFirst.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ExitOriented() {
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled =
        (window.scrollY + window.innerHeight) /
        document.body.scrollHeight;

      setShowNext(scrolled > 0.8);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const icons = [
    "/assets/fund.png",
    "/assets/register.png",
    "/assets/community.png",
    "/assets/side.png",
    "/assets/mvp.png",
    "/assets/exit.png",
    "/assets/revenue.png",
    "/assets/corporate.png",
    "/assets/grant.png",
    "/assets/accelerator.png",
    "/assets/others.png",
  ];

  return (
    <div className="rf-container">

      {/* SIDEBAR */}
      <div className="side-icons">
        {icons.map((icon, index) => {
          const isActive = index === 5; // EXIT ICON
          return (
            <img
              key={index}
              src={icon}
              alt=""
              className={isActive ? "active-icon" : ""}
            />
          );
        })}
      </div>

<div className="steps">
  <span
    className="active clickable"
    onClick={() => navigate("/scenario")}
  >
    Scenario Selection
  </span>

  <span>Company Profile</span>
  <span>Goals & Needs</span>
</div>

      {/* MAIN */}
      <div className="rf-main">

        {/* LEFT */}
        <div className="rf-left">
          <h2>Exit oriented</h2>
          <p className="desc">
            Build with a clear structure and scalability to attract potential buyers.
            Position your product and operations for a smooth acquisition or buyout.
          </p>

          <div className="timeline">

            {/* GREEN CARD */}
            {/* CARD 1 - LAW / TAX / COMPANY (REGISTER STYLE) */}
<div className="rf-card highlight">
  <div className="inner-box multi-section-card">

    <img src="/assets/law.png" className="card-icon" />

    {/* LAW */}
    <div className="section-group">
      <div className="title-with-icon">
        <img src="/assets/law2.png" className="box-icon" />
        <h3>Law</h3>
      </div>
      <ul className="card-sublist">
        <li>clean company structure</li>
        <li>clear ownership & responsibilities</li>
        <li>contracts buyers expect</li>
      </ul>
    </div>

    {/* TAX */}
    <div className="section-group">
      <div className="title-with-icon">
        <img src="/assets/tax2.png" className="box-icon" />
        <h3>Tax</h3>
      </div>
      <ul className="card-sublist">
        <li>compliant accounting</li>
        <li>transparent financial records</li>
      </ul>
    </div>

    {/* COMPANY */}
    <div className="section-group">
      <div className="title-with-icon">
        <img src="/assets/company2.png" className="box-icon" />
        <h3>Company Registration</h3>
      </div>
      <ul className="card-sublist">
        <li>own assets legally</li>
        <li>enter contracts</li>
        <li>acquisition-ready structure</li>
      </ul>
    </div>

    <div className="importance-pod">
      <span className="label">Importance</span>
      <span className="value high">High</span>
    </div>

  </div>
</div>

            {/* BLUE CARD */}
           <div className="rf-card">
  <div className="inner-box blue-box multi-section-card">

    <img src="/assets/mvp.png" className="card-icon" />

    {/* MVP */}
    <div className="section-group">
      <div className="title-with-icon">
        <img src="/assets/mvp1.png" className="box-icon" />
        <h3>MVP Development</h3>
      </div>
      <ul className="card-sublist">
        <li>impacts valuation</li>
      </ul>
    </div>

    {/* HR */}
    <div className="section-group">
      <div className="title-with-icon">
        <img src="/assets/hr1.png" className="box-icon" />
        <h3>HR / Talent</h3>
      </div>
      <ul className="card-sublist">
        <li>strong team increases value</li>
      </ul>
    </div>

    {/* SOCIAL */}
    <div className="section-group">
      <div className="title-with-icon">
        <img src="/assets/social1.png" className="box-icon" />
        <h3>Social Media Marketing</h3>
      </div>
      <ul className="card-sublist">
        <li>brand presence</li>
        <li>credibility building</li>
      </ul>
    </div>

    {/* EVENTS */}
    <div className="section-group">
      <div className="title-with-icon">
        <img src="/assets/event1.png" className="box-icon" />
        <h3>Events</h3>
      </div>
      <ul className="card-sublist">
        <li>networking</li>
        <li>partnerships</li>
      </ul>
    </div>

    <div className="importance-pod">
      <span className="label">Importance</span>
      <span className="value mid">Moderate</span>
    </div>

  </div>
</div>
            {/* ORANGE CARD */}
 <div className="rf-card optional">
  <div className="inner-box multi-section-card">

    <img src="/assets/service.png" className="card-icon" />

    <div className="section-group">
      <div className="title-with-icon">
        <h3>Optional Services</h3>
      </div>

      <ul className="card-sublist">
        <li>Idea validation – not needed here</li>
        <li>extra services only if required</li>
      </ul>
    </div>

    <div className="importance-pod">
      <span className="label">Importance</span>
      <span className="value low">Least</span>
    </div>

  </div>
</div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="rf-right">

          <div className="success-box">
            <h4 className="sp-title"><i><u>SUCCESS PREDICTION</u></i></h4>
            <div className="progress-circle">
              <span>89%</span>
            </div>
            <p className="sp-desc">
              Based on the current market volatility and your historical portfolio performance
            </p>
          </div>

          <div className="info-box">
            <div className="info-title">
              <img src="/assets/what.png" className="box-icon" />
              <h4>What is this?</h4>
            </div>

            <p>
              This scenario is for founders who want to build a company with a future exit in mind.
            </p>
            <p>
              Even if your company is not registered yet, the goal is clear: structure first, scale later.
            </p>
          </div>

          <div className="info-box">
            <div className="info-title">
              <img src="/assets/whatfor.png" className="box-icon" />
              <h4>Who is this for?</h4>
            </div>

            <ul className="tick-list">
              <li>Founders planning acquisition or merger</li>
              <li>Corporate spin-offs</li>
              <li>Entrepreneurs building long-term value</li>
            </ul>
          </div>

          <img src="/assets/blank.png" className="info-img" />

          {showNext && (
            <div className="next-floating">
              <button className="next-btn">
                Next
                <img src="/assets/next.png" className="next-icon" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default ExitOriented;