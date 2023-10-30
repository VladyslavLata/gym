import Link from "next/link";

import styles from "./NavBar.module.css";

export const NavBar = () => {
  const navData = [
    { title: "Home", path: "/" },
    { title: "About us", path: "/about" },
  ];
  return (
    <nav className={styles.navigation}>
      <Link href="/" className={styles.logo}>
        Good<span className={styles.logoAccent}>lyfe</span>
      </Link>
      <div className={styles.linkListWrapp}>
        <ul className={styles.navList}>
          {navData.map(({ title, path }) => (
            <li key={title}>
              <Link href={path} className={styles.link}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
