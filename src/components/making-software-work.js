import styles from "./making-software-work.module.css";

const MakingSoftwareWork = () => {
  return (
    <section className={styles.makingSoftwareWork}>
      <div className={styles.makingSoftwareWorkChild} />
      <div className={styles.quickLinks}>
        <h1 className={styles.ourTeam}>Our Team</h1>
      </div>
      <div className={styles.socialIcons}>
        <img
          className={styles.blogsIcon}
          loading="eager"
          alt=""
          src="/rectangle-44@2x.png"
        />
        <img
          className={styles.blogsIcon1}
          loading="eager"
          alt=""
          src="/rectangle-45@2x.png"
        />
        <div className={styles.events}>
          <img
            className={styles.caseStudiesIcon}
            loading="eager"
            alt=""
            src="/rectangle-46@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default MakingSoftwareWork;
