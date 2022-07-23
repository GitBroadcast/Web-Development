import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/coffee-store.module.css";

import CoffeeStoreData from "../../data/coffee-stores.json";
import Head from "next/head";
import Image from "next/image";
import cls from "classnames";

export async function getStaticProps(context) {
  const params = context.params;
  return {
    props: {
      coffeeStore: CoffeeStoreData.find((coffeeStore) => {
        return coffeeStore.id.toString() === params.id; //dynamic Id
      }),
    },
  };
}
export function getStaticPaths() {
  const paths = CoffeeStoreData.map((coffeeStore) => {
    return { params: { id: coffeeStore.id.toString() } };
  });
  return {
    paths,
    fallback: true,
  };
}

const CoffeeStore = (props) => {
  const router = useRouter();
  console.log(router);
  if (router.isFallback) return <div>Loading...</div>;
  const { name, address, neighbourhood, imgUrl } = props.coffeeStore;

  const handelUpVoteButton = () => {
    console.log("Up Vote Button Clicked");
  };

  return (
    <div className={styles.layout}>
      <Head>
        <title>{name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.col1}>
          <div className={styles.backToHomeLink}>
            <Link href="/">
              <a>Go Back to Home</a>
            </Link>
          </div>
          <div className={styles.nameWrapper}>
            <h2 className={styles.name}>{name}</h2>
          </div>
          <Image
            src={imgUrl}
            width={600}
            height={360}
            alt={name}
            className={styles.storeImg}
          ></Image>
        </div>
        <div className={cls("glass", styles.col2)}>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/places.svg"
              width={24}
              height={24}
              alt="icons"
            ></Image>
            <p className={styles.text}>{address}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/nearMe.svg"
              width={24}
              height={24}
              alt="icons"
            ></Image>
            <p className={styles.text}>{neighbourhood}</p>
          </div>
          <div className={styles.iconWrapper}>
            <Image
              src="/static/icons/star.svg"
              width={24}
              height={24}
              alt="icons"
            ></Image>
            <p className={styles.text}>1</p>
          </div>
          <button className={styles.upvoteButton} onClick={handelUpVoteButton}>
            Up Vote
          </button>
        </div>
      </div>
    </div>
  );
};
export default CoffeeStore;
