import React from "react";
import styles from "./SAMPLE_REG_MAIN.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import TopBar from "./TopBar";
import SearchSection from "./SearchSection";
import ZonalGrid from "./ZonalGrid";

function SAMPLE_REG_MAIN() {
  return (
    <main className={styles.sampleRegMain}>
      <TopBar />
      <Sidebar />
      <div className={styles.mainContainer}>
        <div className={styles.column2}>
          <div className={styles.div3}>
            <SearchSection />
            <ZonalGrid />
          </div>
        </div>
      </div>
    </main>
  );
}

export default SAMPLE_REG_MAIN;