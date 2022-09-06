import styles from "./Button.module.css";

function Button({ handleOnClick, text }) {
  return (
    <input
      className={styles.btn}
      type="button"
      value={text}
      onClick={handleOnClick}
    />
  );
}

export default Button;
