import styles from "./Message.module.css";

function Message({ type, text }) {
  return <p className={`${styles.container} ${styles[type]}`}>{text}</p>;
}

export default Message;
