import { useState, useEffect, useRef } from "react";

import { Container } from "../Container/Container";
import { useObserver } from "../../hooks/useObserver";

import styles from "./SectionNewBody.module.css";

export const SectionNewBody = () => {
  const elementRef = useRef(null);
  const { isIntersecting } = useObserver(0, elementRef);
  console.log(isIntersecting);

  return (
    <section ref={elementRef} className={styles.section}>
      <Container></Container>
    </section>
  );
};
