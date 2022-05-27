import React from "react";
// import Link from "next/link";
import style from "../styles/SkillsExample.module.css";
import Image from "next/image";
import AwesomeMemory from "../public/awesomeMemoryBilden.jpg";
import Unify from "../public/unifyBild.jpg";

function SkillsExample() {
  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };
  return (
    <div className={style.container}>
      <div className={style.project}>
        <h2 className={style.rubrik}>Ett Next.js projekt</h2>
        <p className={style.text}>
          Ett webapplikationsprojekt som kallas för Unify. Ett sammarbete mellan
          fyra ux-designer-studenter och fyra javautvecklar-studenter. Finns på{" "}
          <p
            className={style.extLink}
            onClick={handleURL("https://github.com/fiamont/unify.git")}
          >
            {" "}
            https://github.com/fiamont/unify.git{" "}
          </p>{" "}
          och deployad nedan:
        </p>
        <div className={style.LinkUnify}>
          {/* <Link href="https://unify-sti.vercel.app/" passHref> */}
          <Image
            className={style.Unify}
            src={Unify}
            alt="unify"
            width={210}
            height={161}
            onClick={handleURL("https://unify-sti.vercel.app/")}
          />
          {/* </Link> */}
        </div>
      </div>
      <div className={style.project}>
        <h2 className={style.rubrik}>Ett vanilla javascript memoryspel</h2>
        <p className={style.text}>
          Min första webapplikation. Finns en frontenddel och en backenddel,
          kommunikation via AJAX. Finns på{" "}
          <p
            className={style.extLink}
            onClick={handleURL("https://github.com/fiamont/sti-frontend.git")}
          >
            {" "}
            https://github.com/fiamont/sti-frontend.git{" "}
          </p>{" "}
          och deployad nedan:
        </p>
        <div className={style.LinkMemory}>
          {/* <Link href="http://fiamont-frontend.herokuapp.com/" passHref> */}
          <Image
            className={style.Memory}
            src={AwesomeMemory}
            alt="Memory"
            width={210}
            height={127}
            onClick={handleURL("http://fiamont-frontend.herokuapp.com/")}
          />
          {/* </Link> */}
        </div>
      </div>
      <p></p>
    </div>
  );
}

export default SkillsExample;
