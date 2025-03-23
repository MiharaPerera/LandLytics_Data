import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FilterDropdown from "./FilterDropdown";
import axios from "axios";
import styles from "./RegulationFilter.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import TopBar from "./TopBar";

function RegulationFilterPage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState({});
  const [filters, setFilters] = useState({});

  // Fetch categories on load
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  // Fetch sub-categories when a category is selected
  const handleCategoryChange = (category) => {
    if (category) {
      axios
        .get(`http://localhost:5000/api/subcategories?category=${category}`)
        .then((response) => {
          setSubCategories((prev) => ({
            ...prev,
            [category]: response.data,
          }));
        })
        .catch((error) =>
          console.error(`Error fetching sub-categories for ${category}:`, error)
        );
    }
  };

  const handleFilterChange = (category, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [category]: value,
    }));
  };

  const handleGenerateReport = () => {
    axios
      .post("http://localhost:5000/api/regulations", { filters })
      .then((response) => {
        navigate("/regulation-report", { state: { data: response.data } });
      })
      .catch((error) =>
        console.error("Error fetching filtered regulations:", error)
      );
  };

  return (
    <div className={styles.container}>
      <div>
        <Sidebar />
        <TopBar />
      </div>

      <main className={styles.mainContent}>
        <div className={styles.contentArea}>
          <h1 className={styles.title}>FILTER REGULATIONS BY...</h1>

          {categories.map((category) => (
            <div key={category}>
              <h3>{category}</h3>
              <FilterDropdown
                placeholderText={`Eg: Select ${category}`}
                items={subCategories[category] || []}
                onChange={(value) => handleFilterChange(category, value)}
              />
              <br />
            </div>
          ))}

          <button
            className={styles.generateReportButton}
            onClick={handleGenerateReport}
          >
            GENERATE REPORT
          </button>
        </div>
      </main>
    </div>
  );
}

export default RegulationFilterPage;
