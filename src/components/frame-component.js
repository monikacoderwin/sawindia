import SubFrameA from "./sub-frame-a";
import styles from "./frame-component.module.css";

const FrameComponent = () => {
  return (
    <section className={styles.desktopInner}>
      <SubFrameA />
    </section>
  );
};

export default FrameComponent;
