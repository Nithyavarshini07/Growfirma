import "./RegisterFirst.css";
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
    <div className="rf-container">

      {/* SIDEBAR */}
      <div className="side-icons">
        {icons.map((icon, index) => {
          const isActive = index === 6; // revenue icon
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
          <h2>Revenue First</h2>
          <p className="desc">
            Focus on generating consistent profits while maintaining financial discipline.
            Scale responsibly with strategies that ensure long-term, sustainable growth.
          </p>

          <div className="timeline">

            {/* GREEN CARD */}
            <div className="rf-card highlight">
              <div className="inner-box">
                <img src="/assets/tax.png" className="card-icon" />

                <h3>Tax</h3>
                <ul className="card-list">
                  <li>invoice properly</li>
                  <li>operate legally</li>
                  <li>reduce personal liability</li>
                </ul>

                <h3 className="sub-heading">Company Registration</h3>
                <ul className="card-list">
                  <li>correct accounting</li>
                  <li>VAT handling</li>
                  <li>ongoing compliance</li>
                </ul>
              </div>

              <span className="tag high">High</span>
            </div>

            {/* BLUE CARD */}
            <div className="rf-card">
              <div className="inner-box blue-box">
                <img src="/assets/law.png" className="card-icon" />

                <h3>Law</h3>
                <ul className="card-sublist">
                  <li>client and partner contracts</li>
                  <li>risk management</li>
                </ul>

                <h3 className="sub-heading">HR/Talent</h3>
                <ul className="card-sublist">
                  <li>team growth</li>
                  <li>contractor management</li>
                </ul>

                <h3 className="sub-heading">Social Media Marketing</h3>
                <ul className="card-sublist">
                  <li>attract customers</li>
                  <li>support revenue growth</li>
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
                  <li>Idea Validation – usually not relevant</li>
                  <li>MVP Development – only if needed</li>
                  <li>Events – networking & partnerships</li>
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
              This scenario focuses on generating revenue quickly and operating safely.
            </p>
            <p>
              Whether you are already earning or about to start, the priority is stability.
            </p>
          </div>

          <div className="info-box">
            <div className="info-title">
              <img src="/assets/whatfor.png" className="box-icon" />
              <h4>Who is this for?</h4>
            </div>

            <ul className="tick-list">
              <li>Freelancers transitioning into companies</li>
              <li>Bootstrapped founders</li>
              <li>Businesses focused on cash flow</li>
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

export default RevenueFirst;