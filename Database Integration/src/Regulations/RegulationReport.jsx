import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReportDesign.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import RegulationItem from "./RegulationItem";
import TopBar from "./TopBar";

const RegulationReport = () => {
  const navigate = useNavigate();

  const handleDownloadClick = () => {
      navigate("/download-report"); // Ensure the correct route is used
  };

  //this will be an empty array in the final output. Will have to find a way to display the relevant regulations when integrating frontend with backend
  const regulations = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at congue mauris, vel lacinia magna. Pellentesque vel sem et eros porta rutrum. Vivamus mattis ullamcorper mi at convallis. Mauris tempor imperdiet.",
      citation: "(Regulation 34.c. , Document D12-A, Colombo Zonal)",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at congue mauris, vel lacinia magna. Pellentesque vel sem et eros porta rutrum. Vivamus mattis ullamcorper mi at convallis. Mauris tempor imperdiet.",
      citation: "(Regulation 34.c. , Document D12-A, Colombo Zonal)",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at congue mauris, vel lacinia magna. Pellentesque vel sem et eros porta rutrum. Vivamus mattis ullamcorper mi at convallis. Mauris tempor imperdiet.",
      citation: "(Regulation 34.c. , Document D12-A, Colombo Zonal)",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at congue mauris, vel lacinia magna. Pellentesque vel sem et eros porta rutrum. Vivamus mattis ullamcorper mi at convallis. Mauris tempor imperdiet.",
      citation: "(Regulation 34.c. , Document D12-A, Colombo Zonal)",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <TopBar />

        <section>
          <h1 className={styles.completeStatus}>REPORT COMPLETE!</h1>
          <p className={styles.regCount}>23 applicable regulations identified</p>

          <section className={styles.regContainer}>
            <h2 className={styles.regType}>Zonal Regulations</h2>

            {regulations.map((regulation, index) => (
              <RegulationItem key={index} text={regulation.text} citation={regulation.citation}/>
            ))}
          </section>

          <div className={styles.viewReport}>
            <span>View Report »</span>
          </div>

          <button className={styles.downloadButton} onClick={handleDownloadClick}>DOWNLOAD REPORT</button>
        </section>
    </div>
  );
};

export default RegulationReport;
