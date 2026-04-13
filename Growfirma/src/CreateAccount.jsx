import React, { useState } from "react";
import "./styles.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import google from "./assets/google.png";
import linkedin from "./assets/linkedin.png";

const CreateAccount = () => {
    const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState("password");

  const createAccount = () => {
    const email = document.querySelector("input[type='email']").value;
    const password = document.getElementById("password").value;
    const terms = document.getElementById("terms").checked;

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (!terms) {
      alert("Please accept Terms and Conditions");
      return;
    }

    alert("Account created successfully!");
  };

  // ✅ FIXED toggle function
  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const socialLogin = (platform) => {
    alert("Login with " + platform);
  };

  return (
    <div className="container">

      {/* LEFT SIDE */}
      <div className="left">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <h1><i>TURNING IDEAS</i></h1>
        <h2><i>INTO REALITY</i></h2>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="form-box">

          <h2><i>Create an account</i></h2>

          <div className="social">
            <button onClick={() => socialLogin("Google")}>
              <img src={google} alt="Google" />
              Google
            </button>

            <button onClick={() => socialLogin("LinkedIn")}>
             <img src={linkedin} alt="LinkedIn" />
              LinkedIn
            </button>
          </div>


          <p className="or">OR</p>

          <div className="row">
            <input type="text" placeholder="Firstname" />
            <input type="text" placeholder="Lastname" />
          </div>

          <input type="email" placeholder="Email address" />

          <div className="password-field">
            <input
              type={passwordType}
              id="password"
              placeholder="Password"
            />

            {/* ✅ NEW ICON */}
            <span className="toggle-password" onClick={togglePassword}>
              {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">
              I agree to the <span>Terms and Conditions</span>
            </label>
          </div>

          <div className="checkbox">
            <input type="checkbox" id="consent" />
            <label htmlFor="consent">I consent for data sharing</label>
          </div>

          <button className="create-btn" onClick={() => navigate("/scenario")}>
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