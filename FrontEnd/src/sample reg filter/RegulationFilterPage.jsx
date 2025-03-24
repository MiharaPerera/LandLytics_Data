import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FilterDropdown from "./FilterDropdown";
import styles from "./RegulationFilter.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import TopBar from "./TopBar";


function RegulationFilterPage() {
  const navigate = useNavigate();

  // Arrays for the items in each dropdown menu
  const subdivisionItems = ["General Requirements", "Survey Requirements", "Survey Plan Standards", "Plot Size Regulations"];
  const developmentItems = ["Street", "Road and Water Body Compliance"];
  const infrastructureItems = ["Road Access Rules"];
  const communityItems = ["Community Space Requirement"];
  const residentialItems = ["Subdivision Exemption"];
  const buildingItems = ["Development Permit Validity"];
  const planningItems = ["Site Plan Requirements"];
  const safetyItems = ["Fire Safety Compliance"];

  const [filters, setFilters] = useState({ // useState used to change from the default value
      subdivision: "",
      development: "",
      infrastructure: "",
      community: "",
      residential: "",
      building: "",
      planning: "",
      safety: "",
    });

  const handleFilterChange = (category, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [category]: value,
      }));
    };
  const handleGenerateReport = () => { // Redirecting user to another page on button click
      navigate("/regulation-report", { state: { filters } });
    };

  return (
      <div className={styles.container}>
          <div>
              <Sidebar/>
              <TopBar/>

          </div>
          <main className={styles.mainContent}>
              <div className={styles.contentArea}>
                  <h1 className={styles.title}>FILTER REGULATIONS BY...</h1>
                  <div>
                      <h3>Land Subdivision</h3>
                      <FilterDropdown placeholderText="Eg: General Requirements" items={subdivisionItems}
                                      onChange={(value) => handleFilterChange("subdivision", value)}/>
                      <br/>
                      <h3>Land Development</h3>
                      <FilterDropdown placeholderText="Eg: Street" items={developmentItems}
                                      onChange={(value) => handleFilterChange("development", value)}/>
                      <br/>
                      <h3>Infrastructure</h3>
                      <FilterDropdown placeholderText="Eg: Road Access Rules" items={infrastructureItems}
                                      onChange={(value) => handleFilterChange("infrastructure", value)}/>
                      <br/>
                      <h3>Community and Recreation</h3>
                      <FilterDropdown placeholderText="Eg: Community Space Requirement" items={communityItems}
                                      onChange={(value) => handleFilterChange("community", value)}/>
                      <br/>
                      <h3>Residential Development</h3>
                      <FilterDropdown placeholderText="Eg: Subdivision Exemption" items={residentialItems}
                                      onChange={(value) => handleFilterChange("residential", value)}/>
                      <br/>
                      <h3>Building Development</h3>
                      <FilterDropdown placeholderText="Eg: Development Permit Validity" items={buildingItems}
                                      onChange={(value) => handleFilterChange("building", value)}/>
                      <br/>
                      <h3>Planning and Surveying</h3>
                      <FilterDropdown placeholderText="Eg: Site Plan Requirements" items={planningItems}
                                      onChange={(value) => handleFilterChange("planning", value)}/>
                      <br/>
                      <h3>Building Safety</h3>
                      <FilterDropdown placeholderText="Eg: Fire Safety Compliance" items={safetyItems}
                                      onChange={(value) => handleFilterChange("safety", value)}/>
                      <br/><br/>

                      <button className={styles.generateReportButton} onClick={handleGenerateReport}>
                          GENERATE REPORT
                      </button>
                  </div>
              </div>
          </main>
      </div>
  );
}

export default RegulationFilterPage;
