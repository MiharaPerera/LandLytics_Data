"use client";
import React from "react";
import styles from "./ANNOTATIONS_SELECTED_PAGE.module.css";

function PropertyMapper() {
  return (
    <section className={styles.div5}>
      <h2 className={styles.mapyourproperty}>
        MAP YOUR PROPERTY...
      </h2>
      <div className={styles.locatebyaddress}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/c80f4152634236f5917409044dfc804fac8487274c0fcdd651266c16e66c1db1?placeholderIfAbsent=true"
          alt="Search icon"
          className={styles.img3}
        />
        <input
          type="text"
          placeholder="Locate by address..."
          className={styles.amInputDontrename}
        />
      </div>
      <button className={styles.manualselection}>
        Manual Selection
      </button>
      <figure className={styles.mapframe}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/2696251a6d0db8e691be1620366dc37cc782f2fa61ce974d29bbb3f2497031fb?placeholderIfAbsent=true"
          alt="Property map"
          className={styles.img4}
        />
      </figure>
    </section>
  );
}

export default PropertyMapper;
