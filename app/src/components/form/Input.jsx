import styles from "./Input.module.css";

function Input({
  type,
  name,
  text,
  placeholder,
  handleOnChange,
  value,
  myFocus,
}) {
  return (
    <div className={styles.input_container}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        autoFocus={myFocus}
      />
    </div>
  );
}

export default Input;
