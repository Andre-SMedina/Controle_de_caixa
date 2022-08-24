import styles from "./Button.module.css";

function Button({ func, text }) {
  return (
    <button className={styles.btn} onClick={func}>
      {text}
    </button>
  );
}

export default Button;
