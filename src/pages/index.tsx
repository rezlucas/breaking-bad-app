import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Index.module.scss";
import MyApp from "./_app.jsx";
import Card from "../components/card/card";

export default function Home({ characters }) {
  return (
    <>
      <Head>
        <title>Characters Breaking bad</title>
        <link rel="icon" href="/breaking-bad-favicon.svg" />
      </Head>

      <div className={styles["full__screen"]}>
        <div className={styles["header"]}>
          <Image src="/character-logo.svg" alt="" width={600} height={100} />
          <h1 className={styles["card__list__title"]}>
            Breaking Bad Characters
          </h1>
        </div>
        <Card character={characters} />
      </div>
    </>
  );
}
