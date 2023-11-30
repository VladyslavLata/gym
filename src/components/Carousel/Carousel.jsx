import Image from "next/image";
import Slider from "react-slick";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";
import "slick-carousel/slick/slick.css";
import styles from "./Carousel.module.css";

export const CarouselGymImg = ({ dataImg }) => {
  // return (
  //   <Carousel
  //     showThumbs={false}
  //     showStatus={false}
  //     showArrows={false}
  //     autoPlay
  //     infiniteLoop
  //     animationHandler="fade"
  //     renderIndicator={(onClickHandler, isSelected, index, label) => {
  //       return (
  //         <li
  //           className={
  //             isSelected
  //               ? `${styles.indicator} ${styles.currentIndicator}`
  //               : styles.indicator
  //           }
  //           onClick={onClickHandler}
  //           onKeyDown={onClickHandler}
  //           value={index}
  //           key={index}
  //           role="button"
  //           tabIndex={0}
  //           title={`${label} ${index + 1}`}
  //           aria-label={`${label} ${index + 1}`}
  //         />
  //       );
  //     }}
  //   >
  //     {dataImg.map(({ img, alt }) => (
  //       <div key={alt} className={styles.imgWrapp}>
  //         <Image
  //           src={img}
  //           fill
  //           // width={"100%"}
  //           // height={"100%"}
  //           alt={alt}

  //           //     sizes="(max-width: 375px) 90vw,
  //           // (min-width: 376px) 295px, (min-width: 768px) 670px
  //           //       (min-width: 1440px) 640px"
  //         />
  //       </div>
  //     ))}
  //   </Carousel>
  // );
  const settings = {
    dots: true,
    dotsClass: `${styles.dotsListWrapp}`,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className={styles.dotsList}>{dots}</ul>
      </div>
    ),
    customPaging: () => <div className={styles.dot}></div>,
  };
  return (
    <Slider {...settings}>
      {dataImg.map(({ img, alt }, i) => (
        <div key={alt} className={styles.imgWrapp}>
          <Image src={img} fill alt={alt} priority={i === 0} />
        </div>
      ))}
    </Slider>
  );
};
