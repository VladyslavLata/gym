import { useState } from "react";

import styles from "./LinckBtn.module.css";

export const LinckBtn = ({ href, icon: Icon, name, currentLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <li
      className={`${styles[`${currentLink}LinkWrapp`]} ${
        isHovered && currentLink !== "main" ? styles.linkWrappHover : ""
      }`}
    >
      <a
        href={href}
        // className={styles.link}
        // className={`${styles.link} ${styles[`${currentLink}Link`]}`}
        className={`${styles.link} ${styles[`${currentLink}Link`]} ${
          isHovered && currentLink === "main" ? styles.mainHover : ""
        }`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`we are on ${name}`}
        onClick={(e) => {
          e.currentTarget.blur();
          setIsHovered(false);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={styles[`${currentLink}IconWrapp`]}>
          <Icon alt="icon" width="100%" height="100%" fill="currentColor" />
        </div>
      </a>
    </li>
  );
};
