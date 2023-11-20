import Image from "next/image";

import { Container } from "../Container/Container";
import { Title } from "../Title/Title";
import { Btn } from "../Btn/Btn";
import gymBG from "../../../public/gym-bg.jpg";
import styles from "./SectionBecomeMore.module.css";

export const SectionBecomeMore = () => {
  return (
    <section className={styles.section}>
      <div className={styles.wrappImg}>
        <Image
          src={gymBG}
          fill
          alt="a man doing pull-ups on the horizontal bar"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <Container currentContainer="becomeMoreContainer">
        <Title
          text="Become more than you are"
          currentTitle="titleAccentFirst"
        />
        <p className={styles.text}>
          Staying active is great fun and keeps you healthy. Check out how you
          can join in.
        </p>
        <Btn text="Let's do it!" btnStyles="main" />
      </Container>
    </section>
  );
};
