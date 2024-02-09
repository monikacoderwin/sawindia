import styles from "./awards-section.module.css";

const AwardsSection = () => {
  return (
    <section className={styles.awardsSection}>
      <div className={styles.awardsSectionChild} />
      <h1 className={styles.awardsAndRecognitions}>Awards And Recognitions</h1>
      <div className={styles.clientList}>
        <img
          className={styles.clientListChild}
          loading="eager"
          alt=""
          src="/rectangle-20@2x.png"
        />
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            loading="eager"
            alt=""
            src="/rectangle-21@2x.png"
          />
          <img
            className={styles.clientsHonorRoll}
            loading="eager"
            alt=""
            src="/rectangle-22@2x.png"
          />
        </div>
        <div className={styles.clientListInner}>
          <img
            className={styles.frameItem}
            loading="eager"
            alt=""
            src="/rectangle-23@2x.png"
          />
        </div>
        <div className={styles.quickLinks}>
          <img
            className={styles.linksSectionIcon}
            loading="eager"
            alt=""
            src="/rectangle-24@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
