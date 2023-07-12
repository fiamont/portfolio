import React from "react";
import PageHeader from "../components/Pageheader";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SkillsExample from "../components/SkillsExample";

function Projekt() {
  return (
    <div>
      <Head>
        <title>Sofias portfolio - Projekt</title>
      </Head>
      <main className={styles.main}>
        <PageHeader title={"Några projekt"} />
        <SkillsExample />
      </main>
    </div>
  );
}

export default Projekt;
