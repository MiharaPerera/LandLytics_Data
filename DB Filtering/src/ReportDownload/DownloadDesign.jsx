import * as React from "react";
import styles from "./DownloadDesign.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import TopBar from "../CommonComponents/TopBar";
import { DownloadStatus } from "./DownloadStatus";

function DownloadDesign() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&family=Tiro+Devanagari+Hindi&display=swap"
        rel="stylesheet"
      />
      <div className={styles.pageContainer}>
        <Sidebar />
        <div className={styles.mainContent}>
          <TopBar />
          <DownloadStatus />
        </div>
      </div>
    </>
  );
}

export default DownloadDesign;
