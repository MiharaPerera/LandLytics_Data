import React from "react";
import styles from "./SAMPLE_ABOUT.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <img
        src="/assets/home.PNG"
        alt="Background"
        className={styles.heroBackground}
      />
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Plan your </h1>
        <h2 className={styles.heroSubtitle}>
          property
        </h2>
        <h2 className={styles.heroSubtitle}>
          dreams with
        </h2>
        <h2 className={styles.heroSubtitle}>
          confidence...
        </h2>
        <p className={styles.heroDescription}>We are committed to providing </p>
        <p className={styles.heroSubDescription}>
          sustainable solutions for our clients
        </p>
      </div>
    </section>
  );
};

export default HeroSection;