import styles from "./Button.module.css";

function Button({ func, text }) {
  return (
    <input className={styles.btn} type="button" value={text} onClick={func} />
  );
}

export default Button;
