import style from "../styles/Intro.module.css";
import Girlcartoon from "../public/girlcartoon.png";
import Image from "next/image";
import Link from "next/link";
// import styled, { keyframes } from "styled-components";
// import { bounceInRight } from "react-animations";

const Intro = () => {
  //   const bouncyAnimation = keyframes`${bounceInRight}`;

  //   const Bouncy = styled.div`
  //     animation: 5s ${bouncyAnimation};
  //   `;
  return (
    <div className={style.Intro} id="intro">
      <div className={style.Container}>
        <h2>
          Jag heter Sofia Montgomery och jag studerar till javautvecklare på
          Stockholms Tekniska Institut.
        </h2>
        <div className={style.Text}>
          <p>
            Hösten 2021 började jag mina studier på STI, hösten 2022 är det dags
            för första praktikperioden och våren 2023 tar jag min examen. Läs
            mer om mig och mitt äventyr
            <Link href="/ommig" passHref>
              <a className={style.Link}>här</a>
            </Link>
            .
          </p>
        </div>
        <div className={style.Photo}>
          {/* <Bouncy> */}
          <Image
            className={style.Girlcartoon}
            src={Girlcartoon}
            alt="girlcartoon"
            width={223}
            height={200}
          />
          {/* </Bouncy> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
