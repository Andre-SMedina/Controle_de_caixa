import styles from "./Confirm.module.css";
import Button from "../layout/Button";

function Confirm({ text, handleClick }) {
  function yes() {
    handleClick("sim");
  }
  function no() {
    handleClick("nao");
  }
  return (
    <div className={styles.container}>
      <h2>{text}</h2>
      <div>
        <Button text="Sim" handleOnClick={yes} />
        <Button text="Não" handleOnClick={no} />
      </div>
    </div>
  );
}

export default Confirm;
