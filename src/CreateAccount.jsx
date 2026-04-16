import React, { useState } from "react";
import "./styles.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const navigate = useNavigate();

  // ✅ ALL STATES INSIDE COMPONENT
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [passwordType, setPasswordType] = useState("password");

  // ✅ VALIDATION FUNCTION
  const createAccount = () => {
    if (!firstName || !email || !password) {
      alert("Please fill First Name, Email and Password");
      return; // ❌ STOP
    }

    if (!terms) {
      alert("Please accept Terms and Conditions");
      return; // ❌ STOP
    }

    // ✅ SUCCESS
    alert("Account created successfully!");
    navigate("/scenario");
  };

  // 👁️ Toggle password
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const socialLogin = (platform) => {
    alert("Login with " + platform);
  };

  return (
    <div className="container">

      {/* LEFT */}
      <div className="left">
        <div className="logo">
          <img src="/assets/logo.png" alt="logo" />
        </div>
        <h1><i>TURNING IDEAS</i></h1>
        <h2><i>INTO REALITY</i></h2>
      </div>

      {/* RIGHT */}
      <div className="right">
        <div className="form-box">

          <h2><i>Create an account</i></h2>

          <div className="social">
            <button onClick={() => socialLogin("google")}>
              <img src="/assets/google.png" alt="google" />
              Google
            </button>

            <button onClick={() => socialLogin("linkedin")}>
              <img src="/assets/linkedin.png" alt="linkedin" />
              LinkedIn
            </button>
          </div>

          <p className="or">OR</p>

          <div className="row">
            <input
              type="text"
              placeholder="Firstname"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Lastname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password-field">
            <input
              type={passwordType}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span className="toggle-password" onClick={togglePassword}>
              {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="checkbox">
            <input
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label>
              I agree to the <span>Terms and Conditions</span>
            </label>
          </div>

          <div className="checkbox">
            <input type="checkbox" />
            <label>I consent for data sharing</label>
          </div>

          <button className="create-btn" onClick={createAccount}>
            CREATE ACCOUNT
          </button>

          <p className="login">
            Already have an account?
            <Link to="/login" className="login-link">
              Log in
            </Link>
          </p>

        </div>
      </div>

    </div>
  );
};

export default CreateAccount;