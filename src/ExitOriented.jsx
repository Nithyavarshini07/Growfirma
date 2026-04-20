import "./MVPFirst.css";
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

  const navConfig = [
  { src: "/assets/fund.png", path: "/fundraising-first" },
  { src: "/assets/register.png", path: "/register-first" },
  { src: "/assets/community.png", path: "/community-sidehustle" },
  { src: "/assets/side.png", path: "/side-hustle" },
  { src: "/assets/mvp.png", path: "/mvp-first" },
  { src: "/assets/exit.png", path: "/exit-oriented" },
  { src: "/assets/revenue.png", path: "/revenue-first" },
  { src: "/assets/corporate.png", path: "/corporate" },
  { src: "/assets/grant.png", path: "/grant" },
  { src: "/assets/accelerator.png", path: "/accelerator" },
  { src: "/assets/others.png", path: "/others" },
];

  return (
    <div className="mvp-page-root">
      <div className="mvp-container">

        <div className="side-icons">
  {navConfig.map((item, index) => {
    // Check if the current URL matches the item path
    const isActive = location.pathname === item.path;

    return (
      <img
        key={index}
        src={item.src}
        alt="nav-icon"
        className={`${isActive ? "active-icon" : ""} clickable`}
        onClick={() => navigate(item.path)}
      />
    );
  })}
</div>

        {/* STEPS */}
        <div className="mvp-nav">
          <div className="mvp-steps">
            <span className="active clickable" onClick={() => navigate("/scenario")}>
              <i>Scenario Selection</i>
            </span>
            <span><i>Company Profile</i></span>
            <span><i>Goals & Needs</i></span>
          </div>
        </div>

        {/* MAIN */}
        <div className="mvp-main">

          {/* LEFT */}
          <div className="mvp-left">

            <h2><i>Exit Oriented</i></h2>

            <p className="desc">
              Build with a clear structure and scalability to attract potential buyers.
              Position your product and operations for a smooth acquisition or buyout.
            </p>

            <div className="timeline">

              {/* CARD 1 */}
              <div className="mvp-card highlight">
                <div className="mvp-box multi-section-card">

                  <img src="/assets/law.png" className="card-icon" />

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

              {/* CARD 2 */}
              <div className="mvp-card blue">
                <div className="mvp-box blue-box multi-section-card">

                  <img src="/assets/mvp.png" className="card-icon" />

                  <div className="section-group">
                    <div className="title-with-icon">
                      <img src="/assets/mvp1.png" className="box-icon" />
                      <h3>MVP Development</h3>
                    </div>
                    <ul className="card-sublist">
                      <li>impacts valuation</li>
                    </ul>
                  </div>

                  <div className="section-group">
                    <div className="title-with-icon">
                      <img src="/assets/hr1.png" className="box-icon" />
                      <h3>HR / Talent</h3>
                    </div>
                    <ul className="card-sublist">
                      <li>strong team increases value</li>
                    </ul>
                  </div>

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

              {/* CARD 3 */}
              <div className="mvp-card optional">
                <div className="mvp-box multi-section-card">

                  <img src="/assets/service.png" className="card-icon" />

                  <h3 className="card-title">Optional Services</h3>

                  <ul className="card-sublist">
                    <li>Idea validation – not needed here</li>
                    <li>extra services only if required</li>
                  </ul>

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
                Based on acquisition readiness and market positioning
              </p>
            </div>

            <div className="info-box">
              <div className="info-title">
                <img src="/assets/what.png" className="box-icon" />
                <h4>What is this?</h4>
              </div>

              <p>founders who want to build a company with a future exit in mind,
starting from day one.</p>

<p>Even if your company is not registered yet, the goal is clear:
structure first, scale later.</p>
            </div>

            <div className="info-box">
              <div className="info-title">
                <img src="/assets/whatfor.png" className="box-icon" />
                <h4>Who is this for?</h4>
              </div>
              <ul className="tick-list">
                <li>Founders planning exit</li>
                <li>Corporate spin-offs</li>
                <li>Acquisition-driven startups</li>
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
    </div>
  );
}

export default ExitOriented;