import styles from "./LinckBtn.module.css";

export const LinckBtn = ({ key, href, icon: Icon, currentLinck }) => {
  return (
    <li key={key} className={styles[`${currentLinck}LinckWrapp`]}>
      <a
        href={href}
        className={styles[`${currentLinck}Linck`]}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles[`${currentLinck}IconWrapp`]}>
          <Icon alt="icon" width="100%" height="100%" fill="currentcolor" />
        </div>
      </a>
    </li>
  );
};
