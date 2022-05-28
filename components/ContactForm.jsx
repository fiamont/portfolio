import React from "react";
import style from "../styles/ContactForm.module.css";
import Link from "next/link";

function ContactForm() {
  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };
  return (
    <div className={style.contact}>
      <h2 className={style.rubrik}>
        Vill du komma i kontakt med mig? Kontakta mig på{" "}
        <a
          className={style.Link}
          onClick={handleURL(
            "https://www.linkedin.com/in/sofia-montgomery-3175a821a"
          )}
        >
          LinkedIn
        </a>{" "}
        eller via kontaktformuläret nedan:
      </h2>
      <form className={style.form}>
        <label className={style.label} htmlFor="Namn">
          Namn
        </label>
        <input
          className={style.input}
          type="text"
          name="namn"
          placeholder="Namn Namnsson"
        />
        <label className={style.label} htmlFor="Email">
          Email
        </label>
        <input
          className={style.input}
          type="text"
          placeholder="mail@hej.se"
          name="email"
        />
        <label className={style.label} htmlFor="Meddelande">
          Meddelande
        </label>
        <textarea
          className={style.textarea}
          name="meddelande"
          placeholder="Skriv ditt meddelande här..."
        />
        <button className={style.button}>Skicka</button>
      </form>
    </div>
  );
}

export default ContactForm;
