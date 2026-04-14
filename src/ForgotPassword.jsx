import "./ForgotPassword.css";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import lockImg from "./assets/lock.png";
import logo from "./assets/logo.png";

function ForgotPassword() {
  return (
    <div className="container">
      
      {/* LEFT SIDE */}
      <div className="left">
         <div className="logo">
         <img src={logo} alt="logo" />
          </div>

        <h1>
          LOST YOUR <br />
          <span>WAY?</span>
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="right">
        <div className="card">

          <div className="lock-img">
          <img src={lockImg} alt="lock" />
          </div>

          <h2>Forgot Password</h2>
          <p className="subtext">Enter your email to reset it</p>

          <input type="email" placeholder="Email address" />

          <Link to="/login" className="back">
            Return back to Log In page
          </Link>

          <Link to="/reset">
           <button className="signin">
            FORGOT PASSWORD
          </button>
          </Link>

        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;