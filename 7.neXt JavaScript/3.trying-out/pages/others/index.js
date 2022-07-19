import Head from "next/head";
import styles from "../../styles/Others.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return {
    props: {
      users: data,
    },
  };
};

const Others = ({ users }) => {
  return (
    <>
      <Head>
        <title>Lamsal Brothers | Navigate</title>
        <meta name="keywords" content="lamsal-brothers" />
      </Head>
      <div>
        <h1>ALl Users</h1>
        {users.map((user) => (
          <Link href={"/others/" + user.id} key={user.id}>
            <a className={styles.single}>
              <h3>{user.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};
export default Others;
