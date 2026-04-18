import React from "react";
import "./CompanyProfile.css";
import { useNavigate } from "react-router-dom";

const CompanyProfile = () => {
  const navigate = useNavigate(); // ✅ FIXED LOCATION

  return (
    <div className="page">
      <header className="main-nav">
        <div className="logo-container">
          <span className="logo-plus">+</span>
          <span className="logo-text">
            Grow<span className="logo-bold">Firma</span>
          </span>
        </div>

        <nav className="nav-links">
          <div className="nav-item" onClick={() => navigate("/scenario")}>
            Scenario Selection
          </div>

          <div className="nav-item active">
            Company Profile
          </div>

          <div className="nav-item">
            Goals & Needs
          </div>
        </nav>

        <div className="header-spacer"></div>
      </header>

      {/* TOP BANNER */}
      <div className="banner-outer-wrapper">
        <div className="side-doc-box">📄</div>
        <div className="main-banner-inner">
          <div>
            <div className="banner-top-line">
              <span className="path-tag">SELECTED PATH : REGISTER FIRST</span>
              <span className="edit-link">Edit Selection</span>
            </div>
            <p className="banner-subtext">Focus on the legal compliance and foundational setup.</p>
          </div>
          <div className="banner-status-icons">
            <span style={{ opacity: 0.3 }}>🏢</span>
            <span>✏️</span>
            <span style={{ color: '#4da3ff' }}>🚀</span>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT GRID */}
      <div className="grid">
        {/* LEFT COLUMN: FORM */}
        <div className="form-card">
          <h2 className="form-title">Company Profile</h2>
          <p className="form-description">Enter the core parameters of your synthetic venture to synchronize with global regulations.</p>

          <div className="input-group">
            <label>Startup Name</label>
            <input type="text" placeholder="Enter name..." />
          </div>

          <div className="row">
            <div className="input-group">
              <label>Entity Type</label>
              <select><option>Select type...</option></select>
            </div>
            <div className="input-group">
              <label>Entity Size</label>
              <select><option>Select size...</option></select>
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>Registered Company</label>
              <div className="toggle-btns">
                <button className="btn-toggle active">Yes</button>
                <button className="btn-toggle">No</button>
              </div>
            </div>
            <div className="input-group">
              <label>Country</label>
              <input type="text" />
            </div>
          </div>

          <div className="row">
            <div className="input-group">
              <label>City</label>
              <input type="text" />
            </div>
            <div className="input-group" style={{ visibility: 'hidden' }}></div>
          </div>

          <div className="input-group">
            <label>Website/Domain</label>
            <input type="text" />
          </div>

          <div className="input-group">
            <label>Project Narrative</label>
            <textarea rows="4" placeholder="Describe your vision..."></textarea>
          </div>

          <div className="form-footer">
            <span className="clear-link">Clear All</span>
            <button className="btn-deploy">Deploy Profile</button>
          </div>
        </div>

        {/* RIGHT COLUMN: SIDEBAR */}
        <div className="side-column">
          {/* Card 1: Registration Status */}
          <div className="side-panel-card">
            <h3 className="side-card-title">Registration Status</h3>

            <div className="circular-progress-container">
              <svg width="120" height="120" viewBox="0 0 120 120">
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#1a2332"
                  strokeWidth="6"
                />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="#b2ff59"
                  strokeWidth="6"
                  strokeDasharray="314.159"
                  /* Fixed: Wrapped math in parentheses to prevent Vite parse error */
                  strokeDashoffset={(314.159 - (314.159 * 64) / 100)}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                />
              </svg>
              <div className="progress-text">
                <span className="percentage">64%</span>
                <span className="complete-label">COMPLETE</span>
              </div>
            </div>

            <div className="stage-progress-section">
              <h4 className="stage-title">Stage Progress</h4>
              <div className="linear-progress-track">
                <div className="linear-progress-bar" style={{ width: "64%" }}></div>
              </div>
            </div>
          </div>

          {/* Card 2: Compliance Readiness */}
          <div className="side-panel-card compliance-card">
  <div className="compliance-header">
    <span className="shield-icon">🛡️</span>
    <h4>Compliance Readiness</h4>
  </div>

  <div className="compliance-list">
    {/* Item 1: Success/Green */}
    <div className="compliance-item status-success">
      <div className="status-icon">✅</div>
      <div className="status-text">
        <strong>Legal Entity Defined</strong>
        <p>Foundational structure validated via Global Ledger.</p>
      </div>
    </div>

    {/* Item 2: Warning/Red */}
    <div className="compliance-item status-warning">
      <div className="status-icon">⚠️</div>
      <div className="status-text">
        <strong>Country Regulations Matched</strong>
        <p>Update City details to match local jurisdictional codes.</p>
      </div>
    </div>

    {/* Item 3: Pending/Gray */}
    <div className="compliance-item status-pending">
      <div className="status-icon">🕒</div>
      <div className="status-text">
        <strong>Documentation Pending</strong>
        <p>Upload Article of Incorporation for final vetting.</p>
      </div>
    </div>
  </div>

  <button className="scan-btn">RUN DIAGNOSTIC SCAN</button>
</div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;