"use client";
import React from "react";
import styles from "./SAMPLE_REG_MAIN.module.css";
import Sidebar from "./Sidebar";
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
                src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/c56b8fa2c1789b1f2d3a49b5352ee6de37326fce5408f486ecf0750c75584e12?placeholderIfAbsent=true"
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
