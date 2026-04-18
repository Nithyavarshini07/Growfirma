import "./SideHustle.css";
import { useNavigate } from "react-router-dom";

function SideHustle() {
  const navigate = useNavigate();

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
          const isActive = index === 3; // Side Hustle active
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
          <img src="/assets/logo.png" alt="logo" />
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
      </div>

      {/* MAIN */}
      <div className="rf-main">

        {/* LEFT */}
        <div className="rf-left">

          <h2>Side Hustle</h2>
          <p className="desc">
            Maintain efficient operations with minimal resources and effort.
            Balance tasks effectively while staying focused on key priorities.
          </p>

          <div className="timeline">

           {/* CARD 1 */}
<div className="rf-card highlight">
  <div className="inner-box blue-box">

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

    <div className="importance-pod">
      <span className="label">Importance</span>
      <span className="value high">High</span>
    </div>

  </div>
</div>

{/* CARD 2 */}
<div className="rf-card">
  <div className="inner-box blue-box multi-section-card">

    {/* Decorative Icon */}
    <img src="/assets/mvp.png" className="card-icon" alt="background" />

    <div className="card-content">

      {/* SECTION 1: MVP */}
      <div className="section-group">
        <div className="title-with-icon">
          <img src="/assets/mvp1.png" alt="MVP" className="box-icon" />
          <h3>MVP Development (lean)</h3>
        </div>

        <p className="card-desc">
          Helps you quickly build a working version of your idea:
        </p>

        <ul className="card-sublist">
          <li>validate core idea fast</li>
          <li>build minimal working product</li>
          <li>test real user response</li>
        </ul>

        <p className="card-note">
          Focus is speed, not perfection.
        </p>
      </div>

      {/* SECTION 2: EVENTS */}
      <div className="section-group">
        <div className="title-with-icon">
          <img src="/assets/event1.png" alt="Events" className="box-icon" />
          <h3>Events</h3>
        </div>

        <p className="card-desc">
          Helps you grow through exposure:
        </p>

        <ul className="card-sublist">
          <li>startup networking opportunities</li>
          <li>learning from other founders</li>
          <li>getting early feedback</li>
        </ul>

        <p className="card-note">
          Useful for visibility and connections.
        </p>
      </div>

      {/* SECTION 3: SOCIAL MEDIA */}
      <div className="section-group">
        <div className="title-with-icon">
          <img src="/assets/social1.png" alt="Social Media" className="box-icon" />
          <h3>Social Media Marketing</h3>
        </div>

        <p className="card-desc">
          Used to test and grow your idea:
        </p>

        <ul className="card-sublist">
          <li>validate messaging</li>
          <li>build early audience</li>
          <li>create personal brand visibility</li>
        </ul>

        <p className="card-note">
          Works best when used experimentally.
        </p>
      </div>

    </div>

    {/* IMPORTANCE (ONLY ONE - INSIDE inner-box) */}
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
    <img src="/assets/what.png" alt="info" className="box-icon what-icon" />
    <h4 className="what-title">What is this?</h4>
  </div>

  <p className="what-text">
    This scenario is about testing an idea with minimal risk and commitment.
  </p>

  <p className="what-text">
    You are exploring, not building a full company yet.
  </p>
</div>

<div className="info-box">
  <div className="info-title">
    <img src="/assets/whatfor.png" alt="users" className="box-icon who-icon" />
    <h4 className="who-title">Who is this for?</h4>
  </div>

  <ul className="tick-list who-list">
    <li>Part-time founders</li>
    <li>Students and professionals testing ideas</li>
    <li>Solo builders who want flexibility</li>
  </ul>
</div>

          <img src="/assets/blank.png" alt="info" className="info-img" />

          {/* FLOAT BUTTON */}
          <div className="next-floating">
            <button className="next-btn">
              Next
              <img src="/assets/next.png" className="next-icon" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SideHustle;