import React from "react";
import style from "../styles/ContactForm.module.css";
import Link from "next/link";

function ContactForm() {
  return (
    <div>
      <h2 className={style.rubrik}>
        Vill du komma i kontakt med mig? Kontakta mig på{" "}
        <Link
          href="https://www.linkedin.com/in/sofia-montgomery-3175a821a"
          passHref
        >
          <a className={style.Link}>LinkedIn</a>
        </Link>
        eller via kontaktformuläret nedan:
      </h2>
      <form className={style.form}>
        <label className={style.label} htmlFor="Namn">
          Namn
        </label>
        <input
          className={style.input}
          type="text"
          placeholder="Namn Namnsson"
        />
        <label className={style.label} htmlFor="Email">
          Email
        </label>
        <input className={style.input} type="text" placeholder="mail@hej.se" />
        <label className={style.label} htmlFor="Meddelande">
          Meddelande
        </label>
        <textarea
          className={style.textarea}
          placeholder="Skriv ditt meddelande här..."
        />
      </form>
    </div>
  );
}

export default ContactForm;
