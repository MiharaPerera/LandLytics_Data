import React from "react";
import styles from "./TopBar.module.css";
import {useNavigate} from "react-router-dom";

function TopBar() {
    const navigate = useNavigate();
    return (
        <header className={styles.topBar}>
            <button className={styles.backButton} onClick={() => navigate(-1)}>
                <img src="/assets/backArrow.png"  alt="Back" className={styles.img2}/>
            </button>
            <img src="/assets/profileIcon.png" alt="Regulations icon" className={styles.img3}/>
        </header>
    );
}

export default TopBar;
