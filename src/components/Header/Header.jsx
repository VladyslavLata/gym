import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/COntainer";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <NavBar />
      </Container>
    </header>
  );
};
