import React from "react";
import styles from "./SAMPLE_REG_MAIN.module.css";

function ZonalCard({
  name,
  imageUrl,
  className,
  containerClassName,
  nameClassName,
  zonalClassName,
  isSmall = false,
  onClick
}) {
  return (
    <article className={className} onClick={onClick}>
      <div className={containerClassName}>
        <img
          src={imageUrl}
          alt={`${name} zone`}
          className={isSmall ? styles.img6 : styles.img4}
        />
        <h3 className={nameClassName}>
          {name}
          <br />
        </h3>
        <p className={zonalClassName}>ZONAL</p>
      </div>
    </article>
  );
}

export default ZonalCard;