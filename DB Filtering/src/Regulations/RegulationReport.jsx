import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./ReportDesign.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import TopBar from "../CommonComponents/TopBar";

const RegulationReport = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const regulations = location.state?.regulations || [];

  const handleDownloadClick = () => {
    let reportContent = "Regulation Report\n\n";

    regulations.forEach((reg, index) => {
      reportContent += `Clause ${reg.clause_number} - ${reg.category} (${reg.sub_category})\n`;
      reportContent += `${reg.full_text}\n\n`;
    });

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Regulation_Report.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <TopBar />
      <main className={styles.mainContent}>
        <div className={styles.contentArea}>
          <h1 className={styles.title}>Regulation Report</h1>
          {regulations.length > 0 ? (
            <div className={styles.reportContent}>
              {regulations.map((reg) => (
                <div key={reg.clause_number} className={styles.regulationItem}>
                  <h4>
                    Clause {reg.clause_number} - {reg.category} (
                    {reg.sub_category})
                  </h4>
                  <p>{reg.full_text}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No regulations selected.</p>
          )}
          <button
            className={styles.downloadButton}
            onClick={handleDownloadClick}
          >
            DOWNLOAD REPORT
          </button>
        </div>
      </main>
    </div>
  );
};

export default RegulationReport;
