import React from "react";
import Sidebar from "../CommonComponents/Sidebar";
import MainContent from "./MainContent";
import styles from "./SampleRiskMapMain.module.css";

function SampleRiskMapMain() {
  return (
    <div className={styles.riskMapContainer}>
      <div className={styles.contentWrapper}>
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default SampleRiskMapMain;
