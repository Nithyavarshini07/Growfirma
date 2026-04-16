import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 👁️ toggle password
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // 🌐 social login
  const socialLogin = (platform) => {
    alert("Login with " + platform);
  };

  // ✅ VALIDATION FUNCTION (CORRECT PLACE)
  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter Email and Password");
      return; // ❌ STOP
    }

    // ✅ SUCCESS
    alert("Login successful!");
    navigate("/scenario");
  };

  return (
    <div className="container">
      <div className="left">
        <div className="logo">
          <img src="/assets/logo.png" alt="logo" />
        </div>

        <h1><i>TURNING IDEAS</i></h1>
        <h2><i>INTO REALITY</i></h2>
      </div>

      <div className="right">
        <div className="card">
          <h2><i>Welcome Back!</i></h2>

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

          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span onClick={togglePassword}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <Link to="/forgot" className="forgot">
            Forgot password?
          </Link>

          {/* ✅ CORRECT BUTTON */}
          <button type="button" className="signin" onClick={handleLogin}>
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