import style from "../styles/About.module.css";
import Me from "../public/sofia.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className={style.AboutMe} id="about">
      <div className={style.Container}>
        <h2>
          Jag heter Sofia Montgomery och jag studerar till javautvecklare på
          Stockholms Tekniska Institut.
        </h2>
        <div className={style.Text}>
          <p id="text1">
            Nyfikenheten på programmering har funnits länge, men jag har
            tidigare fokuserat på mitt stora intresse för djur och natur. Men
            eftersom jag bl.a. är allergisk mot både djur och växter har det
            varit svårt att hitta ett sätt att jobba med det.<br></br>
            <br></br>Jag har tidigare studerat bland annat pedagogik,
            konstvetenskap, geografi och biologi på högskolan och jobbat i affär
            och på förskola. Efter en period som dataregistrerare insåg jag att
            jag trivs med arbetsmiljön och möjligheten att jobba både i team och
            självständigt passar mig, men att jag vill ha större utmaningar.
          </p>
        </div>
        <div className={style.Photo}>
          <Image
            className={style.Me}
            src={Me}
            alt="me"
            width={180}
            height={228}
          />
        </div>
        <div className={style.Text2}>
          <p>
            Nu har jag valt att inrikta mig på programmering, vilket känns
            väldigt spännande. Jag skulle beskriva mig själv som en glad, lugn,
            noggrann och praktisk person; jag är en lyssnare som pratar när jag
            har något att säga. Jag är kreativ och gillar att strukturera upp
            saker och hålla ordning, och att lösa problem.
          </p>
          <h2>
            Drömjobbet vore att kunna kombinera mina programmeringskunskaper med
            mitt engagemang för djur, natur, miljö och klimat.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
