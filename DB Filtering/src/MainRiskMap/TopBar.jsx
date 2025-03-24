import React from "react";
import styles from "./TopBar.module.css";

function TopBar() {
    return (
        <header className={styles.topBar}>
            <h1 className={styles.title}>FIND POTENTIAL RISKS</h1>
            <img src="/assets/profileIcon.png" alt="Regulations icon" className={styles.img3}/>
        </header>
    );
}

export default TopBar;
