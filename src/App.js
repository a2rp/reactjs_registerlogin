import "./App.css";
import { FaGithub, FaLock, FaShieldAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Registration from "./components/Registration";

const App = () => (
  <div className="app">
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Register login home">
        <img src="/logo.png" alt="Ashish Ranjan logo" />
        <span><small>REACT AUTH DEMO</small><strong>Register Login</strong></span>
      </a>
      <div className="header-actions">
        <span className="header-status"><FaShieldAlt /> Local storage demo</span>
        <a href="https://github.com/a2rp/reactjs_registerlogin" target="_blank" rel="noopener noreferrer" aria-label="Open repository">
          <FaGithub />
        </a>
      </div>
    </header>

    <main id="top" className="auth-layout">
      <section className="intro-panel">
        <p className="eyebrow">A small React auth flow</p>
        <h1>Register once. Sign in with confidence.</h1>
        <p className="intro-text">A focused demonstration of a registration and login flow using React state and browser local storage.</p>
        <div className="intro-points">
          <span><FaLock /> Credentials stay in this browser for the demo.</span>
          <span><FaShieldAlt /> Clear feedback for each form state.</span>
          <span><FiArrowUpRight /> Simple enough to extend into a real project.</span>
        </div>
      </section>
      <section className="auth-card" aria-label="Registration and login form">
        <Registration />
      </section>
    </main>

    <footer className="site-footer">
      <span>Copyright © {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
      <span>Frontend learning project</span>
    </footer>
  </div>
);

export default App;
