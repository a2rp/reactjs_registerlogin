import { useState } from "react";
import { FaArrowRight, FaEnvelope, FaLock, FaUser, FaUserPlus } from "react-icons/fa";
import Login from "./Login";

const Registration = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [registeredAccount, setRegisteredAccount] = useState(null);
  const [showLogin, setShowLogin] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();

    if (!form.name.trim()) nextErrors.name = "Enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (form.password.length < 8) nextErrors.password = "Use at least 8 characters for this demo password.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setRegisteredAccount({ email, password: form.password });
    setForm({ name: "", email: "", password: "" });
    setShowLogin(true);
  };

  if (showLogin) {
    return <Login registeredAccount={registeredAccount} onBack={() => setShowLogin(false)} />;
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate autoComplete="off">
      <div className="form-heading"><span className="form-icon"><FaUserPlus aria-hidden="true" /></span><p className="eyebrow">Create a demo account</p><h2>Register</h2><p>Use fictional details; they stay in memory until you reload.</p></div>
      <label htmlFor="name"><FaUser aria-hidden="true" /> Full name</label>
      <input id="name" name="name" type="text" autoComplete="off" required aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} value={form.name} placeholder="Enter your full name" onChange={updateField} />
      {errors.name && <p id="name-error" className="form-message error" role="alert">{errors.name}</p>}
      <label htmlFor="email"><FaEnvelope aria-hidden="true" /> Email address</label>
      <input id="email" name="email" type="email" autoComplete="off" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} value={form.email} placeholder="Enter your email" onChange={updateField} />
      {errors.email && <p id="email-error" className="form-message error" role="alert">{errors.email}</p>}
      <label htmlFor="password"><FaLock aria-hidden="true" /> Demo password</label>
      <input id="password" name="password" type="password" autoComplete="off" required minLength={8} aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "password-error" : undefined} value={form.password} placeholder="At least 8 characters" onChange={updateField} />
      {errors.password && <p id="password-error" className="form-message error" role="alert">{errors.password}</p>}
      <button className="submit-button" type="submit">Register <FaArrowRight aria-hidden="true" /></button>
      <button className="switch-button" type="button" onClick={() => setShowLogin(true)}>Already registered? Sign in</button>
    </form>
  );
};

export default Registration;
