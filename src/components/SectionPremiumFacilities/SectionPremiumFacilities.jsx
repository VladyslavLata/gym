import { useRef } from "react";

import { Container } from "../Container/Container";
import { Img } from "../Img/Img";
import { Title } from "../Title/Title";
import { Btn } from "../Btn/Btn";
import { useObserver } from "../../hooks/useObserver";

import gymRoom from "../../../public/gym-room.jpg";
import weights from "../../../public/weights.jpg";

import styles from "./SectionPremiumFacilities.module.css";

const Images = [
  { url: gymRoom, num: "Third", alt: "gym room" },
  { url: weights, num: "Fourth", alt: "weights" },
];

export const SectionPremiumFacilities = () => {
  const elementRef = useRef(null);
  const { isIntersecting } = useObserver(0, elementRef);

  return (
    <section className={styles.section} ref={elementRef}>
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
            <Title text="Premium Facilities" />
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget lectus urna. Nulla magna tortor, bibendum in molestie sed,
              gravida nec felis. Sed id egestasegestas risus, ut imperdiet
              augue.
            </p>
            <Btn text="Learn more" />
          </div>
        </div>
        {/* <div className={styles.wrapp}>
          <Title text="Premium Facilities" />
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            eget lectus urna. Nulla magna tortor, bibendum in molestie sed,
            gravida nec felis. Sed id egestasegestas risus, ut imperdiet augue.
          </p>
          <Btn text="View the FAQ" />
        </div> */}
      </Container>
    </section>
  );
};
