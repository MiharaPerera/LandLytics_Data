import React from "react";
import styles from "./SignupPage.module.css";

const LeftSection = () => {
    return (
      <section className={styles.leftSection}>
          <div className={styles.imageSection}>
              <img src="/assets/loginSignupImage.png" alt="Signup Background"/>
          </div>
          <div className={styles.overlay}>
              <img src="/assets/Light%20BG%20JPG.png" alt="Logo" className={styles.logoImage}/>
              <p className={styles.tagline}>
                  Plan your property dreams
                  <br/>
                  with confidence...
              </p>
          </div>
      </section>
  );
};

export default LeftSection;
