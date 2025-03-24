import React, { useState } from "react";
import SearchBar from "./SearchBar";
import MapSection from "./MapSection";
import TopBar from "./TopBar";
import styles from "./MainContent.module.css";

function MainContent() {
  const [showMapSelection, setShowMapSelection] = useState(false);

  const handleManualSelection = () => {
    setShowMapSelection(true);
  };

  return (
    <main className={styles.mainColumn}>
      <div className={styles.contentContainer}>
        <TopBar title="FIND POTENTIAL RISKS" />
        <section className={styles.mainSection}>
          {!showMapSelection && (
            <>
              <h2 className={styles.subtitle}>MAP YOUR PROPERTY...</h2>
              <SearchBar onManualSelection={handleManualSelection} />
              <MapSection />
            </>
          )}
          
          {showMapSelection && (
            <>
              <MapSection fullSize />
            </>
          )}
        </section>
      </div>
    </main>
  );
}

export default MainContent;