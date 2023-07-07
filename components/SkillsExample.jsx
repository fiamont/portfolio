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
          Examensarbetet i utbildningen till javautvecklare. Ett sammarbete
          mellan mig och en klasskamrat. Finns på
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
        <h2 className={style.rubrik}>Ett Next.js projekt</h2>
        <p className={style.text}>
          Ett webapplikationsprojekt som kallas för Unify. Ett sammarbete mellan
          fyra ux-designer-studenter och fyra javautvecklar-studenter. Finns på
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
        <h2 className={style.rubrik}>Ett vanilla javascript memoryspel</h2>
        <p className={style.text}>
          Min första webapplikation. Finns på
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
