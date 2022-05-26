import React from "react";
// import Experience from "./../components/Experience/Experience";
// import PageHeader from "./../components/PageHeader/PageHeader";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function Erfarenheter() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sofias portfolio - Erfarenheter</title>
      </Head>
      <main className={styles.main}>
        {/* <PageHeader title={"Erfarenheter"} />
        <Experience /> */}
      </main>
    </div>
  );
}

export default Erfarenheter;
