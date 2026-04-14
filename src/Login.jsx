import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import logo from "./assets/logo.png";
import google from "./assets/google.png";
import linkedin from "./assets/linkedin.png";

function Login() {
    const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // ✅ ADD THIS FUNCTION
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // ✅ ADD THIS FUNCTION
  const socialLogin = (platform) => {
    alert("Login with " + platform);
  };

  return (
    <div className="container">
      <div className="left">
        <div className="logo">
                  <img src={logo} alt="logo" />
                </div>

        <h1><i>TURNING IDEAS</i></h1>
        <h2><i>INTO REALITY</i></h2>
      </div>

      <div className="right">
        <div className="card">
          <h2><i>Welcome Back!</i></h2>

          <div className="social">
            <button onClick={() => socialLogin("Google")}>
              <img src={google} alt="google" />
              Google
            </button>

            <button onClick={() => socialLogin("LinkedIn")}>
              <img src={linkedin} alt="linkedIn" />
              LinkedIn
            </button>
          </div>

          <p className="or">OR</p>

          <input type="email" placeholder="Email address" />

          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />

            <span onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <Link to="/forgot" className="forgot">
           Forgot password?
          </Link>

          <button className="signin" onClick={() => navigate("/scenario")}>
            Sign-in
          </button>

          <p className="signup">
             Don’t have an account?{" "}
            <Link to="/" className="signup-link">
             Signup
            </Link>
</p>
        </div>
      </div>
    </div>
  );
}

export default Login;