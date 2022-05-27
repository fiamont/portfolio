import style from "../styles/Skills.module.css";
import Codegirl from "../public/codegirl.svg";
import Image from "next/image";

const Skills = () => {
  return (
    <div className={style.Skills} id="skills">
      <div className={style.Text}>
        <p>Grundläggande kunskaper inom följande:</p>
      </div>
      <div className={style.Container}>
        <div className={style.List}>
          <ul>
            <li key="java">JAVA</li>
            <li key="javascript">JAVASCRIPT</li>
            <li key="sql">SQL</li>
            <li key="html">HTML</li>
            <li key="css">CSS</li>
            <li key="git">GIT</li>
            <li key="agile">AGILE</li>
            <li key="react">REACT</li>
            <li key="tdd">TDD</li>
          </ul>
        </div>
        <Image
          className={style.Codegirl}
          src={Codegirl}
          alt="dual"
          width={200}
          height={200}
        />
      </div>
    </div>
  );
};

export default Skills;
