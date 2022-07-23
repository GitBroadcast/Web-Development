import styles from "../../styles/Navbar/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>SURU | The Foundation</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" passHref>
            <div>
              <span className={styles.linkText}> WORK WITH US</span>
              <Image
                src="/static/logos/SL FULL.svg"
                width="40px"
                height="40px"
                objectFit="cover"
                alt="SURU LOGO"
              />
            </div>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          GATTHAGHAR-15, BHAKTAPUR
          <br />
          NEPAL
        </div>
        <div className={styles.cardItem}>
          CONTACT2@SURU
          <br />
          016210334
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br />
          __FB __IN __TW
        </div>
        <div className={styles.cardItem}>
          &copy; 2022 SURU INTERACTIVE
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
