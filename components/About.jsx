import style from "../styles/About.module.css";
import Me from "../public/SofiaProfil.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className={style.AboutMe}>
      <h2 className={style.heading}>
        Det är jag som är Sofia Montgomery - en nyexaminerad javautvecklare.
      </h2>
      <div className={style.Photo}>
        <Image
          className={style.Me}
          src={Me}
          alt="me"
          width={250}
          height={261}
        />
      </div>
      <div className={style.part1}>
        <div className={style.textpart2}>
          <p>
            Nyfikenheten på programmering har funnits länge, men jag har
            tidigare fokuserat på mitt stora intresse för djur och natur.
            Eftersom jag är allergisk mot både djur och växter har det inte
            varit enkelt att hitta ett sätt att jobba med det. Därför har jag nu
            valt att inrikta mig på programmering, vilket känns väldigt
            spännande.
          </p>
          <p>
            Jag valde att studera till javautvecklare på yrkeshögskolan
            Stockholms Tekniska Institut och blev färdig våren 2023.
            Huvudinriktningen på programmet var Java-programmering, men vi har
            också fått grundläggande kunskaper i Spring, Java EE, JavaScript,
            React, Next.js, SQL, HTML, CSS och Git. Vi har även gått en kurs i
            agil projektmetodik där vi samarbetade med utbildningen till
            UX-designer. Under utbildningen hade vi även två perioder med
            praktik (LIA - lärande i arbete). Jag gjorde min praktik på SEB och
            KB (Kungliga biblioteket) och min huvudsakliga yrkesroll var då som
            backendutvecklare på båda platserna.
          </p>
          <p>
            Mig själv skulle jag beskriva som en glad, lugn, noggrann och
            praktisk person; jag är en lyssnare som pratar när jag har något att
            säga. Jag är kreativ och gillar att strukturera upp saker och hålla
            ordning, och att lösa problem.
          </p>
          <h2 className={style.heading2}>
            Drömjobbet vore att kunna kombinera mina programmeringskunskaper med
            mitt engagemang för djur, natur, miljö och klimat.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
