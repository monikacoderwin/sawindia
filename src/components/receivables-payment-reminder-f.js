import styles from "./receivables-payment-reminder-f.module.css";

const ReceivablesPaymentReminderF = () => {
  return (
    <section className={styles.receivablesPaymentReminderF}>
      <div className={styles.cashForecastRectangle}>
        <div className={styles.neverBeforeFinanceAutomatio}>
          <div className={styles.neverBeforeFinanceAutomatioChild} />
          <h1 className={styles.neverBeforeFinanceContainer}>
            <span>
              <p className={styles.neverBeforeFinance}>Never Before Finance</p>
              <p className={styles.automation}>Automation</p>
            </span>
          </h1>
        </div>
        <img
          className={styles.image2Icon}
          loading="eager"
          alt=""
          src="/image-2@2x.png"
        />
      </div>
      <div className={styles.enquiriessawindiacomRectangle}>
        <div className={styles.enquiriessawindiacomRectangleChild} />
        <h3 className={styles.financeOperationsManagerIsContainer}>
          <span className={styles.financeOperationsManagerIsContainer1}>
            <p className={styles.financeOperationsManagerIs}>
              <b className={styles.financeOperationsManager}>
                Finance Operations Manager
              </b>
              <span className={styles.isA}> is a </span>
              <b className={styles.webAndMobile}>Web and Mobile application</b>
              <span className={styles.toHelp}>{` to help `}</span>
            </p>
            <p className={styles.youApproveAnd}>
              you Approve and Pay Supplier bills/Employee claims, Collect from
              Customers, and Manage Working capital efficiently.
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <p className={styles.oneClickIntegrationWithYou}>
              <span className={styles.oneClick}>One Click </span>
              <b className={styles.integrationWithYour}>
                integration with your ERP
              </b>
              <span className={styles.tallySapEtc}>
                 (Tally, SAP, etc) and Bank (ICICI, HDFC, etc).
              </span>
            </p>
            <p className={styles.blankLine1}>&nbsp;</p>
            <p className={styles.keyFeatures}>
              <b>Key features</b>
            </p>
            <p className={styles.blankLine2}>&nbsp;</p>
            <ul className={styles.eliminateDataEntryAsBills}>
              <li className={styles.eliminateDataEntryAsBills1}>
                <span className={styles.eliminateDataEntry}>
                  Eliminate Data entry as Bills in PDF, JPG formats will get
                  auto-posted in your ERP after approval
                </span>
              </li>
              <li className={styles.manageProcurementCollection}>
                <span
                  className={styles.manageProcurementCollection1}
                >{`Manage Procurement, Collection & Cash management on a one-page dashboard.`}</span>
              </li>
              <li className={styles.approvalWorkflowsForAllFin}>
                <span
                  className={styles.approvalWorkflowsFor}
                >{`Approval workflows for all financial documents – Orders, Bills, Goods Receipt Notes & Payments`}</span>
              </li>
              <li>
                <span className={styles.improveWorkingCapitalAnd}>
                  Improve working capital and Reduce costs through better
                  analytics
                </span>
              </li>
            </ul>
          </span>
        </h3>
        <div className={styles.enquireNowText}>
          <div className={styles.financeOperationsManagerFra}>
            <div className={styles.financeOperationsManagerFraChild} />
            <h3 className={styles.enquireNow}>Enquire Now</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReceivablesPaymentReminderF;
