import LogoFrame from "../components/logo-frame";
import YearsOfExperienceFrame from "../components/years-of-experience-frame";
import AboutSection from "../components/about-section";
import MakingSoftwareWork from "../components/making-software-work";
import OurTeamContainer from "../components/our-team-container";
import AwardsAndRecognitionsFrame from "../components/awards-and-recognitions-frame";
import AwardsSection from "../components/awards-section";
import ProductsSolutions from "../components/products-solutions";
import styles from "./frame.module.css";

const Frame = () => {
  return (
    <div className={styles.cuisine}>
      <header className={styles.cuisineChild} />
      <LogoFrame />
      <section className={styles.aboutUsFrame}>
        <img
          className={styles.aboutUsFrameChild}
          alt=""
          src="/rectangle-34@2x.png"
        />
        <div className={styles.aboutUsEnsuringContainer}>
          <span className={styles.aboutUsEnsuringContainer1}>
            <p className={styles.aboutUs}>About Us</p>
            <p className={styles.ensuringThatSoftware}>
              Ensuring that software works for your business
            </p>
          </span>
        </div>
      </section>
      <YearsOfExperienceFrame />
      <AboutSection />
      <MakingSoftwareWork />
      <div className={styles.cuisineItem} />
      <section className={styles.visionFrame}>
        <img
          className={styles.aboutUsContainer}
          loading="eager"
          alt=""
          src="/rectangle-48@2x.png"
        />
        <div className={styles.companyBackgroundRect}>
          <div className={styles.yearsOfExperienceText}>
            <h1 className={styles.toAchieveOur}>
              To achieve our vision, we strive everyday to
            </h1>
          </div>
          <h2 className={styles.continouslyBuildAContainer}>
            <span>
              <p className={styles.continouslyBuildA}>
                Continously build a high level of knowledge and super command of
                the current software landscape
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.buildPartnershipsWith}>
                Build Partnerships with the best quality software vendors across
                multiple categories
              </p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.constantlyRefineOur}>
                Constantly refine our processes to understand your requirements
                correctly and suggest the right solutions
              </p>
              <p className={styles.blankLine2}>&nbsp;</p>
              <p className={styles.buildEfficientPost}>
                Build efficient post sales support that ensures client success
              </p>
              <p className={styles.blankLine3}>&nbsp;</p>
              <p className={styles.weBelieveOur}>
                We believe our expertise of the software landscape, our
                commitment to your success and our confidence in being able to
                recommend the right business software solutions for our clients
                is what differentiates us from the others and are the
                foundations of our success today and in the future to come
              </p>
            </span>
          </h2>
        </div>
      </section>
      <div className={styles.cuisineInner} />
      <OurTeamContainer />
      <AwardsAndRecognitionsFrame />
      <AwardsSection />
      <ProductsSolutions />
      <section className={styles.branchFrame}>
        <div className={styles.branchFrameChild} />
        <div className={styles.anA21TechnologiesContainer}>
          <p className={styles.anA21Technologies}>
            An A21 Technologies LLP Group Company 
          </p>
          <p className={styles.branches}>Branches</p>
          <p className={styles.northDelhiNoidaGurgaon}>
            NORTH: Delhi, Noida, Gurgaon, Chandigarh, Jaipur, Kanpur,
            Lucknow, SOUTH: Bangalore, Vishakapatnam, Vijaywada WEST: Pune,
            Mumbai, Nagpur, Sangli, Kolhapur, Ahmedabad, Vadodra,
            Surat EAST: Guwahati, Bhubaneswar
          </p>
        </div>
      </section>
      <div className={styles.branchFrame1}>
        <div className={styles.branchFrameItem} />
        <div className={styles.softwareworkIndiaP}>
          © 2021 Software@Work (India) P. Ltd. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Frame;
