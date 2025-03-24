import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
  const location = useLocation();

  return (
      <aside className={styles.sidebarColumn}> {/*Creating a sidebar column on the left side*/}
        <nav className={styles.sidebar}>
          <div className={styles.logoContainer}>
            <img
                src="/assets/Light%20BG%20JPG.png"
                alt="Logo"
                className={styles.logo}
            />
          </div>
          <ul className={styles.navLinks}> {/*Adding a list of links for the navigation sidebar*/}
            <li className={location.pathname === "/about" ? styles.active : ""}>
              <Link to="/about">ABOUT</Link>
            </li>
            <li className={location.pathname === "/regulations" || location.pathname === "/regulation-filter" || location.pathname === "/regulation-report" ? styles.active : ""}>
              <Link to="/regulations">REGULATIONS</Link>
            </li>
            <li className={location.pathname === "/risk-maps" ? styles.active : ""}>
              <Link to="/risk-maps">RISK MAPS</Link>
            </li>
            <li className={location.pathname === "/plan-annotations" ? styles.active : ""}>
              <Link to="/plan-annotations">PLAN ANNOTATIONS</Link>
            </li>
            <li className={location.pathname === "/ai-chatbot" ? styles.active : ""}>
              <span>AI CHATBOT</span>
            </li>
          </ul>
        </nav>
      </aside>
  );
}

export default Sidebar;
