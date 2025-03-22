import React from "react";
import styles from "./LoginPage.module.css";

function InputField({ type, placeholder, value, onChange, iconClass }) {
    return (
        <div className={styles.inputContainer}>
            <i className={styles[iconClass]}></i>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={styles.inputField}
                required
            />
        </div>
    );
}

export default InputField;
