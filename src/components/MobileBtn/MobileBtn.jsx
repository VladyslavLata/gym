// import Image from "next/image";

// import closeIcon from "../../../public/close.svg";
// import menuIcon from "../../../public/burgerMenu.svg";
import styles from "./MobileBtn.module.css";

export const MobileBtn = ({ name, svg: Svg }) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${
        name === "menu" ? styles.btnMenu : styles.btnClose
      }`}
    >
      <Svg
        // className={styles.iconClose}
        // src={name === "menu" ? menuIcon : closeIcon}
        // alt="icon"
        width={20}
        height={20}
        fill="currentcolor"
      />
    </button>
  );
};
