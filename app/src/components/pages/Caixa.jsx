import styles from "./Caixa.module.css";

function Caixa() {
  return (
    <div className={styles.container}>
      <h1>Caixa</h1>
      <input type="search" autoFocus="true" />
      <input type="tel" accessKey="1" title="alt+t" />
    </div>
  );
}

export default Caixa;
