import styles from "../../styles/Container/1stContainer.module.css";
import Image from "next/image";
import Circle from "./Circle";
const Container1 = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#dacfed" top="-50vh" left="-40vh" />
      <Circle backgroundColor="#dacfed" right="-40vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>SURU</span> It&apos;s only the matter
          of starting.
        </h1>
        <p className={styles.desc}>
          Let us do the work for you here we define your imaginations
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/static/logos/SL.png"
          width="100%"
          height="100%"
          layout="fill"
          objectFit="cover"
          alt="Company Logo"
        ></Image>
      </div>
    </div>
  );
};

export default Container1;
