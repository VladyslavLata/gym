import { useState, useEffect, useRef } from "react";

import { Container } from "../Container/Container";
import { Img } from "../Img/Img";
import { Title } from "../Title/Title";
import { useObserver } from "../../hooks/useObserver";

import maleLiftingWeights from "../../../public/male-lifting-weights.jpg";
import femaleDoingSitups from "../../../public/female-doing-situps.jpg";
import styles from "./SectionNewBody.module.css";

const Images = [
  { url: maleLiftingWeights, num: "First", alt: "male lifting weights" },
  { url: femaleDoingSitups, num: "Second", alt: "female doing situps" },
];

export const SectionNewBody = () => {
  const elementRef = useRef(null);
  const { isIntersecting } = useObserver(0, elementRef);
  console.log(isIntersecting);

  return (
    <section ref={elementRef} className={styles.section}>
      <Container>
        <div className={styles.wrappContent}>
          <div className={styles.wrappImages}>
            {Images.map(({ url, num, alt }) => (
              <Img
                key={alt}
                url={url}
                num={num}
                alt={alt}
                isVisibile={isIntersecting}
              />
            ))}
          </div>
          <div className={styles.wrappText}>
            <Title text="Meet your new body" />
            <p>
              asdasd Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Eius nobis consequuntur consectetur quo itaque voluptas aliquam
              magni harum ipsam, natus sed asperiores nam praesentium ut
              similique, ad est iusto nihil excepturi, saepe illo! Magni
              perspiciatis tempora nostrum perferendis, a ut nisi exercitationem
              quis? Quas impedit ad eos, possimus, nemo sequi ipsam eveniet esse
              ducimus nam quae minus repudiandae, doloremque provident eius
              sapiente natus excepturi. Harum ullam maxime veniam, eligendi
              deserunt autem similique quasi modi architecto est quod sit
              perspiciatis error sint molestiae? Accusantium ipsam sed rem, quis
              molestiae corporis! Repudiandae, placeat odit. Recusandae
              consectetur tempora consequuntur! Aspernatur temporibus explicabo
              iusto.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};
