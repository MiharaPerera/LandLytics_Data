import React from "react";
import styles from "./SAMPLE_REG_MAIN.module.css";
import ZonalCard from "./ZonalCard";

function ZonalGrid() {

  const largeTwoColumnZonalData = [
    {
      id: 1,
      name: "COLOMBO",
      imageUrl: "./assets/colombo.png",
      className: styles.colombozonal,
      containerClassName: styles.div5,
      nameClassName: styles.colombo,
      zonalClassName: styles.zonal,
      columnClassName: styles.column3,
      url: "https://www.uda.gov.lk/attachments/dev-plans-2021-2030/colombo_eng.pdf"
    },
    {
      id: 2,
      name: "KALUTARA",
      imageUrl: "./assets/kalutara.png",
      className: styles.kalutarazonal,
      containerClassName: styles.div6,
      nameClassName: styles.kalutara,
      zonalClassName: styles.zonal,
      columnClassName: styles.column4,
      url: "https://www.uda.gov.lk/attachments/dev-plans-2021-2030/Kalutara%20Development%20Plan%20-%20English.pdf"
    },
  ];

  const smallTwoColumnZonalData = [
    {
      id: 3,
      name: "JAFFNA",
      imageUrl: "./assets/jaffna.png",
      className: styles.jaffnazonal,
      containerClassName: styles.div8,
      nameClassName: styles.jaffna,
      zonalClassName: styles.zonal2,
      url: "https://www.uda.gov.lk/attachments/dev-plans-2023-2033/Killinochchienglish240619.pdf"
    },
    {
      id: 4,
      name: "BADULLA",
      imageUrl: "./assets/badulla.png",
      className: styles.badullazonal,
      containerClassName: styles.div9,
      nameClassName: styles.badulla,
      zonalClassName: styles.zonal3,
      url: "https://www.uda.gov.lk/attachments/dev-plans-2021-2030/Badulla%20Development%20Plan%20-%20English.pdf"
    },
  ];

  const additionalZonalData = [
    {
      id: 5,
      name: "GALLE",
      imageUrl: "./assets/galle.png",
      className: styles.gallezonal,
      containerClassName: styles.div10,
      nameClassName: styles.galle,
      zonalClassName: styles.zonal4,
      url: "https://www.uda.gov.lk/attachments/dev-plans-2023-2033/gallport.pdf"
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
      url: "https://www.uda.gov.lk/attachments/dev-plans-2021-2030/Kandy%20Development%20Plan%20-%20English.pdf"
    },
  ];

  const handleZonalCardClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <div className={styles.div7}>
          {largeTwoColumnZonalData.map((zonal) => (
              <ZonalCard
                  key={zonal.id}
                name={zonal.name}
                imageUrl={zonal.imageUrl}
                className={zonal.className}
                containerClassName={zonal.containerClassName}
                nameClassName={zonal.nameClassName}
                zonalClassName={zonal.zonalClassName}
                onClick={() => handleZonalCardClick(zonal.url)}
              />
          ))}
      </div>

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
            onClick={() => handleZonalCardClick(zonal.url)}
          />
        ))}
      </div>

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
            onClick={() => handleZonalCardClick(zonal.url)}
          />
        ))}
      </div>
    </>
  );
}

export default ZonalGrid;