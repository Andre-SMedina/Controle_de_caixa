import styles from "./Input.module.css";

function InputRequired({
  type,
  name,
  text,
  placeholder,
  handleOnChange,
  value,
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
        required
      />
    </div>
  );
}

export default InputRequired;
