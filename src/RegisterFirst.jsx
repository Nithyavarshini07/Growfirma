import "./RegisterFirst.css";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function RegisterFirst() {
    const location = useLocation();
  const navigate = useNavigate();
  const [showNext, setShowNext] = useState(true);

useEffect(() => {
  const handleScroll = () => {
    const scrolled =
      (window.scrollY + window.innerHeight) /
      document.body.scrollHeight;

    if (scrolled > 0.8) {
      setShowNext(true);
    } else {
      setShowNext(false);
    }
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

      {/* LEFT ICON SIDEBAR */}
<div className="side-icons">
  {icons.map((icon, index) => {
    
    // ✅ ONLY 2nd icon green
    const isActive = index === 1;

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

      {/* TOP NAV */}
      <div className="rf-nav">
        <div className="logo">
          <img src="/assets/logo.png" alt="GrowFirma Logo" />
        </div>

        <div className="steps">
          <span onClick={() => navigate("/scenario")} className="clickable">
            Scenario Selection
          </span>
          <span className="active">Company Profile</span>
          <span>Goals & Needs</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="rf-main">

        {/* LEFT SIDE */}
        <div className="rf-left">
          <h2><i>Register First</i></h2>
          <p className="desc">
            Focus on creating your account with essential details.<br />
            Set up your profile to get started quickly and securely.
          </p>
          

          <div className="timeline">

            {/* CARD 1 */}
            <div className="rf-card highlight">
              <div className="inner-box">
                <img src="/assets/company.png" className="card-icon" />
                <h3>Company Registration</h3>
                <p className="card-desc">
                  Creates your legal business entity and official address so you can:
                </p>

                <ul className="card-list">
                  <li>Operate as a company</li>
                  <li>Sign contracts</li>
                  <li>Open a bank account</li>
                </ul>

                <p className="card-note">
                  This is the foundation of everything else.
                </p>
                <div className="importance-pod high">
  <span className="label">Importance</span>
  <span className="value high">High</span>
</div>
              </div>

            </div>

{/* CARD 2 - Tax, Law, and HR */}
<div className="rf-card">
  <div className="inner-box blue-box multi-section-card">
    
    {/* Decorative Background Icon (Top Right) */}
    <img src="/assets/tax.png" className="card-icon" alt="background-decoration" />

    <div className="card-content">
      
      {/* SECTION: TAX */}
      <div className="section-group">
        <div className="title-with-icon">
          <img src="/assets/tax1.png" alt="Tax" className="box-icon" />
          <h3>Tax (Tax & VAT registration)</h3>
        </div>
        <p className="card-desc">
          Prepares your company for financial activity by:
        </p>
        <ul className="card-sublist">
          <li>registering for tax</li>
          <li>handling VAT setup if required</li>
        </ul>
        <p className="card-note">
          Useful if you plan to start operating soon.
        </p>
      </div>

      {/* SECTION: LAW */}
      <div className="section-group">
        <div className="title-with-icon">
          <img src="/assets/law1.png" alt="Legal" className="box-icon" />
          <h3 className="sub-heading">Law</h3>
        </div>
        <p className="card-desc">
          Covers basic business legal needs such as:
        </p>
        <ul className="card-sublist">
          <li>founder agreements</li>
          <li>general business contracts</li>
          <li>structural clarity</li>
        </ul>
        <p className="card-note">
          Especially important when more than one person is involved.
        </p>
      </div>

      {/* SECTION: HR / TALENT */}
      <div className="section-group">
        <div className="title-with-icon">
          <img src="/assets/hr1.png" alt="HR" className="box-icon" />
          <h3 className="sub-heading">HR/Talent</h3>
        </div>
        <p className="card-desc">
          Helps define:
        </p>
        <ul className="card-sublist">
          <li>founder roles</li>
          <li>early hires or contractors</li>
        </ul>
        <p className="card-note">
          Not required if you are working alone.
        </p>
      </div>

    </div>

    {/* IMPORTANCE BOX (Bottom Left) */}
    <div className="importance-pod">
      <span className="label">Importance</span>
      <span className="value mid">Moderate</span>
    </div>

  </div>
</div>
            {/* CARD 3 */}
            <div className="rf-card optional">
              <div className="inner-box">
                <img src="/assets/service.png" className="card-icon" />
                <h3>Optional Services</h3>

                <ul className="card-sublist">
                  <li><strong>Idea Validation</strong> - if your idea isn't tested yet</li>
                  <li><strong>MVP Development</strong> - when you are ready to build</li>
                  <li><strong>Social Media Marketing</strong> - once you are active</li>
                  <li><strong>Events</strong> - when you want ecosystem exposure</li>
                </ul>
                <div className="importance-pod low">
  <span className="label">Importance</span>
  <span className="value low">Least</span>
</div>
              </div>

              
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rf-right">

          <div className="success-box">
            <h4 className="sp-title"><i><u>SUCCESS PREDICTION</u></i></h4>

            <div className="progress-circle">
              <span>89%</span>
            </div>

            <p className="sp-desc">
              Based on the current market volatility and
              your historical portfolio performance
            </p>
          </div>

          <div className="info-box">
  <div className="info-title">
    <img src="/assets/what.png" alt="info" className="box-icon what-icon" />
    <h4 className="what-title">What is this?</h4>
  </div>

  <p className="what-text">
    This scenario is for founders who want to legally set up their company first, before
    building, marketing, or selling anything.
  </p>

  <p className="what-text">
    You already know you want a company now you want to do it correctly
  </p>
</div>

          <div className="info-box">
  <div className="info-title">
    <img src="/assets/whatfor.png" alt="users" className="box-icon who-icon" />
    <h4 className="who-title">Who is this for?</h4>
  </div>

  <ul className="tick-list who-list">
    <li>First-time founders</li>
    <li>Freelancers planning to formalise their work</li>
    <li>Founders who want a legal entity ready for future use</li>
  </ul>
</div>

          <img src="/assets/blank.png" alt="info" className="info-img" />

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

export default RegisterFirst;