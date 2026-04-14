import "./ResetPassword.css";
import { useNavigate } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import lockImg from "./assets/lock.png";
import logo from "./assets/logo.png";

function ResetPassword() {
  const navigate = useNavigate(); // ✅ ADD THIS

  const handleReset = () => {
    alert("Password reset successful!");
    navigate("/login"); // ✅ go to login page
  };
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

          <h2>Reset Password</h2>

          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm Password" />

          <button className="signin" onClick={handleReset}>
            RESET PASSWORD
          </button>

        </div>
      </div>
    </div>
  );
}

export default ResetPassword;