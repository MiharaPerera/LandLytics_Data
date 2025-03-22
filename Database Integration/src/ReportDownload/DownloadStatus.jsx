import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./DownloadDesign.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import TopBar from "../Regulations/TopBar";

export function DownloadStatus() {
    const navigate = useNavigate(); //Initialize navigation function
    const [countdown, setCountdown] = useState(10); //Set countdown (change to 15 if needed)

    const sectionStyle = {
        background: `#d3d3d3 url("/assets/downloadBG.png") center / cover no-repeat`,
    };

    useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    //Redirect back to Regulation Report when countdown reaches 0
    if (countdown === 0) {
      navigate("/regulation-report");
    }

    return () => clearInterval(timer);
    }, [countdown, navigate]);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//           navigate("/regulation-report"); // Redirect back after 10 seconds
//         }, 10000);
//
//         return () => clearTimeout(timer); // Cleanup timer
//       }, [navigate]);

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