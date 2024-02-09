import styles from "./sub-frame-a.module.css";

const SubFrameA = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.someOfOurClientsWrapper}>
        <h1 className={styles.someOfOur}>Some Of Our Clients</h1>
      </div>
      <div className={styles.frameGroup}>
        <div className={styles.rectangleParent}>
          <img
            className={styles.frameChild}
            loading="eager"
            alt=""
            src="/rectangle-14@2x.png"
          />
          <img
            className={styles.frameItem}
            loading="eager"
            alt=""
            src="/rectangle-15@2x.png"
          />
        </div>
        <div className={styles.rectangleWrapper}>
          <img
            className={styles.frameInner}
            loading="eager"
            alt=""
            src="/rectangle-16@2x.png"
          />
        </div>
        <div className={styles.rectangleContainer}>
          <img
            className={styles.rectangleIcon}
            loading="eager"
            alt=""
            src="/rectangle-17@2x.png"
          />
        </div>
        <div className={styles.rectangleFrame}>
          <img
            className={styles.frameChild1}
            loading="eager"
            alt=""
            src="/rectangle-18@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default SubFrameA;
