import { Container } from "../Container/Container";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <p>FooTER</p>
      </Container>
    </footer>
  );
};
