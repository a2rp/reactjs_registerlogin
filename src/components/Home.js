import { FaCheckCircle, FaSignOutAlt } from "react-icons/fa";

const Home = ({ onLogout }) => (
  <div className="success-panel">
    <FaCheckCircle className="success-icon" />
    <p className="eyebrow">Authentication complete</p>
    <h2>Login successful</h2>
    <p>Your saved credentials matched. This screen confirms the local demo flow is working.</p>
    <button className="switch-button" type="button" onClick={onLogout}><FaSignOutAlt /> Sign out</button>
  </div>
);

export default Home;
