import styles from "./main-frame.module.css";

const MainFrame = () => {
  return (
    <header className={styles.mainFrame}>
      <div className={styles.enquiryFrame}>
        <div className={styles.socialIconsInstance} />
        <div className={styles.playlistScreenTVDisplayPl}>
          <div className={styles.contactUsFrame}>
            <div className={styles.enquiriessawindiacom}>
              enquiries@sawindia.com
            </div>
            <div
              className={styles.servicesContactusFrame}
            >{`(+91)730 3030 000 `}</div>
          </div>
        </div>
        <div className={styles.eventsResourcesFrame}>
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
      <div className={styles.purchaseApprovalFrame}>
        <img
          className={styles.image1Icon}
          loading="eager"
          alt=""
          src="/image-1@2x.png"
        />
        <div className={styles.frameServicesFrameContactus}>
          <div className={styles.cashForecastRectangle}>
            <div className={styles.someOfOurClientsText}>
              <div className={styles.frameRectangleFrameRectangl}>
                <div className={styles.frameRectangleFrameRectanglChild} />
                <div className={styles.home}>Home</div>
              </div>
              <div className={styles.about}>About</div>
            </div>
          </div>
          <div className={styles.productsSolutionsText}>
            <div className={styles.services}>Services</div>
          </div>
          <div className={styles.eventsFrame}>
            <div className={styles.productsSolutionsFrame}>
              <div
                className={styles.productsSolutions}
              >{`Products & Solutions`}</div>
            </div>
            <div className={styles.events}>Events</div>
            <div className={styles.resources}>Resources</div>
          </div>
          <div className={styles.productsSolutionsText1}>
            <div className={styles.contactUs}>Contact us</div>
          </div>
          <div className={styles.careers}>Careers</div>
          <div className={styles.getACallBackText}>
            <div className={styles.financeAutomationFrame}>
              <div className={styles.financeAutomationFrameChild} />
              <b className={styles.getACall}>Get a Call Back!</b>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainFrame;
