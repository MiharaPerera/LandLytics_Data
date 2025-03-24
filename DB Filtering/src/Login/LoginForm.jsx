import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginPage.module.css";
import { supabase } from "../supabaseClient"; // Importing the supabase client to connect frontend to supabase authentication system

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Authenticating the username and password after the fields are filled
    if (email && password) {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (error) {
        alert("Login failed: " + error.message);
      } else {
        navigate("/about"); // Redirect after login
      }
    } else {
      alert("Please enter your credentials");
    }
  };

  return (
      <div className={styles.rightSection}>
        <h2 className={styles.loginTitle}>Log in to your Account</h2>
        <form onSubmit={handleLogin}> {/*Creating form with input fields*/}
          <div className={styles.formGroup}>
            <label className={styles.label}>Username or Email Address</label>
            <div className={styles.inputContainer}>
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
