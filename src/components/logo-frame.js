import styles from "./logo-frame.module.css";

const LogoFrame = () => {
  return (
    <section className={styles.logoFrame}>
      <div className={styles.textFrame}>
        <div className={styles.groupFrame} />
        <div className={styles.imageFrame}>
          <div className={styles.frameFrame}>
            <div className={styles.enquiriessawindiacom}>
              enquiries@sawindia.com
            </div>
            <div className={styles.homeFrame}>{`(+91)730 3030 000 `}</div>
          </div>
        </div>
        <div className={styles.careersFrame}>
          <img
            className={styles.socialIcons}
            loading="eager"
            alt=""
            src="/social-icons.svg"
          />
          <img
            className={styles.playList4ScreenTelevisionIcon}
            loading="eager"
            alt=""
            src="/playlist4screentelevisiondisplayplayermoviesplayerstvmediavideoentertainment.svg"
          />
          <img
            className={styles.socialIcons1}
            alt=""
            src="/social-icons-1.svg"
          />
        </div>
      </div>
      <div className={styles.textFrame1}>
        <img
          className={styles.image1Icon}
          loading="eager"
          alt=""
          src="/image-1@2x.png"
        />
        <div className={styles.textFrame2}>
          <div className={styles.textFrame3}>
            <div className={styles.home}>Home</div>
            <div className={styles.groupFrame1}>
              <div className={styles.about}>About</div>
            </div>
            <div className={styles.groupFrame2}>
              <div className={styles.services}>Services</div>
            </div>
            <div className={styles.groupFrame3}>
              <div
                className={styles.productsSolutions}
              >{`Products & Solutions`}</div>
            </div>
            <div className={styles.groupFrame4}>
              <div className={styles.events}>Events</div>
            </div>
            <div className={styles.groupFrame5}>
              <div className={styles.resources}>Resources</div>
            </div>
            <div className={styles.groupFrame6}>
              <div className={styles.contactUs}>Contact us</div>
            </div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.careersFrame1}>
              <div className={styles.careersFrameChild} />
              <b className={styles.getACall}>Get a Call Back!</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoFrame;
