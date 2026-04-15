import { Routes, Route } from "react-router-dom";
import SideHustle from "./SideHustle"
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import ScenarioSelection from "./ScenarioSelection";
import RegisterFirst from "./RegisterFirst";
import MVPFirst from "./MVPFirst";
import ExitOriented from "./ExitOriented";
import RevenueFirst from "./RevenueFirst";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CreateAccount />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot" element={<ForgotPassword />} />
      <Route path="/mvp-first" element={<MVPFirst />} />
      <Route path="/exit-oriented" element={<ExitOriented />} />

      <Route path="/side-hustle" element={<SideHustle />} />
      <Route path="/reset" element={<ResetPassword />} />
      <Route path="/scenario" element={<ScenarioSelection />} />
      <Route path="/register-first" element={<RegisterFirst />} />
      <Route path="/revenue-first" element={<RevenueFirst />} />
      
    </Routes>
  );
}

export default App;