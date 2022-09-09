import { useState } from "react";

import BalancoCard from "../balanco/BalancoCard";
import BalancoForm from "../balanco/BalancoForm";
import styles from "./Balanco.module.css";

function Balanco() {
  const [showCard, setShowCard] = useState(false);
  const [data, setData] = useState([]);

  function findResult(result) {
    setData(result);
    setShowCard(true);
  }

  function remove(lista) {
    setData(lista);
  }

  return (
    <div className={styles.container}>
      <h1>Balanço de Vendas</h1>
      <h2>Pesquisar: </h2>
      <BalancoForm handleSubmit={findResult} />
      <div className={styles.find_card}>
        {showCard && <BalancoCard solds={data} handleDelete={remove} />}
      </div>
    </div>
  );
}

export default Balanco;
