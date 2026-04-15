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

      {/* NAV */}
      <div className="rf-nav">
        <div className="logo">
          <img src="/assets/logo.png" />
        </div>

        <div className="steps">
          <span onClick={() => navigate("/scenario")} className="clickable">
            Scenario Selection
          </span>
          <span className="active">Company Profile</span>
          <span>Goals & Needs</span>
        </div>
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
            <div className="rf-card highlight">
              <div className="inner-box">
                <img src="/assets/law.png" className="card-icon" />

                <h3>Law</h3>
                <ul className="card-list">
                  <li>clean company structure</li>
                  <li>clear ownership and responsibilities</li>
                  <li>contracts and compliance buyers expect</li>
                </ul>

                <h3 className="sub-heading">Tax</h3>
                <ul className="card-list">
                  <li>compliant accounting</li>
                  <li>transparent financial records</li>
                  <li>long-term tax structure</li>
                </ul>

                <h3 className="sub-heading">Company Registration</h3>
                <ul className="card-list">
                  <li>own assets</li>
                  <li>enter contracts</li>
                  <li>be acquisition-ready later</li>
                </ul>
              </div>

              <span className="tag high">High</span>
            </div>

            {/* BLUE CARD */}
            <div className="rf-card">
              <div className="inner-box blue-box">
                <img src="/assets/mvp.png" className="card-icon" />

                <h3>MVP Development</h3>
                <ul className="card-sublist">
                  <li>product or tech impacts valuation</li>
                </ul>

                <h3 className="sub-heading">HR/Talent</h3>
                <ul className="card-sublist">
                  <li>build strong team</li>
                  <li>key roles increase company value</li>
                </ul>

                <h3 className="sub-heading">Social Media Marketing</h3>
                <ul className="card-sublist">
                  <li>positioning & credibility</li>
                  <li>brand presence</li>
                </ul>

                <h3 className="sub-heading">Events</h3>
                <ul className="card-sublist">
                  <li>corporate networking</li>
                  <li>strategic partnerships</li>
                </ul>
              </div>

              <span className="tag mid">Moderate</span>
            </div>

            {/* ORANGE CARD */}
            <div className="rf-card optional">
              <div className="inner-box">
                <img src="/assets/service.png" className="card-icon" />

                <h3>Optional Services</h3>
                <ul className="card-sublist">
                  <li>Idea Validation – usually not needed</li>
                </ul>
              </div>

              <span className="tag low">Least</span>
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