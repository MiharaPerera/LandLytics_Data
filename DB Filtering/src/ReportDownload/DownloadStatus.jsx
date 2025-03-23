import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DownloadDesign.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import TopBar from "../CommonComponents/TopBar";

export function DownloadStatus() {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(10);

    const sectionStyle = {
        background: `#d3d3d3 url("/assets/downloadBG.png") center / cover no-repeat`,
    };

    // Creates an countdown timer to control automatic page redirection
    useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1); // Setting interval to decrease the countdown every second
    }, 1000);

    //Redirect back to Regulation Report when countdown reaches 0
    if (countdown === 0) {
      navigate("/regulation-report");
    }
    //
    return () => clearInterval(timer);
    }, [countdown, navigate]);

  return (
    <div className={styles.pageContainer}>
        <Sidebar />

        <main className={styles.mainSection} style={sectionStyle}>
          <TopBar />
          <section className={styles.statusCard}>
            <div className={styles.statusContent}>
              <h1 className={styles.statusTitle}>DOWNLOAD COMPLETE!</h1>
              <p className={styles.statusMessage}>
                Redirecting to preview in {countdown}s...
              </p>
            </div>
          </section>
        </main>
    </div>
  );
}

export default DownloadStatus;