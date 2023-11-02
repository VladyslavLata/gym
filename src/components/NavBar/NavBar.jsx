import { useState } from "react";
import Link from "next/link";

import { BtnIcon } from "../BtnIcon/BtnIcon";
import CloseIcon from "../../../public/close.svg";
import MenuIcon from "../../../public/burgerMenu.svg";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);

  const navData = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
  ];

  const togleShowMobileMenu = (showed) => setshowMobileMenu(showed);

  return (
    <>
      <nav className={styles.navigation}>
        <Link href="/" className={styles.logo}>
          Good<span className={styles.logoAccent}>lyfe</span>
        </Link>
        <div
          className={`${styles.linkListWrapp} ${
            showMobileMenu ? styles.openMobileMenu : ""
          }`}
        >
          <ul className={styles.navList}>
            {navData.map(({ title, path }) => (
              <li key={title} className={styles.linkWrapp}>
                <Link
                  href={path}
                  className={styles.link}
                  onClick={() => {
                    if (!showMobileMenu) {
                      return;
                    }
                    togleShowMobileMenu(false);
                  }}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <BtnIcon svg={CloseIcon} onClick={() => togleShowMobileMenu(false)} />
        </div>
      </nav>
      <BtnIcon
        svg={MenuIcon}
        name="menu"
        onClick={() => togleShowMobileMenu(true)}
      />
    </>
  );
};
