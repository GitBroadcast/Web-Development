import styles from "../../styles/Container/2ndContainer.module.css";
import Circle from "./Circle";
import Image from "next/image";
import { users } from "../../data";

const Container2 = () => {
  return (
    <>
      <div className={styles.container}>
        <Circle backgroundColor="darkblue" top="-70vh" left="0" right="0" />
        <h1 className={styles.title}>Testimonials</h1>
        <div className={styles.wrapper}>
          {users.map((user) => (
            <div key={user.id} className={styles.card}>
              <Image
                src={`/static/images/${user.logo}`}
                width="30"
                height="30"
                alt={user.logo}
              />
              <p className={styles.comment}>{user.comment}</p>
              <div className={styles.person}>
                <Image
                  src={`/static/images/${user.avatar}`}
                  width="45"
                  height="45"
                  objectFit="cover"
                  alt={user.name}
                  className={styles.avatar}
                />
                <div className={styles.info}>
                  <span className={styles.username}>{user.name}</span>
                  <span className={styles.jobTitle}>{user.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Container2;
