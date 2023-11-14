import styles from "./BtnIcon.module.css";

export const BtnIcon = ({ name, svg: Svg, w = 20, h = 20, onClick }) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${
        name === "menu" ? styles.btnMenu : styles.btnClose
      }`}
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
    >
      <Svg alt="icon" width={w} height={h} fill="currentcolor" />
    </button>
  );
};
