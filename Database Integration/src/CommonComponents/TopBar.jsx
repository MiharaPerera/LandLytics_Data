import React from "react";
import styles from "./TopBar.module.css";

function TopBar() {
  return (
    <header className={styles.div9}>
      <div className={styles.div10}>
        <svg
          width="1293"
          height="145"
          viewBox="0 0 1293 145"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1293" height="145" fill="#FAF9F8"></rect>
          <path
            d="M1197.87 95C1199.32 93.3859 1206.07 85.9584 1208.04 85.9584H1228.96C1231.82 85.9584 1237.67 92.1153 1239.12 94.2856M1248.5 72.5C1248.5 89.0685 1235.07 102.5 1218.5 102.5C1201.93 102.5 1188.5 89.0685 1188.5 72.5C1188.5 55.9315 1201.93 42.5 1218.5 42.5C1235.07 42.5 1248.5 55.9315 1248.5 72.5ZM1229.25 62.2749C1229.25 56.5514 1224.41 51.875 1218.5 51.875C1212.59 51.875 1207.76 56.5514 1207.76 62.2749C1207.76 67.9983 1212.59 72.6747 1218.5 72.6747C1224.41 72.6747 1229.25 67.9983 1229.25 62.2749Z"
            stroke="#807567"
            strokeWidth="2"
          ></path>
          <ellipse
            cx="1218.5"
            cy="62.8224"
            rx="12.0966"
            ry="12.0968"
            fill="#807567"
          ></ellipse>
          <ellipse
            cx="1218.5"
            cy="91.2502"
            rx="20.5642"
            ry="11.4919"
            fill="#807567"
          ></ellipse>
        </svg>
      </div>
    </header>
  );
}

export default TopBar;