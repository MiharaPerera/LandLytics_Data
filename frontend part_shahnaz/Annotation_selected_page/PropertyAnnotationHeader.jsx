import React from "react";
import styles from "./ANNOTATIONS_SELECTED_PAGE.module.css";

function PropertyAnnotationHeader() {
  return (
    <header className={styles.upperbar}>
      <h1 className={styles.annotateproperty}>ANNOTATE PROPERTY</h1>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/8df92ea44e644e7c8ba9a5fb0344ac83/c56b8fa2c1789b1f2d3a49b5352ee6de37326fce5408f486ecf0750c75584e12?placeholderIfAbsent=true"
        alt="Property annotation icon"
        className={styles.img2}
      />
    </header>
  );
}

export default PropertyAnnotationHeader;
