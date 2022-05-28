import React from "react";
import Experience from "../components/Experience";
import PageHeader from "../components/Pageheader";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function Erfarenheter() {
  return (
    <div>
      <Head>
        <title>Sofias portfolio - Erfarenheter</title>
      </Head>
      <main className={styles.main}>
        <PageHeader title={"Erfarenheter"} />
        <Experience />
      </main>
    </div>
  );
}

export default Erfarenheter;
