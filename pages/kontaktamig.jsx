import React from "react";
// import PageHeader from "./../components/PageHeader/PageHeader";
// import ContactForm from "./../components/ContactForm/ContactForm";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function KontaktaMig() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sofias portfolio - Kontakta mig</title>
      </Head>
      <main className={styles.main}>
        {/* <PageHeader title={"Kontakta mig"} />
        <ContactForm /> */}
      </main>
    </div>
  );
}

export default KontaktaMig;