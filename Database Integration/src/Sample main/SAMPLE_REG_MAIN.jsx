import React from "react";
import styles from "./SAMPLE_REG_MAIN.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import SearchSection from "./SearchSection";
import ZonalGrid from "./ZonalGrid";

function SAMPLE_REG_MAIN() {
  return (
    <main className={styles.sampleRegMain}>
      <div className={styles.div}>
        <div className={styles.column}>
          <Sidebar />
        </div>
        <div className={styles.column2}>
          <div className={styles.div3}>
            <header className={styles.upperbar}>
              <h1 className={styles.findregulations}>FIND REGULATIONS</h1>
              <img
                src="./assets/profileIcon.png"
                alt="Regulations icon"
                className={styles.img2}
              />
            </header>
            <SearchSection />
            <ZonalGrid />
          </div>
        </div>
      </div>
    </main>
  );
}

export default SAMPLE_REG_MAIN;