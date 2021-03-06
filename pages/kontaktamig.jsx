import React from "react";
import PageHeader from "../components/Pageheader";
import ContactForm from "../components/ContactForm";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function KontaktaMig() {
  return (
    <div>
      <Head>
        <title>Sofias portfolio - Kontakta mig</title>
      </Head>
      <main className={styles.main}>
        <PageHeader title={"Kontakt"} />
        <ContactForm />
      </main>
    </div>
  );
}

export default KontaktaMig;
