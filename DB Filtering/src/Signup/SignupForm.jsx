"use client";
import React, {useState} from "react";
import styles from "./SignupPage.module.css";
import {useNavigate} from "react-router-dom";
import { supabase } from "../supabaseClient"; // Importing the supabase client to connect frontend to supabase authentication system

const SignupForm = () => {
  const navigate = useNavigate(); // Hook used to redirect user to another page
  const [username, setUsername] = useState(""); // Hook used to change/set the value to the new value
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValidEmail = (email) => {
      return /\S+@\S+\.\S+/.test(email); // Regex used identify if the entered characters are in the correct format
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Ensuring all fields have been filled
      if (!username || !email || !password || !confirmPassword) {
          alert("Please fill in all fields.");
          return;
      }
      // Ensuring the email format matches the regex
      if (!isValidEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      //Ensuring the password values are the same
      if (password !== confirmPassword) {
          alert("Passwords do not match.");
          return;
      }

      // Using supabase to create a new use in the authentication system
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (error) {
        alert("Signup failed: " + error.message);
      } else {
          console.log("User created:", data.user);
        alert("Signup successful! Check your email for verification.");
        navigate("/about");
      }
  };

  return (
      <section className={styles.rightSection}>
        <h2 className={styles.createAccount}>Create a new account</h2>
          <form onSubmit={handleSubmit}> {/*Creating form with input fields*/}
              <div className={styles.formGroup}>
                  <label className={styles.label}>Username</label>
                  <div className={styles.inputContainer}>
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
