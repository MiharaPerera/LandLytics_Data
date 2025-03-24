import React from "react";
import styles from "./MapSection.module.css";
import LeafletMap from "./LeafletMap";

function MapSection() {
  return (
    <section className={styles.mapContainer}>
      <div className={styles.mapFrame}>
        <LeafletMap />
      </div>
    </section>
  );
}

export default MapSection;
