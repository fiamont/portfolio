import Link from "next/link";
import style from "../styles/Navbar.module.css";
import React, { useState, useEffect, useRef } from "react";
import { RiHomeHeartFill } from "react-icons/ri";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState();

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const closeMenu = () => {
    setToggleMenu(false);
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

  const navbarRef = useRef(null);

  useEffect(() => {
    function handleClickOutsideMenu(event) {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        toggleMenu
      ) {
        setToggleMenu(false);
      }
    }

    function handleClick(event) {
      handleClickOutsideMenu(event);
    }

    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [toggleMenu]);

  return (
    <div className={style.Navbar} ref={navbarRef}>
      <div className={style.buttons}>
        <div className={style.homeIconMobile}>
          <Link href="/" passHref>
            <RiHomeHeartFill size="45px" onClick={closeMenu} />
          </Link>
        </div>
        <button onClick={toggleNav} className={style.hamburger}>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
          <span className={style.bar}></span>
        </button>
      </div>
      {(toggleMenu || screenWidth > 520) && (
        <ul className={style.Navbarmenu}>
          <li className={style.homeIconDesktop}>
            <Link href="/" passHref>
              <RiHomeHeartFill size="30px" onClick={closeMenu} />
            </Link>
          </li>
          <li>
            <Link className={style.Link} href="/ommig" passHref>
              <a className={style.Link} onClick={closeMenu}>
                OM MIG
              </a>
            </Link>
          </li>
          <li>
            <Link className={style.Link} href="/kompetenser" passHref>
              <a className={style.Link} onClick={closeMenu}>
                KOMPETENSER
              </a>
            </Link>
          </li>
          <li>
            <Link className={style.Link} href="/erfarenheter" passHref>
              <a className={style.Link} onClick={closeMenu}>
                ERFARENHETER
              </a>
            </Link>
          </li>
          <li>
            <Link className={style.Link} href="/kontaktamig" passHref>
              <a className={style.Link} onClick={closeMenu}>
                KONTAKT
              </a>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
