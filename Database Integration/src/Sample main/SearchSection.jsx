import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SAMPLE_REG_MAIN.module.css";

function SearchSection() {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (searchTerm.trim()) {
        navigate(`/search-results?q=${encodeURIComponent(searchTerm)}`);
      }
    };

  return (
    <section>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <div className={styles.searchbyzone}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/88cadc4378370d081d8b63173825d2ab671c922885297d1afa2ca4dc36620e78?placeholderIfAbsent=true"
            alt="Search icon"
            className={styles.img3}
          />
          <input
            type="text"
            placeholder="Search by zone"
            className={styles.amInputDontrename}
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <button 
          type="button" 
          className={styles.regfilterbutton} 
          onClick={() => navigate("/regulation-filter")}
        >
          TRY REGULATION FILTER
        </button>
      </form>
    </section>
  );
}

export default SearchSection;