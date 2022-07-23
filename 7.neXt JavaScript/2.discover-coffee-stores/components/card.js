import Link from "next/link";
import Image from "next/image";
import styles from "./card.module.css";
import cls from "classnames";

export default function Cards(props) {
  return (
    <div>
      <Link href={props.href}>
        <a className={styles.cardLink}>
          <div className={cls("glass", styles.contianer)}>
            <div className={styles.cardHeaderWrapper}>
              <h2 className={styles.cardHeader}>{props.name}</h2>
            </div>
            <div className={styles.cardImageWrapper}>
              <Image
                className={styles.cardImage}
                src={props.imgUrl}
                width={260}
                height={160}
                alt={props.name}
              />
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
