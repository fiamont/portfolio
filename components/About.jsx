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
            tidigare fokuserat på mitt stora intresse för djur och natur. Efter
            några år av försök att göra något yrkesmässigt av det intresset har
            jag nu valt att göra verklighet av programmerings-nyfikenheten. För
            mig är det helt rätt och det känns väldigt spännande.
          </p>
          <p>
            Jag har studerat till javautvecklare på yrkeshögskolan Stockholms
            Tekniska Institut och blev färdig våren 2023. Huvudinriktningen på
            programmet var Java-programmering, men vi fick också grundläggande
            kunskaper i Spring, Java EE, JavaScript, React, Next.js, SQL, HTML,
            CSS och Git. Vi gick även en kurs i agil projektmetodik där vi
            samarbetade med utbildningen till UX-designer. Under utbildningen
            hade vi även två perioder med praktik (LIA - lärande i arbete). Jag
            gjorde min praktik på SEB och KB (Kungliga biblioteket) och min
            huvudsakliga yrkesroll var då som backendutvecklare på båda
            platserna.
          </p>
          <p>
            Jag skulle beskriva mig själv som en glad, lugn, noggrann och
            praktisk person; jag är en lyssnare som pratar när jag har något att
            säga. Jag är kreativ och tycker om problemlösning, samtidigt som jag
            gillar att strukturera upp saker och hålla ordning.
          </p>
          <p>
            Det jag tycker är roligt med programmering är att det är utmanande.
            Jag tycker om att studera och lära mig nytt vilket är en annan
            fördel med programmering och att vara utvecklare – det finns alltid
            mer att lära sig. Det passar mig också bra att man både kan jobba i
            team och jobba enskilt.
          </p>
          <h2 className={style.heading2}>
            Jag tycker att hela utvecklingsprocessen är intressant. Därför vill
            jag gärna jobba som fullstackutvecklare, men också som
            backendutvecklare eftersom jag har mest erfarenhet av det.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
