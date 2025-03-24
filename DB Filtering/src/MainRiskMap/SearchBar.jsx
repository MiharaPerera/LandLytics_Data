import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchBar}>
        <img src="/assets/searchIcon.png" alt="Search icon" className={styles.searchIcon}/>
          {/*Creating input field for searcbar*/}
        <input
          type="text"
          placeholder="Locate by address..."
          className={styles.searchInput}
          aria-label="Search address"
        />
      </div>
      <button className={styles.manualButton}>Manual Selection</button>
    </div>
  );
}

export default SearchBar;
