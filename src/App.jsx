import { Routes, Route } from "react-router-dom";
import Login from "./Login.jsx";
import CreateAccount from "./CreateAccount.jsx";
import ForgotPassword from "./ForgotPassword.jsx";
import ResetPassword from "./ResetPassword.jsx";
import ScenarioSelection from "./ScenarioSelection.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/scenario" element={<ScenarioSelection />} />
    </Routes>
  );
}

export default App;