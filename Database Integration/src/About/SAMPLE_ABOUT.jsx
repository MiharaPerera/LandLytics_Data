import React from "react";
import styles from "./SAMPLE_ABOUT.module.css";
import Sidebar from "../CommonComponents/Sidebar";
import TopBar from "./TopBar";
import HeroSection from "./Hero";
import OptionsSection from "./OptionSection";

function SAMPLE_ABOUT() {
    return (
        <div className={styles.sampleAbout}>
            <Sidebar />
            <div className={styles.mainContent}>
                <TopBar />
                <HeroSection />
                <OptionsSection />
            </div>
        </div>
    );
}

export default SAMPLE_ABOUT;