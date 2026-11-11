import { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaEnvelope, FaLock, FaSignInAlt } from "react-icons/fa";
import Home from "./Home";

const Login = ({ registeredAccount, onBack }) => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "", form: "" }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = {};
    const email = form.email.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = "Enter a valid email address.";
    if (!form.password) nextErrors.password = "Enter your demo password.";
    if (!registeredAccount) nextErrors.form = "Register a demo account on this page first.";
    else if (email && form.password && (email !== registeredAccount.email || form.password !== registeredAccount.password)) {
      nextErrors.form = "The email or password does not match this page's demo registration.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setForm({ email: "", password: "" });
    setLoggedIn(true);
  };

  if (loggedIn) {
    return <Home onLogout={() => setLoggedIn(false)} />;
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit} noValidate autoComplete="off">
      <div className="form-heading"><span className="form-icon"><FaSignInAlt aria-hidden="true" /></span><p className="eyebrow">Welcome back</p><h2>Sign in</h2><p>Use this page's in-memory demo registration.</p></div>
      <label htmlFor="login-email"><FaEnvelope aria-hidden="true" /> Email address</label>
      <input id="login-email" name="email" type="email" autoComplete="off" required aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "login-email-error" : undefined} value={form.email} placeholder="Enter your email" onChange={updateField} />
      {errors.email && <p id="login-email-error" className="form-message error" role="alert">{errors.email}</p>}
      <label htmlFor="login-password"><FaLock aria-hidden="true" /> Demo password</label>
      <input id="login-password" name="password" type="password" autoComplete="off" required aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? "login-password-error" : undefined} value={form.password} placeholder="Enter your demo password" onChange={updateField} />
      {errors.password && <p id="login-password-error" className="form-message error" role="alert">{errors.password}</p>}
      <button className="submit-button" type="submit">Sign in <FaArrowRight aria-hidden="true" /></button>
      {errors.form && <p className="form-message error" role="alert">{errors.form}</p>}
      <button className="switch-button" type="button" onClick={onBack}><FaArrowLeft aria-hidden="true" /> Need an account? Register</button>
    </form>
  );
};

export default Login;
