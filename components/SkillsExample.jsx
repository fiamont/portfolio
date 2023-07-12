import React from "react";
import style from "../styles/SkillsExample.module.css";
import Image from "next/image";
import AwesomeMemory from "../public/awesomeMemoryBilden.jpg";
import Unify from "../public/unifyBild.jpg";
import VHVH from "../public/examensprojekt.png";

function SkillsExample() {
  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };
  return (
    <div className={style.container}>
      <div className={style.project}>
        <h2 className={style.rubrik}>Examensarbetet VHVH</h2>
        <p className={style.text}>
          Webbapplikationen &quot;VHVH – Vad har vi hemma?&quot; skrev jag ihop
          med Therese Lindquist i min klass. Projektet är skrivet i Java och
          JavaScript. Vi använde Spring Boot, Spring Security, PostgreSQL, React
          och Next.js. Under arbetet följde vi en agil arbetsmetod med hjälp av
          Jira. Verktyg som GitHub, Postman, ChatGPT samt Discord och Microsoft
          Teams för kommunikation och samarbete användes också. Projektet
          genomgick tre faser: planering, början till implementering och
          avslutande fas då större delen av programmeringen utfördes. Arbetet
          bestod av både parprogrammering och enskilt arbete.
        </p>
        <p className={style.text}>
          Resultatet blev en grundläggande webbapplikation med grundläggande
          funktionalitet och design för användaren. Användaren kan i sina listor
          se och lägga till platser, områden och artiklar men även se och ändra
          på sina användaruppgifter. Administratörer kan se listor över alla
          användare. (OBS endast frontend är deployad än så länge) Finns på
          <p
            className={style.extLink}
            onClick={handleURL("https://github.com/fiamont/vhvh")}
          >
            https://github.com/fiamont/vhvh
          </p>
          <p
            className={style.extLink}
            onClick={handleURL("https://github.com/indigobluw/vhvh-frontend")}
          >
            https://github.com/indigobluw/vhvh-frontend
          </p>
          och frontend deployad nedan:
        </p>
        <div className={style.LinkVHVH}>
          <Image
            className={style.VHVH}
            src={VHVH}
            alt="VHVH"
            width={210}
            height={123}
            onClick={handleURL("https://vhvh-frontend.vercel.app/")}
          />
        </div>
      </div>
      <div className={style.project}>
        <h2 className={style.rubrik}>Projektet Unify</h2>
        <p className={style.text}>
          Ett webapplikationsprojekt som kallas för Unify. Det utvecklades i
          samband med kurserna &quot;JavaScript & Ramverk&quot; och &quot;Agil
          projektmetodik&quot; och var ett sammarbete mellan fyra
          ux-designer-studenter och fyra javautvecklar-studenter. Skrevs i
          Javascript med biblioteket React och ramverket Next.js. För design och
          planering m.m. användes verkyget Figma. Finns på
          <p
            className={style.extLink}
            onClick={handleURL("https://github.com/fiamont/unify")}
          >
            https://github.com/fiamont/unify
          </p>
          och deployad nedan:
        </p>
        <div className={style.LinkUnify}>
          <Image
            className={style.Unify}
            src={Unify}
            alt="unify"
            width={210}
            height={161}
            onClick={handleURL("https://unify-sti.vercel.app/")}
          />
        </div>
      </div>
      <div className={style.project}>
        <h2 className={style.rubrik}>Ett memoryspel</h2>
        <p className={style.text}>
          Min första webapplikation, skriven i enbart JavaScript. Gjordes i
          första JavaScript-kursen. Finns på
          <p
            className={style.extLink}
            onClick={handleURL("https://github.com/fiamont/sti-frontend.git")}
          >
            https://github.com/fiamont/sti-frontend.git
          </p>
          och deployad nedan:
        </p>
        <div className={style.LinkMemory}>
          <Image
            className={style.Memory}
            src={AwesomeMemory}
            alt="Memory"
            width={210}
            height={127}
            onClick={handleURL("https://fiamontmemory.vercel.app/index.html")}
          />
        </div>
      </div>
      <p></p>
    </div>
  );
}

export default SkillsExample;
