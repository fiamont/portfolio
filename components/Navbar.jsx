import Link from "next/link";
import style from "../styles/Navbar.module.css";
import React, { useState, useEffect } from "react";
import { RiHomeHeartFill } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState();

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const toggleNav2 = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    changeWidth();
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className={style.Navbar}>
      <div className={style.buttons}>
        <div className={style.homeIconDesktop}>
          <Link href="/" passHref>
            <RiHomeHeartFill size="45px"></RiHomeHeartFill>
          </Link>
        </div>
        <button onClick={toggleNav} className={style.hamburger}>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </button>
      </div>
      {(toggleMenu || screenWidth > 520) && (
        <ul onClick={toggleNav2} className={style.Navbarmenu}>
          <li className={style.homeIconMobile}>
            <Link href="/" passHref>
              <RiHomeHeartFill size="30px"></RiHomeHeartFill>
            </Link>
          </li>
          <li>
            <Link className={style.Link} href="/ommig" passHref>
              <a className={style.Link}>OM MIG</a>
            </Link>
          </li>
          <li>
            <Link className={style.Link} href="/kompetenser" passHref>
              <a className={style.Link}>KOMPETENSER</a>
            </Link>
          </li>
          <li>
            <Link className={style.Link} href="/erfarenheter" passHref>
              <a className={style.Link}>ERFARENHETER</a>
            </Link>
          </li>
          <li>
            <Link className={style.Link} href="/kontaktamig" passHref>
              <a className={style.Link}>KONTAKT</a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
