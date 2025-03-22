import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SAMPLE_REG_MAIN.module.css";
import ZonalCard from "./ZonalCard";

function ZonalGrid() {
  const navigate = useNavigate();

  const largeTwoColumnZonalData = [
    {
      id: 1,
      name: "COLOMBO",
      imageUrl:
        "./assets/colombo.png",
      className: styles.colombozonal,
      containerClassName: styles.div5,
      nameClassName: styles.colombo,
      zonalClassName: styles.zonal,
      columnClassName: styles.column3,
    },
    {
      id: 2,
      name: "KALUTARA",
      imageUrl:
        "./assets/kalutara.png",
      className: styles.kalutarazonal,
      containerClassName: styles.div6,
      nameClassName: styles.kalutara,
      zonalClassName: styles.zonal,
      columnClassName: styles.column4,
    },
  ];

  const smallTwoColumnZonalData = [
    {
      id: 3,
      name: "JAFFNA",
      imageUrl:
        "./assets/jaffna.png",
      className: styles.jaffnazonal,
      containerClassName: styles.div8,
      nameClassName: styles.jaffna,
      zonalClassName: styles.zonal2,
    },
    {
      id: 4,
      name: "BADULLA",
      imageUrl:
        "./assets/badulla.png",
      className: styles.badullazonal,
      containerClassName: styles.div9,
      nameClassName: styles.badulla,
      zonalClassName: styles.zonal3,
    },
  ];

  const additionalZonalData = [
    {
      id: 5,
      name: "GALLE",
      imageUrl:
        "./assets/galle.png",
      className: styles.gallezonal,
      containerClassName: styles.div10,
      nameClassName: styles.galle,
      zonalClassName: styles.zonal4,
    },
    {
      id: 6,
      name: "CENTRAL PLAINS",
      imageUrl:
        "./assets/centralhighlands.png",
      className: styles.centralzonal,
      containerClassName: styles.div11,
      nameClassName: styles.central,
      zonalClassName: styles.zonal5,
    },
  ];

  const handleZonalCardClick = (zonalName) => {
    // Navigate to a specific zonal page or show details
    navigate(`/zonal/${zonalName.toLowerCase()}`);
  };

  return (
    <>
      {/* First row - large cards */}
      <div className={styles.div4}>
        <div className={styles.div}>
          {largeTwoColumnZonalData.map((zonal) => (
            <div key={zonal.id} className={zonal.columnClassName}>
              <ZonalCard
                name={zonal.name}
                imageUrl={zonal.imageUrl}
                className={zonal.className}
                containerClassName={zonal.containerClassName}
                nameClassName={zonal.nameClassName}
                zonalClassName={zonal.zonalClassName}
                onClick={() => handleZonalCardClick(zonal.name)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second row - small cards */}
      <div className={styles.div7}>
        {smallTwoColumnZonalData.map((zonal) => (
          <ZonalCard
            key={zonal.id}
            name={zonal.name}
            imageUrl={zonal.imageUrl}
            className={zonal.className}
            containerClassName={zonal.containerClassName}
            nameClassName={zonal.nameClassName}
            zonalClassName={zonal.zonalClassName}
            isSmall={true}
            onClick={() => handleZonalCardClick(zonal.name)}
          />
        ))}
      </div>

      {/* Third row - additional cards */}
      <div className={styles.div7}>
        {additionalZonalData.map((zonal) => (
          <ZonalCard
            key={zonal.id}
            name={zonal.name}
            imageUrl={zonal.imageUrl}
            className={zonal.className}
            containerClassName={zonal.containerClassName}
            nameClassName={zonal.nameClassName}
            zonalClassName={zonal.zonalClassName}
            isSmall={true}
            onClick={() => handleZonalCardClick(zonal.name)}
          />
        ))}
      </div>
    </>
  );
}

export default ZonalGrid;