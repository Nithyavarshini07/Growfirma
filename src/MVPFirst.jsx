import "./MVPFirst.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function MVPFirst() {
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
          const isActive = index === 4; // MVP active
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
{/* CARD 1 */}
{/* CARD 1 - MVP (REGISTER STYLE MATCH) */}
<div className="rf-card highlight">
  <div className="inner-box multi-section-card">

    {/* decorative top-right icon */}
    <img src="/assets/idea.png" className="card-icon" alt="bg-icon" />

    {/* SECTION 1 */}
    <div className="section-group">

      <div className="title-with-icon">
        <img src="/assets/idea2.png" className="box-icon" />
        <h3>Idea Validation</h3>
      </div>

      <p className="card-desc">
        Helps you understand whether your idea is worth building:
      </p>

      <ul className="card-sublist">
        <li>assumptions are tested</li>
        <li>you build something users actually want</li>
      </ul>

      <p className="card-note">
        Prevents wasting time and resources early.
      </p>
    </div>

    {/* SECTION 2 */}
    <div className="section-group">

      <div className="title-with-icon">
        <img src="/assets/mvp2.png" className="box-icon" />
        <h3>MVP Development</h3>
      </div>

      <p className="card-desc">
        Build a minimal working version of your product:
      </p>

      <ul className="card-sublist">
        <li>builds first usable product</li>
        <li>core features only</li>
        <li>focus on learning & iteration</li>
      </ul>

      <p className="card-note">
        Speed matters more than perfection.
      </p>
    </div>

    {/* IMPORTANCE (REGISTER STYLE POSITION) */}
    <div className="importance-pod">
      <span className="label">Importance</span>
      <span className="value high">High</span>
    </div>

  </div>
</div>
            {/* BLUE BOX */}
{/* CARD 2 */}
{/* CARD 2 */}
<div className="rf-card">
  <div className="inner-box blue-box multi-section-card">

    {/* MAIN ICON */}
    <img src="/assets/company.png" className="card-icon" />

    {/* SECTION 1 */}
    <div className="section-group">

      <div className="title-with-icon">
        <img src="/assets/company1.png" className="box-icon" />
        <h3>Company Registration</h3>
      </div>

      <ul className="card-sublist">
        <li>charge users</li>
        <li>work with contractors</li>
        <li>require a legal entity</li>
      </ul>

    </div>

    {/* SECTION 2 */}
    <div className="section-group">

      <div className="title-with-icon">
        <img src="/assets/law1.png" className="box-icon" />
        <h3>Law</h3>
      </div>

      <ul className="card-sublist">
        <li>founder agreements</li>
        <li>development and partner contracts</li>
      </ul>

    </div>

    {/* SECTION 3 */}
    <div className="section-group">

      <div className="title-with-icon">
        <img src="/assets/hr1.png" className="box-icon" />
        <h3>HR / Talent</h3>
      </div>

      <ul className="card-sublist">
        <li>early hiring</li>
        <li>contractor or freelancer setup</li>
      </ul>

    </div>

    {/* IMPORTANCE (SIDEHUSTLE STYLE) */}
    <div className="importance-pod">
      <span className="label">Importance</span>
      <span className="value mid">Moderate</span>
    </div>

  </div>
</div>
           {/* ORANGE BOX */}
{/* CARD 3 */}
<div className="rf-card optional">
  <div className="inner-box multi-section-card">

    {/* MAIN ICON */}
    <img src="/assets/service.png" className="card-icon" />

    {/* SECTION 1 */}
    <div className="section-group">
      <div className="title-with-icon">
        <img src="/assets/tax.png" className="box-icon" />
        <h3>Tax</h3>
      </div>

      <ul className="card-sublist">
        <li>required only after revenue starts</li>
      </ul>
    </div>

    {/* SECTION 2 */}
    <div className="section-group">
      <div className="title-with-icon">
        <img src="/assets/event1.png" className="box-icon" />
        <h3>Events</h3>
      </div>

      <ul className="card-sublist">
        <li>use after product launch</li>
        <li>for networking and exposure</li>
      </ul>
    </div>

    {/* IMPORTANCE (SIDEHUSTLE STYLE — SAME AS OTHER CARDS) */}
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
  <h4 className="sp-title">
    <i><u>SUCCESS PREDICTION</u></i>
  </h4>

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
    This scenario focuses on turning an idea into a working product and
    getting it in front of users quickly.
  </p>

  <p className="what-text">
    Execution is the priority.
  </p>
</div>

<div className="info-box">
  <div className="info-title">
    <img src="/assets/whatfor.png" alt="users" className="box-icon who-icon" />
    <h4 className="who-title">Who is this for?</h4>
  </div>

  <ul className="tick-list who-list">
    <li>Founders ready to build</li>
    <li>Teams preparing for launch</li>
    <li>Startups with clear product direction</li>
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

export default MVPFirst;