import React from "react";
import About from "../components/About";
import PageHeader from "../components/Pageheader";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function OmMig() {
  return (
    <div>
      <Head>
        <title>Sofias portfolio - Om mig</title>
      </Head>
      <main className={styles.main}>
        <PageHeader title={"Om mig"} />
        <About />
      </main>
    </div>
  );
}

export default OmMig;
