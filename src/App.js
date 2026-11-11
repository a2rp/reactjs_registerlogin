import "./App.css";
import { FaGithub, FaLock, FaShieldAlt } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import Registration from "./components/Registration";

const App = () => (
  <div className="app">
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Register login home">
        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="Ashish Ranjan logo" />
        <span><small>REACT FORM DEMO</small><strong>Register Login</strong></span>
      </a>
      <div className="header-actions">
        <span className="header-status"><FaShieldAlt aria-hidden="true" /> In-memory demo</span>
        <a href="https://github.com/a2rp/reactjs_registerlogin" target="_blank" rel="noopener noreferrer" aria-label="Open repository">
          <FaGithub aria-hidden="true" />
        </a>
      </div>
    </header>

    <main id="top" className="auth-layout">
      <section className="intro-panel">
        <p className="eyebrow">A small React form demo</p>
        <h1>Explore a sign-in flow without saving real credentials.</h1>
        <p className="intro-text">A front-end demonstration of registration and login interactions. Demo credentials stay in page memory; nothing is sent to a server or saved in browser storage.</p>
        <div className="intro-points">
          <span><FaLock aria-hidden="true" /> Credentials are cleared when this page reloads.</span>
          <span><FaShieldAlt aria-hidden="true" /> No real authentication or server connection.</span>
          <span><FiArrowUpRight aria-hidden="true" /> Use fictional details; never enter a real password.</span>
          <a href="https://react.dev/learn" target="_blank" rel="noopener noreferrer">Learn React basics <FiArrowUpRight aria-hidden="true" /></a>
        </div>
      </section>
      <section className="auth-card" aria-label="Registration and login form">
        <Registration />
      </section>
    </main>

    <footer className="site-footer">
      <span>Copyright &copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net/" target="_blank" rel="noopener noreferrer">Ashish Ranjan</a></span>
      <span>Frontend learning project</span>
    </footer>
  </div>
);

export default App;
