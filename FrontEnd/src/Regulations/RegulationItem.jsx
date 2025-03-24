import React from "react";
import styles from "./ReportDesign.module.css";

// Receiving regulation text and citations from the array in Regulation Report Page
const RegulationItem = ({ text, citation }) => {
  return (
    <article className={styles.article}>
      <p className={styles.regText}>{text}</p>
      <cite className={styles.regCite}>{citation}</cite>
    </article>
  );
};

export default RegulationItem;