import "./MVPFirst.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RevenueFirst() {
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
    <div className="mvp-page-root">
      <div className="mvp-container">

        {/* SIDEBAR */}
        <div className="side-icons">
          {icons.map((icon, index) => {
            const isActive = index === 6; // revenue
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
        <div className="mvp-nav">
          <div className="logo">
            <img src="/assets/logo.png" alt="logo" />
          </div>

          <div className="mvp-steps">
            <span className="active clickable" onClick={() => navigate("/scenario")}>
              <i>Scenario Selection</i>
            </span>
            <span><i>Company Profile</i></span>
            <span><i>Goals & Needs</i></span>
          </div>
        </div>

        <div className="mvp-main">

          {/* LEFT */}
          <div className="mvp-left">
            <h2><i>Revenue First</i></h2>

            <p className="desc">
              Focus on generating consistent profits while maintaining financial discipline.
              Scale responsibly with long-term sustainability.
            </p>

            <div className="timeline">

              {/* CARD 1 */}
              <div className="mvp-card highlight">
                <div className="mvp-box multi-section-card">

                  <img src="/assets/tax.png" className="card-icon" />

                  <div className="section-group">
                    <div className="title-with-icon">
                      <img src="/assets/tax2.png" className="box-icon" />
                      <h3>Tax</h3>
                    </div>
                    <ul className="card-sublist">
                      <li>invoice properly</li>
                      <li>operate legally</li>
                      <li>reduce liability</li>
                    </ul>
                  </div>

                  <div className="section-group">
                    <div className="title-with-icon">
                      <img src="/assets/company2.png" className="box-icon" />
                      <h3>Company Registration</h3>
                    </div>
                    <ul className="card-sublist">
                      <li>correct accounting</li>
                      <li>VAT handling</li>
                      <li>compliance</li>
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

                  <img src="/assets/law.png" className="card-icon" />

                  <div className="section-group">
                    <div className="title-with-icon">
                      <img src="/assets/law1.png" className="box-icon" />
                      <h3>Law</h3>
                    </div>
                    <ul className="card-sublist">
                      <li>client contracts</li>
                      <li>risk management</li>
                    </ul>
                  </div>

                  <div className="section-group">
                    <div className="title-with-icon">
                      <img src="/assets/hr1.png" className="box-icon" />
                      <h3>HR / Talent</h3>
                    </div>
                    <ul className="card-sublist">
                      <li>team growth</li>
                      <li>contractor management</li>
                    </ul>
                  </div>

                  <div className="section-group">
                    <div className="title-with-icon">
                      <img src="/assets/social1.png" className="box-icon" />
                      <h3>Social Media Marketing</h3>
                    </div>
                    <ul className="card-sublist">
                      <li>customer acquisition</li>
                      <li>revenue growth</li>
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
                    <li>Idea Validation – optional</li>
                    <li>MVP – if required</li>
                    <li>Events – networking</li>
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
                Based on financial stability and revenue consistency
              </p>
            </div>

            <div className="info-box">
              <div className="info-title">
                <img src="/assets/what.png" className="box-icon" />
                <h4>What is this?</h4>
              </div>
              <p>This scenario focuses on generating revenue quickly and operating safely.</p>

<p>Whether you are already earning or about to start, the priority is stability.</p>
            </div>

            <div className="info-box">
              <div className="info-title">
                <img src="/assets/whatfor.png" className="box-icon" />
                <h4>Who is this for?</h4>
              </div>
              <ul className="tick-list">
                <li>Freelancers</li>
                <li>Bootstrapped founders</li>
                <li>Cash-flow focused businesses</li>
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

export default RevenueFirst;