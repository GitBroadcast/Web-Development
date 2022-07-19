import styles from "./Hamburger.module.css";
import { useState } from "react";

const Hamburger = (props) => {
  const [isCross, setisCross] = useState(true);

  const handleMenu = () => {
    setisCross(!isCross);
  };

  return (
    <div className={styles.container} onClick={handleMenu}>
      {isCross && (
        <div className={styles.container1}>
          <div className={styles.bar1}></div>
          <div className={styles.bar2}></div>
          <div className={styles.bar3}></div>
        </div>
      )}
      {!isCross && (
        <div className={styles.container2}>
          <div className={styles.change1}></div>
          <div className={styles.change2}></div>
          <div className={styles.change3}></div>
        </div>
      )}
    </div>
  );
};

export default Hamburger;
