import "./MVPFirst.css";

function MVPFirst() {
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

      <div className="rf-main">

        {/* LEFT */}
        <div className="rf-left">
          <h2>MVP First</h2>
          <p className="desc">
            Drive growth by letting the product deliver value and attract users.
            Continuously improve through fast iterations and user feedback cycles.
          </p>

          <div className="timeline">

            {/* GREEN BOX */}
            <div className="rf-card highlight">
              <div className="inner-box">

                <h3>Idea Validation</h3>
                <ul className="card-list">
                  <li>assumptions are tested</li>
                  <li>you are building something users actually want</li>
                </ul>

                <h3 className="sub-heading">MVP Development</h3>
                <ul className="card-list">
                  <li>builds your first usable product</li>
                  <li>core features only</li>
                  <li>focus on learning and iteration</li>
                </ul>

                <span className="tag high">Importance High</span>
              </div>
            </div>

            {/* BLUE BOX */}
            <div className="rf-card">
              <div className="inner-box blue-box">

                <h3>Company Registration</h3>
                <ul className="card-sublist blue-bullets">
                  <li>charge users</li>
                  <li>work with contractors</li>
                  <li>require a legal entity</li>
                </ul>

                <h3 className="sub-heading">Law</h3>
                <ul className="card-sublist blue-bullets">
                  <li>founder agreements</li>
                  <li>development and partner contracts</li>
                </ul>

                <h3 className="sub-heading">HR/Talent</h3>
                <ul className="card-sublist blue-bullets">
                  <li>early hiring</li>
                  <li>contractor or freelancer setup</li>
                </ul>

                <span className="tag mid">Importance Moderate</span>
              </div>
            </div>

            {/* ORANGE BOX */}
            <div className="rf-card optional">
              <div className="inner-box">

                <h3>Optional Services</h3>
                <ul className="card-sublist orange-bullets">
                  <li>Tax – once revenue starts</li>
                  <li>Events – after launch</li>
                </ul>

                <span className="tag low">Importance Least</span>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div className="rf-right">

          <div className="success-box">
            <h4>SUCCESS PREDICTION</h4>
            <div className="progress-circle">
              <span>89%</span>
            </div>
            <p>
              Based on the current market volatility and your historical portfolio performance
            </p>
          </div>

          <div className="info-box">
            <h4>What is this?</h4>
            <p>
              This scenario focuses on turning an idea into a working product and
              getting it in front of users quickly.
            </p>
            <p>Execution is the priority.</p>
          </div>

          <div className="info-box">
            <h4>Who is this for?</h4>
            <ul className="tick-list">
              <li>Founders ready to build</li>
              <li>Teams preparing for launch</li>
              <li>Startups with clear product direction</li>
            </ul>
          </div>

          <div className="next-container">
            <button className="next-btn">Next ⚡</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default MVPFirst;