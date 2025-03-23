import React from "react";
import styles from "./SignupPage.module.css";
import SignupForm from "./SignupForm";
import LeftSection from "./LeftSection";

function SignupPage() {
  return (
      <div>
          <div className={styles.signupContainer}>
              <div className={styles.signupCard}>
                  <LeftSection/>
                  <SignupForm/>
              </div>
          </div>
      </div>
  );
}

export default SignupPage;
