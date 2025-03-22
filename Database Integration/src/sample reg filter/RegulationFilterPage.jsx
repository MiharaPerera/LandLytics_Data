import React, { useState, useEffect } from "react";
import axios from "axios";
import "./RegulationFilter.module.css";

const RegulationFilterPage = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    axios.get("/data").then((response) => setCategories(response.data));
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      axios
        .get(`/data?category=${selectedCategory}`)
        .then((response) => setSubCategories(response.data));
    } else {
      setSubCategories([]);
    }
  }, [selectedCategory]);

  return (
    <div className="app-container">
      <h1>LandLytics Database Search</h1>
      <div className="dropdown-container">
        <div className="dropdown">
          <label>Category</label>
          <select onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select Category...</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        {selectedCategory && (
          <div className="dropdown">
            <label>Sub-Category</label>
            <select>
              <option value="">Select Sub-Category...</option>
              {subCategories.map((subCategory) => (
                <option key={subCategory} value={subCategory}>
                  {subCategory}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegulationFilterPage;
