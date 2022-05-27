import React from "react";
import Skills from "../components/Skills";
import PageHeader from "../components/Pageheader";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import SkillsExample from "../components/SkillsExample";

function Kompetenser() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sofias portfolio - Kompetenser</title>
      </Head>
      <main className={styles.main}>
        <PageHeader title={"Kompetenser"} />
        <Skills />
        <PageHeader title={"Några projekt"} />
        <SkillsExample />
      </main>
    </div>
  );
}

export default Kompetenser;
