import React from "react";
import styles from "./SAMPLE_ABOUT.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/04c9068d4296d6c8fa07d5ea1c10db7b722abb4077df9e121a45391e04ff62d1?placeholderIfAbsent=true&apiKey=961e21a64e344f339dc230b663f13664"
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