import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReportDesign.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import RegulationItem from "./RegulationItem";
import TopBar from "../CommonComponents/TopBar";

const RegulationReport = () => {
  const navigate = useNavigate();

  // Navigating to Download Page on button click
  const handleDownloadClick = () => {
    // Preparing the content for the text file
    let reportContent = "Regulation Report\n\n";

    regulations.forEach((regulation, index) => {
      reportContent += `Regulation ${index + 1}:\n`;
      reportContent += `${regulation.text}\n`;
      reportContent += `Citation: ${regulation.citation}\n\n`;
    });

    // Creating a Blob object  containing the report content
    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob); //Creating a temporary link for browser to download file content
    const a = document.createElement('a');
    a.href = url; // Pointing link to the file to be downloaded
    a.download = 'regulation-report.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a); // Remove the element from DOM once the download starts
    URL.revokeObjectURL(url); // Clean up temporary file address/link after use
    navigate("/download-report");
  };

  // Regulations array. Currently, has dummy text
  const regulations = [
    {
      text: "Where any land exceeds an extent of 0.5 hectare or more and is proposed to be subdivided into more than eight lots, compliance with planning regulations is mandatory.",
      citation: "(Regulation 1 , Clause 7, General Regulations)",
    },
    {
      text: "Subdivisions near roads, rivers, or water bodies must meet additional environmental and planning conditions imposed by the Authority.",
      citation: "(Regulation 5 , Clause 17, General Regulations)",
    },
    {
      text: "Non-residential sites require roads at least 9m wide, and residential lots must comply with minimum road access width regulations.",
      citation: "(Regulation 6 , Clause 18, General Regulations)",
    },
    {
      text: "Subdivisions over 1 hectare must allocate at least 10% of the land (excluding roads) for community/recreational spaces.",
      citation: "(Regulation 8 , Clause 23, General Regulations)",
    },
    {
      text: "For residential subdivisions with lots of at least 1012m² and only two housing units, the 10% community space rule may be waived.",
      citation: "(Regulation 9 , Clause 25, General Regulations)",
    },
    {
      text: "Development Permit is valid for one year, extendable for up to two additional years if work has started.\tDevelopment Permits valid up to three years",
      citation: "(Regulation 10 , Clause 30, General Regulations)",
    },
    {
      text: "Site plans must include boundaries, road access, drainage, and flood levels.",
      citation: "(Regulation 11 , Clause 34, General Regulations)",
    },
    {
      text: "Buildings over 15m or with 5+ residential units must comply with fire safety regulations.",
      citation: "(Regulation 12 , Clause 41, General Regulations)",
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <TopBar />

        <section>
          <h1 className={styles.completeStatus}>REPORT COMPLETE!</h1>
          <p className={styles.regCount}>Applicable regulations identified:</p>

          <section className={styles.regContainer}>
            <h2 className={styles.regType}>General Regulations</h2>

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
