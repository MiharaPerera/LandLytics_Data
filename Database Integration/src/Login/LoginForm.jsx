import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/about"); // Redirect after login
    } else {
      alert("Please enter your credentials");
    }
  };

  return (
      <div className={styles.rightSection}>
        <h2 className={styles.loginTitle}>Log in to your Account</h2>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Username or Email Address</label>
            <div className={styles.inputContainer}>
              <i className="ti ti-mail icon"></i>
              <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.inputField}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <div className={styles.inputContainer}>
              <i className="ti ti-lock icon"></i>
              <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.inputField}
              />
            </div>
          </div>

          <div className={styles.rememberForgotRow}>
            <label className={styles.rememberMe}>
              <input type="checkbox" />
              Remember Me
            </label>
            <a href="/signup" className={styles.forgotPassword}>Forgot Password?</a>
          </div>

          <button type="submit" className={styles.loginButton}>Login</button>
        </form>
        <p className={styles.signupRedirect}>
          Don't have an account? <a href="/signup" className={styles.signupLink}>Create an account</a>
        </p>
      </div>
  );
}

export default LoginForm;


