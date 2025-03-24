import React from "react";
import styles from "./LoginPage.module.css";
import LeftSection from "./LeftSection";
import LoginForm from "./LoginForm";

function LoginPage() {
    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginCard}>
                <LeftSection/>
                <LoginForm/>
            </div>
        </div>
    );
}

export default LoginPage;


