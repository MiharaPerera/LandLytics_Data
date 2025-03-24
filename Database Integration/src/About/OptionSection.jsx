import React from "react";
import { Link } from "react-router-dom";
import styles from "./SAMPLE_ABOUT.module.css";

const OptionCard = ({ backgroundSrc, text, link }) => {
  return (
    <div className={styles.optionCard}>
      <Link to={link} className={styles.optionCardLink}>
          <div className={styles.optionContent}>
            <img
              src={backgroundSrc}
              alt={`${text} background`}
              className={styles.optionBackground}
            />
            <div className={styles.optionTextWrapper}>
              <p className={styles.optionText}>{text}</p>
            </div>
          </div>
      </Link>
    </div>

  );
};

const OptionsSection = () => {
  return (
    <section>
      <h2 className={styles.lookingForTitle}>
        What are you looking for today?
      </h2>
      <div className={styles.optionsContainer}>
        <OptionCard
          backgroundSrc="./assets/filteredRegulationReport.png"
          text="FILTERED REGULATIONS REPORT"
          link="/regulations"
        />
        <OptionCard
          backgroundSrc="./assets/environmentalRiskReport.png"
          text="ENVIRONMENTAL RISK ANALYSIS"
          link="/risk-maps"
        />
        <OptionCard
          backgroundSrc="./assets/propertyPlanAnnotaion.png"
          text="PROPERTY PLAN ANNOTATION"
          link="/plan-annotations"
        />
        <OptionCard
          backgroundSrc="./assets/chatbot.png"
          text="AI CHATBOT"
          link="/ai-chatbot"
        />
      </div>
    </section>
  );
};

export default OptionsSection;