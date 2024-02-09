import MainFrame from "../components/main-frame";
import ReceivablesPaymentReminderF from "../components/receivables-payment-reminder-f";
import FrameComponent from "../components/frame-component";
import FrameParent from "../components/frame-parent";
import styles from "./desktop.module.css";

const Desktop = () => {
  return (
    <div className={styles.desktop}>
      <div className={styles.desktopChild} />
      <MainFrame />
      <ReceivablesPaymentReminderF />
      <section className={styles.purchaseApprovalImage}>
        <div className={styles.purchaseApprovalImageChild} />
        <div className={styles.purchaseApproveTallyContainer}>
          <span>
            <p className={styles.purchase}>Purchase</p>
            <p className={styles.blankLine}>
              <span>
                <span className={styles.blankLine1}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.blankLine2}>
              <span>
                <span className={styles.blankLine3}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.approveTallyTransactionsFro}>
              <span>
                <span
                  className={styles.approveTallyTransactions}
                >{`Approve Tally transactions from anywhere with complete audit trail & document attachment`}</span>
              </span>
            </p>
            <p className={styles.blankLine4}>
              <span>
                <span className={styles.blankLine5}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.billsSentByVendorsInJpg}>
              <span>
                <span className={styles.billsSentBy}>
                  Bills sent by vendors (in JPG, PDF formats) will get
                  auto-extracted and posted in Tally after approval. No data
                  entry required
                </span>
              </span>
            </p>
            <p className={styles.blankLine6}>
              <span>
                <span className={styles.blankLine7}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.autoMatchingWithPurchaseOr}>
              <span>
                <span
                  className={styles.autoMatchingWith}
                >{`Auto matching with Purchase Orders and highlighting of mismatches. `}</span>
              </span>
            </p>
            <p className={styles.get3WayMatchingOfPoGrn}>
              <span>
                <span className={styles.get3Way}>
                  Get 3 way matching of PO, GRN, and Bill on the web dashboard
                </span>
              </span>
            </p>
            <p className={styles.blankLine8}>
              <span>
                <span className={styles.blankLine9}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.sendPaymentsDirectlyToThe}>
              <span>
                <span className={styles.sendPaymentsDirectly}>
                  Send payments directly to the bank, pull receipts from the
                  bank
                </span>
              </span>
            </p>
          </span>
        </div>
        <img
          className={styles.image3Icon}
          loading="eager"
          alt=""
          src="/image-3@2x.png"
        />
      </section>
      <section className={styles.paymentReminder}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.img41Wrapper}>
            <img
              className={styles.img41Icon}
              loading="eager"
              alt=""
              src="/img4-1@2x.png"
            />
          </div>
          <div className={styles.receivablesSendAutomaticContainer}>
            <p className={styles.receivables}>
              <span className={styles.receivables1}>
                <span className={styles.receivables2}>Receivables</span>
              </span>
            </p>
            <p className={styles.blankLine10}>
              <span>
                <span className={styles.blankLine11}>
                  <span className={styles.blankLine12}>&nbsp;</span>
                </span>
              </span>
            </p>
            <p className={styles.sendAutomaticPaymentReminde}>
              <span>
                <span className={styles.sendAutomaticPayment}>
                  Send automatic payment reminders to customers
                </span>
              </span>
            </p>
            <p className={styles.blankLine13}>
              <span>
                <span className={styles.blankLine14}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.automaticallyCreateADailyC}>
              <span>
                <span className={styles.automaticallyCreateA}>
                  Automatically create a daily collection tasklist for sales
                  team
                </span>
              </span>
            </p>
            <p className={styles.blankLine15}>
              <span>
                <span className={styles.blankLine16}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.receiveResponsesFromCustome}>
              <span>
                <span className={styles.receiveResponsesFrom}>
                  Receive responses from customers straight into the app
                </span>
              </span>
            </p>
            <p className={styles.blankLine17}>
              <span>
                <span className={styles.blankLine18}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.pullReceiptsFromTheBank}>
              <span>
                <span
                  className={styles.pullReceiptsFrom}
                >{`Pull receipts from the bank & match them with invoices`}</span>
              </span>
            </p>
          </div>
        </div>
      </section>
      <section className={styles.frameParent}>
        <div className={styles.cashForecastCashForecastingWrapper}>
          <div className={styles.cashForecastCashContainer}>
            <p className={styles.cashForecast}>Cash Forecast</p>
            <p className={styles.blankLine19}>
              <span>
                <span className={styles.blankLine20}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.blankLine21}>
              <span>
                <span className={styles.blankLine22}>&nbsp;</span>
              </span>
            </p>
            <p className={styles.cashForecastingToGiveYouV}>
              <span>
                <span>
                  Cash forecasting to give you visibility of expected cash flows
                </span>
              </span>
            </p>
            <p className={styles.blankLine23}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.shortTermDaily3090Days}>
              <span>
                <span>
                  Short Term Daily (30-90 days) and Long Term Weekly (52 weeks)
                </span>
              </span>
            </p>
            <p className={styles.blankLine24}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.createMaintainMultipleSce}>
              <span>
                <span>{`Create & Maintain multiple Scenarios`}</span>
              </span>
            </p>
            <p className={styles.blankLine25}>
              <span>
                <span>&nbsp;</span>
              </span>
            </p>
            <p className={styles.smartAlertsForPaymentsCo}>
              <span>
                <span>{`Smart alerts for Payments & Collections so that you can keep close track of funds`}</span>
              </span>
            </p>
          </div>
        </div>
        <img
          className={styles.cashForecastingIcon}
          loading="eager"
          alt=""
          src="/rectangle-11@2x.png"
        />
      </section>
      <FrameComponent />
      <section className={styles.clientsShowcase}>
        <div className={styles.clientsShowcaseChild} />
        <div className={styles.awardsAndRecognitionsWrapper}>
          <h1 className={styles.awardsAndRecognitions}>
            Awards And Recognitions
          </h1>
        </div>
        <div className={styles.frameWithLogo}>
          <div className={styles.frameWithContactUs}>
            <img
              className={styles.frameWithEvents}
              loading="eager"
              alt=""
              src="/rectangle-20@2x.png"
            />
          </div>
          <div className={styles.frameForCTA}>
            <img
              className={styles.frameWithServices}
              loading="eager"
              alt=""
              src="/rectangle-21@2x.png"
            />
          </div>
          <div className={styles.frameWithResources}>
            <img
              className={styles.frameWithProductsSolutions}
              loading="eager"
              alt=""
              src="/rectangle-22@2x.png"
            />
          </div>
          <div className={styles.rectangleForQuickLinks}>
            <img
              className={styles.frameForAwardsRecognitions}
              loading="eager"
              alt=""
              src="/rectangle-23@2x.png"
            />
          </div>
          <div className={styles.frameForCTA1}>
            <img
              className={styles.frameForCTAChild}
              loading="eager"
              alt=""
              src="/rectangle-24@2x.png"
            />
          </div>
        </div>
      </section>
      <section className={styles.getStartedFrame}>
        <div className={styles.frameWithZeroFrictionQ}>
          <div className={styles.frameWithZeroFrictionQChild} />
          <div className={styles.frameForEnquireNow}>
            <div className={styles.frameForEnquireNowChild} />
            <div className={styles.getStartedInContainer}>
              <p className={styles.getStartedIn}>Get Started in less</p>
              <p className={styles.than7Days}>than 7-days.</p>
              <p className={styles.blankLine26}>&nbsp;</p>
              <p className={styles.zeroFrictionQuick}>
                Zero friction, Quick on-boarding
              </p>
            </div>
            <div className={styles.textForEnquireNow}>
              <div className={styles.frameWithTextEnquiryNow}>
                <div className={styles.frameWithTextEnquiryNowChild} />
                <h2 className={styles.enquireNow}>Enquire Now</h2>
              </div>
            </div>
          </div>
          <img
            className={styles.rectangleForGetStarted}
            loading="eager"
            alt=""
            src="/rectangle-28@2x.png"
          />
        </div>
      </section>
      <div className={styles.desktopItem} />
      <FrameParent />
      <section className={styles.desktopInner} />
      <footer className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <div className={styles.softwareworkIndiaP}>
          © 2021 Software@Work (India) P. Ltd. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Desktop;
