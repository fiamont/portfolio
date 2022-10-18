import React from "react";
import style from "../styles/Footer.module.css";
import {
  FaEnvelope,
  FaHome,
  FaMobileAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  const handleURL = (url) => {
    return () => window.open(url, "_blank");
  };

  const textPopingUp = (a) => {
    alert(a);
  };
  return (
    <div>
      <div className={style.ContactLinks} id="contactLinks">
        <div className={style.ContactLinksIcons}>
          <FaHome
            size="35px"
            onClick={() =>
              textPopingUp("Biblioteksgången 8, lgh 1304, 183 70 Täby")
            }
          />
          <FaEnvelope
            size="35px"
            onClick={() => textPopingUp("sofia.montgomery@gmail.com")}
          />
          <FaMobileAlt
            size="35px"
            onClick={() => textPopingUp("070-468 20 76")}
          />
          <FaGithub
            size="35px"
            onClick={handleURL("https://github.com/fiamont")}
          />
          <FaLinkedin
            size="35px"
            onClick={handleURL(
              "https://www.linkedin.com/in/sofia-montgomery-3175a821a"
            )}
          />
        </div>
      </div>
      <div className={style.Footer}>
        <p>Copyright &copy; 2022 Sofia Montgomery Portfolio</p>
      </div>
    </div>
  );
};

export default Footer;
