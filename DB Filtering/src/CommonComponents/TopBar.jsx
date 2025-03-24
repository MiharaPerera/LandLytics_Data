import React from "react";
import styles from "./TopBar.module.css";
// import {useNavigate} from "react-router-dom";

function TopBar() {
//     const navigate = useNavigate();
    return (
        <header className={styles.topBar}>
            <img src="/assets/profileIcon.png" alt="Regulations icon" className={styles.img3}/>
        </header>
    );
}

export default TopBar;
