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
          <img src="/assets/searchIcon.png" alt="search icon" className={styles.img3}/>
          <input type="text" placeholder="Search by zone" className={styles.amInputDontrename} value={searchTerm}
            onChange={handleSearch}/>
        </div>
        <button type="button" className={styles.regfilterbutton}
          onClick={() => navigate("/regulation-filter")}>TRY REGULATION FILTER
        </button>
      </form>
    </section>
  );
}

export default SearchSection;