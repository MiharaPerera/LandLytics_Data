"use client";
import React from "react";
import styles from "./ANNOTATIONS_SELECTED_PAGE.module.css";
import Sidebar from "./Sidebar";
import PropertyAnnotationHeader from "./PropertyAnnotationHeader";
import PropertyMapper from "./PropertyMapper";

function AnnotationsSelectedPage() {
  return (
    <div className={styles.annotationsSelectedPage}>
      <div className={styles.div}>
        <div className={styles.column}>
          <Sidebar />
        </div>
        <div className={styles.column2}>
          <main className={styles.div4}>
            <PropertyAnnotationHeader />
            <PropertyMapper />
          </main>
        </div>
      </div>
    </div>
  );
}

export default AnnotationsSelectedPage;
