import style from "../styles/Intro.module.css";
import Link from "next/link";

const Intro = () => {
  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };

  return (
    <div className={style.Intro}>
      <div className={style.IntroSquare}>
        <h2 className={style.Rubrik}>
          Välkommen till min portfolio! Jag är nyexaminerad javautvecklare.
        </h2>
        <div className={style.Text}>
          <p className={style.P}>
            Hösten 2021 började jag mina studier på STI, Stockholms Tekniska
            Institut. Och i juni 2023 tog jag min examen. Läs mer om mig och
            mitt äventyr
            <Link href="/ommig" passHref>
              <a className={style.Link}>här</a>
            </Link>
            . Vill du komma i kontakt med mig? Kontakta mig på{" "}
            <a
              className={style.LinkedIn}
              onClick={handleURL(
                "https://www.linkedin.com/in/sofia-montgomery-3175a821a"
              )}
            >
              LinkedIn
            </a>{" "}
            eller skriv till min mail (se kuvertet nedan).
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
