import "./SideHustle.css";

function SideHustle() {
  return (
    <div className="rf-container">

      {/* NAV */}
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

                <span className="tag high">Importance: High</span>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="rf-card">
              <div className="inner-box blue-box">

                <h3>MVP Development (lean)</h3>
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

                <h3 className="sub-heading">Events</h3>
                <ul className="card-sublist">
                  <li>learning opportunities</li>
                  <li>startup communities</li>
                  <li>early feedback and inspiration</li>
                </ul>

                <h3 className="sub-heading">Social Media Marketing</h3>
                <p className="card-desc">Used experimentally to:</p>

                <ul className="card-sublist">
                  <li>test messaging</li>
                  <li>build early visibility or personal branding</li>
                </ul>

                <span className="tag mid">Importance: Moderate</span>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="rf-card optional">
              <div className="inner-box">

                <h3>Optional Services</h3>

                <ul className="card-sublist">
                  <li>HR / Talent – rarely needed at this stage</li>
                  <li>Company Registration – only if traction appears</li>
                  <li>Law – usually unnecessary early</li>
                  <li>Tax – not needed without revenue</li>
                </ul>

                <span className="tag low">Importance: Least</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="rf-right">

          {/* SUCCESS */}
          <div className="success-box">
            <h4 className="sp-title">SUCCESS PREDICTION</h4>

            <div className="progress-circle">
              <span>89%</span>
            </div>

            <p className="sp-desc">
              Based on the current market volatility and your historical portfolio performance
            </p>
          </div>

          {/* WHAT IS THIS */}
          <div className="info-box">
            <h4>What is this?</h4>
            <p>
              This scenario is about testing an idea with minimal risk and commitment.
            </p>
            <p>
              You are exploring, not building a full company yet.
            </p>
          </div>

          {/* WHO IS THIS FOR */}
          <div className="info-box">
            <h4>Who is this for?</h4>

            <ul className="tick-list">
              <li>Part-time founders</li>
              <li>Students and professionals testing ideas</li>
              <li>Solo builders who want flexibility</li>
            </ul>
          </div>

          {/* BUTTON */}
          <div className="next-container">
            <button className="next-btn">
              Next ⚡
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SideHustle;