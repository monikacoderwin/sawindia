import styles from "./about-section.module.css";

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutSectionChild} />
      <div className={styles.companyBackground}>
        <div className={styles.yearsOfExperienceParent}>
          <div className={styles.yearsOfExperience}>
            <img
              className={styles.satisfiedClientsIcon}
              loading="eager"
              alt=""
              src="/rectangle-41@2x.png"
            />
          </div>
          <div className={styles.noteFromCEO}>
            <div className={styles.noteFromCeoContainer}>
              <p className={styles.noteFromCeoCa}>
                <span>
                  <span>Note From CEO, CA</span>
                  <b className={styles.b}>{` `}</b>
                </span>
              </p>
              <p className={styles.blankLine}>&nbsp;</p>
              <p className={styles.blankLine1}>&nbsp;</p>
              <p className={styles.vikramSeth}>Vikram Seth</p>
              <p className={styles.promiseOnly}>Promise only</p>
              <p className={styles.whatYouCan}>what you can deliver.</p>
              <p className={styles.deliverMore}>Deliver more</p>
              <p className={styles.thanYourPromise}>than your promise.</p>
            </div>
            <h3
              className={styles.overThePast}
            >{`Over the past 30 years of offering business software solution to more than 20,000 customers  we have seen  that for many organizations – specially  small & medium enterprises  – it’s an uphill task to find the right software solutions in the maze of offerings. Despite evaluating multiple applications before purchase, the failure rates are still high. Much time needs to be spent in determining the needs, current and future – before the right business software is acquired.  In some cases  functionality is not adequate and in some the cost is not affordable. In addition, the needs of many  organizations are dynamic and needs can change as the environment changes or the business grows. The fast changing tech industry also thrown up new options often.   In the absence of adequate efforts in  defining needs and  evaluating the options , buying the wrong software can be  costly exercise both in terms of time and cost.`}</h3>
          </div>
        </div>
      </div>
      <div className={styles.ourTeam}>
        <h3 className={styles.whileThereAreContainer}>
          <p className={styles.whileThereAre}>
            While there are dozen’s of business applications in each category,
            our focus is on what the customer needs. We assist our customers in
            :
          </p>
          <ul className={styles.definingTheirNeedsMatching}>
            <li className={styles.definingTheirNeeds}>Defining their needs</li>
            <li className={styles.matchingTheNeeds}>
              Matching the needs to available functionality
            </li>
            <li className={styles.makingTheRight}>
              Making the right choice  for the organisation
            </li>
          </ul>
          <p className={styles.bothOurDivisions}>
            Both our divisions namely – Tally.ERP 9 solutions division and the
            Software Hunt division aim  at helping our customers  find the right
            business software – be it ERP, Customer Relationship Management,
            Supply Chain visibility solutions, Dealer Management , Fixes Assets
            tracking , Payroll/HRMS etc . Software that is :
          </p>
          <ul className={styles.affordableToBuyAndMaintain}>
            <li className={styles.affordableToBuy}>
              Affordable to buy and maintain year-on-year
            </li>
            <li className={styles.easyToUse}>Easy to use and implement</li>
            <li className={styles.rapidlyDeployableAnd}>
              Rapidly deployable and yet  customisable as needs change
            </li>
          </ul>
          <p className={styles.ourAssociationWithThe}>
            Our association  with the leading software companies in India and
            the fact that  our softwarehunt.in  team spends more than 20% of
            their time evaluating new and upcoming applications enables us to
            make offer the best software products to our customers. This
            service  though valuable to customers is currently being offered
            free. So go ahead and talk to us about your software needs and we’ll
            try and find the best one for you.
          </p>
        </h3>
      </div>
      <div className={styles.someOfOurClients}>
        <div className={styles.findYourSoftwareHereParent}>
          <h3 className={styles.findYourSoftware}>Find your software here</h3>
          <div className={styles.awardsAndRecognitions} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
