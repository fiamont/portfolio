import style from "../styles/Intro.module.css";
import Link from "next/link";

const Intro = () => {
  return (
    <div className={style.Intro}>
      <div className={style.IntroSquare}>
        <h2 className={style.Rubrik}>
          Välkommen till min portfolio! Jag studerar till javautvecklare på
          Stockholms Tekniska Institut.
        </h2>
        <div className={style.Text}>
          <p className={style.P}>
            Hösten 2021 började jag mina studier på STI, hösten 2022 är det dags
            för första praktikperioden och våren 2023 tar jag min examen. Läs
            mer om mig och mitt äventyr
            <Link href="/ommig" passHref>
              <a className={style.Link}>här</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
