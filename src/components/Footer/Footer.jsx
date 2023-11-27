import Link from "next/link";

import { Container } from "../Container/Container";

import { manrope, poppins } from "../../fonts/fonts";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`${manrope.variable} ${styles.footer}`}>
      <Container>
        <div>
          <Link href="/" className={`${poppins.variable} ${styles.logo}`}>
            Good<span className={styles.logoAccent}>lyfe</span>
          </Link>
          <p className={styles.text}>
            Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc
            quam ac sed turpis volutpat. Cursus sed massa non nisi, placerat.
          </p>
        </div>
      </Container>
    </footer>
  );
};
