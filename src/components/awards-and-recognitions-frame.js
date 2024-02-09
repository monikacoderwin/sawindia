import styles from "./awards-and-recognitions-frame.module.css";

const AwardsAndRecognitionsFrame = () => {
  return (
    <section className={styles.awardsAndRecognitionsFrame}>
      <img
        className={styles.awardsAndRecognitionsFrameChild}
        alt=""
        src="/rectangle-51@2x.png"
      />
      <img
        className={styles.huntBeginButton}
        loading="eager"
        alt=""
        src="/rectangle-52@2x.png"
      />
      <h1 className={styles.yourHuntForContainer}>
        <span className={styles.yourHuntForContainer1}>
          <p className={styles.yourHuntFor}>Your Hunt For Business Software</p>
          <p className={styles.endsHere}>Ends here</p>
        </span>
      </h1>
      <h2 className={styles.weCreatedSoftware}>
        We created software hunt to recommend you the best business software for
        the needs and challenges of your organization in the comfort of your
        office. And that too in 4 simple steps. Try it out now!
      </h2>
      <div className={styles.huntStart}>
        <div className={styles.huntStartChild} />
        <h2 className={styles.beginYourHunt}>BEGIN YOUR HUNT!</h2>
      </div>
    </section>
  );
};

export default AwardsAndRecognitionsFrame;
