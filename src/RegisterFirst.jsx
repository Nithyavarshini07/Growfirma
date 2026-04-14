import "./RegisterFirst.css";
import { useNavigate } from "react-router-dom";

function RegisterFirst() {
  const navigate = useNavigate();

  return (
    <div className="rf-container">

      {/* TOP NAV */}
      <div className="rf-nav">
        <div className="logo">
          <span className="grow">Grow</span>
          <span className="firma">Firma</span>
        </div>

        <div className="steps">
          <span className="active">Scenario Selection</span>
          <span>Company Profile</span>
          <span>Goals & Needs</span>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="rf-main">

        {/* LEFT TIMELINE */}
        <div className="rf-left">

          <h2>Register First</h2>
          <p className="desc">
            Focus on creating your account with essential details.
            Set up your profile to get started quickly and securely.
          </p>

          {/* TIMELINE LINE */}
          <div className="timeline">

            {/* CARD 1 */}
            <div className="rf-card highlight">
              <h3>Company Registration</h3>
              <p>Creates your legal business entity and official address so you can:</p>
              <ul>
                <li>operate as a company</li>
                <li>sign contracts</li>
                <li>open a bank account</li>
              </ul>
              <span className="tag high">High</span>
            </div>

            {/* CARD 2 */}
            <div className="rf-card">
              <h3>Tax (Tax & VAT registration)</h3>
              <p>Prepares your company for financial activity</p>
            </div>

            {/* CARD 3 */}
            <div className="rf-card">
              <h3>Law</h3>
              <p>Legal agreements and compliance setup</p>
            </div>

            {/* CARD 4 */}
            <div className="rf-card">
              <h3>HR/Talent</h3>
              <p>Define roles and early hiring</p>
              <span className="tag mid">Moderate</span>
            </div>

            {/* CARD 5 */}
            <div className="rf-card optional">
              <h3>Optional Services</h3>
              <p>Idea validation, MVP, marketing</p>
              <span className="tag low">Least</span>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="rf-right">

          <div className="success-box">
            <h4>SUCCESS PREDICTION</h4>
            <div className="circle">89%</div>
          </div>

          <div className="info-box">
            <h4>What is this?</h4>
            <p>This is for founders who want to legally set up first.</p>
          </div>

          <div className="info-box">
            <h4>Who is this for?</h4>
            <ul>
              <li>First-time founders</li>
              <li>Freelancers planning to formalize</li>
              <li>Legal-first builders</li>
            </ul>
          </div>

          <button className="next-btn">Next →</button>

        </div>
      </div>
    </div>
  );
}

export default RegisterFirst;