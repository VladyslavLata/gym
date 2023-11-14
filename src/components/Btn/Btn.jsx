import styles from "./Btn.module.css";

export const Btn = ({ text, btnStyles, onClick }) => {
  return (
    <button
      className={`${styles.btn} ${
        btnStyles === "main" ? styles.btnMain : styles.btnSecond
      }`}
      type="button"
      onClick={(e) => {
        e.currentTarget.blur();
        if (!onClick) {
          return;
        }
        onClick();
      }}
    >
      {text}
    </button>
  );
};
