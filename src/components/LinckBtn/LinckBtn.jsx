import styles from "./LinckBtn.module.css";

export const LinckBtn = ({ href, icon: Icon, currentLink }) => {
  return (
    <li className={styles[`${currentLink}LinkWrapp`]}>
      <a
        href={href}
        className={styles[`${currentLink}Link`]}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.currentTarget.blur()}
      >
        <div className={styles[`${currentLink}IconWrapp`]}>
          <Icon alt="icon" width="100%" height="100%" fill="currentcolor" />
        </div>
      </a>
    </li>
  );
};
