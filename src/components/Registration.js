import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaLock, FaUser, FaUserPlus } from "react-icons/fa";
import Login from "./Login";

const Registration = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.password) {
      setMessage("Please complete all fields before registering.");
      return;
    }

    localStorage.setItem("Name", JSON.stringify(form.name.trim()));
    localStorage.setItem("Email", JSON.stringify(form.email.trim()));
    localStorage.setItem("Password", JSON.stringify(form.password));
    setMessage("Registration saved in this browser.");
    setForm({ name: "", email: "", password: "" });
    setTimeout(() => setShowLogin(true), 450);
  };

  if (showLogin) {
    return <Login onBack={() => setShowLogin(false)} />;
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span className="form-icon"><FaUserPlus /></span><p className="eyebrow">Create an account</p><h2>Register</h2><p>Start with your name, email, and a password.</p></div>
      <label htmlFor="name"><FaUser /> Full name</label>
      <input id="name" name="name" type="text" value={form.name} placeholder="Enter your full name" onChange={updateField} />
      <label htmlFor="email"><FaEnvelope /> Email address</label>
      <input id="email" name="email" type="email" value={form.email} placeholder="Enter your email" onChange={updateField} />
      <label htmlFor="password"><FaLock /> Password</label>
      <input id="password" name="password" type="password" value={form.password} placeholder="Create a password" onChange={updateField} />
      <button className="submit-button" type="submit">Register <FaArrowRight /></button>
      {message && <p className={message.startsWith("Registration") ? "form-message success" : "form-message error"} role="alert">{message}</p>}
      <button className="switch-button" type="button" onClick={() => setShowLogin(true)}>Already registered? Sign in</button>
    </form>
  );
};

export default Registration;
