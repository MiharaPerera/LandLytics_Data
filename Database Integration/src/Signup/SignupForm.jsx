"use client";
import React, {useState} from "react";
import styles from "./SignupPage.module.css";
import {useNavigate} from "react-router-dom";

const SignupForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValidEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (!username || !email || !password || !confirmPassword) {
          alert("Please fill in all fields.");
          return;
      }

      if (!isValidEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
      }

      navigate("/about");
  };

  return (
      <section className={styles.rightSection}>
        <h2 className={styles.createAccount}>Create a new account</h2>
          <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                  <label className={styles.label}>Username</label>
                  <div className={styles.inputContainer}>
                      <i className="ti ti-user icon"></i>
                      <input
                          type="text"
                          placeholder="Username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className={styles.inputField}
                      />
                  </div>
              </div>
              <div className={styles.formGroup}>
                  <label className={styles.label}>Email Address</label>
                  <div className={styles.inputContainer}>
                      <i className="ti ti-mail icon"></i>
                      <input
                          type="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
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
                          className={styles.inputField}
                      />
                  </div>
              </div>
              <div className={styles.formGroup}>
                  <label className={styles.label}>Confirm Password</label>
                  <div className={styles.inputContainer}>
                      <i className="ti ti-lock icon"></i>
                      <input
                          type="password"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className={styles.inputField}
                      />
                  </div>
              </div>
              <button type="submit" className={styles.signupButton}>Sign Up</button>
          </form>
          <p className={styles.loginRedirect}>
              Already have an account?{" "}
              <span className={styles.loginLink} onClick={() => navigate("/login")}>
              Login here
            </span>
          </p>
      </section>
  );
};

export default SignupForm;
