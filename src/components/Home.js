import { FaCheckCircle, FaSignOutAlt } from "react-icons/fa";

const Home = ({ onLogout }) => (
  <div className="success-panel">
    <FaCheckCircle className="success-icon" aria-hidden="true" />
    <p className="eyebrow">Demo sign-in complete</p>
    <h2 aria-live="polite">Demo sign-in successful</h2>
    <p>The in-memory demo registration matched. This does not authenticate an account or contact a server.</p>
    <button className="switch-button" type="button" onClick={onLogout}><FaSignOutAlt aria-hidden="true" /> Sign out</button>
  </div>
);

export default Home;
