import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import Home from "./Home";

const readValue = (key) => {
  const stored = localStorage.getItem(key);
  if (!stored) return "";
  try {
    return JSON.parse(stored);
  } catch {
    return stored;
  }
};

const Login = ({ onBack }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = readValue("Email");
    const password = readValue("Password");

    if (!form.email.trim() || !form.password) {
      setMessage("Enter both email and password.");
      return;
    }
    if (!email || !password || form.email.trim() !== email || form.password !== password) {
      setMessage("The email or password does not match the saved registration.");
      return;
    }
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Home onLogout={() => setLoggedIn(false)} />;
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span className="form-icon"><FaSignInAlt /></span><p className="eyebrow">Welcome back</p><h2>Sign in</h2><p>Use the credentials saved during registration.</p></div>
      <label htmlFor="login-email"><FaEnvelope /> Email address</label>
      <input id="login-email" name="email" type="email" value={form.email} placeholder="Enter your email" onChange={updateField} />
      <label htmlFor="login-password"><FaLock /> Password</label>
      <input id="login-password" name="password" type="password" value={form.password} placeholder="Enter your password" onChange={updateField} />
      <button className="submit-button" type="submit">Sign in <FaArrowRight /></button>
      {message && <p className="form-message error" role="alert">{message}</p>}
      <button className="switch-button" type="button" onClick={onBack}><FaArrowLeft /> Need an account? Register</button>
    </form>
  );
};

export default Login;
