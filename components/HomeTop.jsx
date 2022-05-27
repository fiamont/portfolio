import React from "react";
import style from "../styles/HomeTop.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { bounceInLeft } from "react-animations";
import styled, { keyframes } from "styled-components";

function HomeTop() {
  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };

  const bouncyAnimation = keyframes`${bounceInLeft}`;

  const Bouncy = styled.div`
    animation: 2s ${bouncyAnimation};
  `;

  return (
    <div className={style.Home} id="home">
      <div>
        <p className={style.p}>portfolio.</p>
        <h1 className={style.Text}>Sofia Montgomery</h1>
      </div>
      <div className={style.Icons}>
        <Bouncy>
          <FaGithub
            color="#209a71"
            size="45px"
            onClick={handleURL("https://github.com/fiamont")}
          />
        </Bouncy>
        <Bouncy>
          <FaLinkedin
            color="#209a71"
            size="45px"
            onClick={handleURL(
              "https://www.linkedin.com/in/sofia-montgomery-3175a821a"
            )}
          />
        </Bouncy>
      </div>
    </div>
  );
}

export default HomeTop;
