import { Title } from "../Title/Title";
import { Container } from "../Container/Container";

import styles from "./Social.module.css";

const socialIcons = [];

export const Social = () => {
  return (
    <section className={styles.section}>
      <Container>
        <Title text={"Social"} />
        <ul>
          {/* {socialIcons.map(({}) => (
          
          ))} */}
        </ul>
      </Container>
    </section>
  );
};
