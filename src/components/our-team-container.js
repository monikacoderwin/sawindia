import styles from "./our-team-container.module.css";

const OurTeamContainer = () => {
  return (
    <section className={styles.ourTeamContainer}>
      <div className={styles.teamText}>
        <h1 className={styles.someOfOur}>Some Of Our Clients</h1>
      </div>
      <div className={styles.beginYourHuntFrame}>
        <div className={styles.awardsRecognitionsContainer}>
          <img
            className={styles.quickLinksText}
            loading="eager"
            alt=""
            src="/rectangle-15@2x.png"
          />
          <img
            className={styles.productsSolutionsRectangle}
            loading="eager"
            alt=""
            src="/rectangle-16@2x.png"
          />
        </div>
        <div className={styles.blogsText}>
          <div className={styles.eventsText}>
            <img
              className={styles.caseStudiesText}
              loading="eager"
              alt=""
              src="/rectangle-17@2x.png"
            />
            <img
              className={styles.caseStudiesText1}
              loading="eager"
              alt=""
              src="/rectangle-18@2x.png"
            />
          </div>
        </div>
        <img
          className={styles.socialIconsContainer}
          loading="eager"
          alt=""
          src="/rectangle-50@2x.png"
        />
      </div>
    </section>
  );
};

export default OurTeamContainer;
