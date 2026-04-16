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

          <h2>Side Hustle</h2>
          <p className="desc">
            Maintain efficient operations with minimal resources and effort.
            Balance tasks effectively while staying focused on key priorities.
          </p>

          <div className="timeline">

            {/* CARD 1 */}
            <div className="rf-card highlight">
              <div className="inner-box">
                <img src="/assets/idea.png" className="card-icon" />

                <h3>Idea Validation</h3>
                <p className="card-desc">Helps you understand:</p>

                <ul className="card-list">
                  <li>whether a real problem exists</li>
                  <li>who your users are</li>
                  <li>if the idea is worth pursuing</li>
                </ul>

                <p className="card-note">
                  This prevents wasted time and money.
                </p>
              </div>

              <span className="tag high">High</span>
            </div>

            {/* CARD 2 */}
            <div className="rf-card">
              <div className="inner-box blue-box">
                <img src="/assets/mvp.png" className="card-icon" />

                <div className="title-with-icon">
  <img src="/assets/mvp1.png" alt="MVP" className="box-icon" />
  <h3>MVP Development (lean)</h3>
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

                <div className="title-with-icon">
  <img src="/assets/event1.png" alt="Events" className="box-icon" />
  <h3 className="sub-heading">Events</h3>
</div>
                <ul className="card-sublist">
                  <li>learning opportunities</li>
                  <li>startup communities</li>
                  <li>early feedback and inspiration</li>
                </ul>

                <div className="title-with-icon">
  <img src="/assets/social1.png" alt="Social Media" className="box-icon" />
  <h3 className="sub-heading">Social Media Marketing</h3>
</div>
                <p className="card-desc">Used experimentally to:</p>

                <ul className="card-sublist">
                  <li>test messaging</li>
                  <li>build early visibility or personal branding</li>
                </ul>
              </div>

              <span className="tag mid">Moderate</span>
            </div>

            {/* CARD 3 */}
            <div className="rf-card optional">
              <div className="inner-box">
                <img src="/assets/service.png" className="card-icon" />

                <h3>Optional Services</h3>

                <ul className="card-sublist">
                  <li>HR / Talent – rarely needed at this stage</li>
                  <li>Company Registration – only if traction appears</li>
                  <li>Law – usually unnecessary early</li>
                  <li>Tax – not needed without revenue</li>
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