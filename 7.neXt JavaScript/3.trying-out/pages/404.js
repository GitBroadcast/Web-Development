import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      // router.go(1)
      router.push("/");
    }, 3000);
  }, []);
  return (
    <>
      <Head>
        <title>Lamsal Brothers | Error</title>
        <meta name="keywords" content="lamsal-brothers" />
      </Head>
      <div className="not-found">
        <h1>Opps...</h1>
        <h2>This page cannot be found</h2>
        <p>
          Go back to{" "}
          <Link href="/">
            <a>Homepage</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default NotFound;
