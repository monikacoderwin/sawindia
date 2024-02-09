import styles from "./years-of-experience-frame.module.css";

const YearsOfExperienceFrame = () => {
  return (
    <section className={styles.yearsOfExperienceFrame}>
      <div className={styles.yearsOfExperienceFrameChild} />
      <div className={styles.satisfiedClientsFrame}>
        <div className={styles.aboutCompanyBackgroundContainer}>
          <p className={styles.about}>About</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.companyBackground}>
            <b>Company Background</b>
          </p>
          <p className={styles.blankLine1}>
            <b>&nbsp;</b>
          </p>
          <p className={styles.establishedIn1991}>
            Established in 1991, Software At Work (India) Pvt. Ltd. has always
            focussed on providing off-the-shelf software solutions that are
            designed specifically for Small-to-Mid-Enterprise (SME) and
            distributed enterprise markets. Since its inception, Software@Work
            has focused on solutions tailored specifically to the mid-market,
            solving the business software needs and challenges of our clients.
          </p>
        </div>
        <div className={styles.appsAvailableFrame}>
          <div className={styles.yourHuntForBusinessSoftwarParent}>
            <div className={styles.yourHuntForBusinessSoftwar}>
              <div className={styles.awardsAndRecognitionsFrame}>
                <img
                  className={styles.makingSoftwareWorkForSmall}
                  loading="eager"
                  alt=""
                  src="/rectangle-36@2x.png"
                />
                <img
                  className={styles.makingSoftwareWorkForSmall1}
                  loading="eager"
                  alt=""
                  src="/rectangle-37@2x.png"
                />
              </div>
            </div>
            <div className={styles.quickLinksFrame}>
              <b className={styles.yearsOfExperienceContainer}>
                <p className={styles.p}>
                  <span>{`    `}</span>
                  <span className={styles.span}>30+</span>
                </p>
                <p className={styles.yearsOfExperience}>
                  30 Years of Experience
                </p>
              </b>
              <b className={styles.satisfiedClients}>
                <p className={styles.p1}>
                  <span className={styles.span1}>{`  `}</span>
                  <span>20,000+</span>
                </p>
                <p className={styles.satisfiedClients1}>Satisfied Clients</p>
              </b>
            </div>
          </div>
          <div className={styles.eRPNextFrame}>
            <div className={styles.clearFrame}>
              <img
                className={styles.socialIconsSocialIconsSoci}
                loading="eager"
                alt=""
                src="/rectangle-38@2x.png"
              />
            </div>
            <b className={styles.appsAvailable}>
              <p className={styles.p2}>
                <span>{`      `}</span>
                <span className={styles.span2}> 100+</span>
              </p>
              <p className={styles.appsAvailable1}>Apps Available</p>
            </b>
          </div>
        </div>
      </div>
      <div className={styles.blogsFrame}>
        <img
          className={styles.eventsFrameIcon}
          loading="eager"
          alt=""
          src="/rectangle-39@2x.png"
        />
      </div>
    </section>
  );
};

export default YearsOfExperienceFrame;
