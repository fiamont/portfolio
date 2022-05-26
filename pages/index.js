import Head from "next/head";
import styles from "../styles/Home.module.css";
import HomeTop from "../components/HomeTop";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sofias portfolio</title>
      </Head>
      <main className={styles.main}>
        <HomeTop />
        <Intro />
      </main>
    </div>
  );
}
