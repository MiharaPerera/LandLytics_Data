import React from "react";
import styles from "./TopBar.module.css";
// import {useNavigate} from "react-router-dom";

function TopBar() {
//     const navigate = useNavigate();
    return (
        <header className={styles.topBar}>
            <div className={styles.searchContainer}>
                <div className={styles.searchBar}>
                    <img src="/assets/searchIcon.png" alt="Search icon" className={styles.searchIcon}/>
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.searchInput}
                        aria-label="Search address"
                    />
                </div>
            </div>
            <img src="/assets/profileIcon.png" alt="Regulations icon" className={styles.img3}/>
        </header>
);
}

export default TopBar;
