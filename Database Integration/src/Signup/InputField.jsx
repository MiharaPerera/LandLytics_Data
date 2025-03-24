import React from "react";
import styles from "./SignupPage.module.css";

const InputField = ({ label, type, placeholder, icon }) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputContainer}>
        <i className={`${styles.i} ${icon}`} />
        <input
          type={type}
          placeholder={placeholder}
          className={styles.inputField}
        />
      </div>
    </div>
  );
};

export default InputField;
