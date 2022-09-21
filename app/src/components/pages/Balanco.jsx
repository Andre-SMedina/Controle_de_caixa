import { useState } from "react";

import BalancoCard from "../balanco/BalancoCard";
import BalancoForm from "../balanco/BalancoForm";
import styles from "./Balanco.module.css";
import { Messages } from "../Functions";
import api from "../../utils/api";
import ProductFormAuth from "../products/ProductFormAuth";
import Message from "../layout/Message";

function Balanco() {
  const [showCard, setShowCard] = useState(false);
  const [data, setData] = useState([]);
  const [auth, setAuth] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  async function verifyAuth(password) {
    const response = (await api.post("/auth", password)).data;
    if (response) {
      setAuth(true);
    } else {
      Messages(setMessage, "Senha incorreta!", setType, "error");
    }
  }

  function findResult(result) {
    setData(result);
    setShowCard(true);
  }

  function remove(lista) {
    setData(lista);
  }

  return (
    <div className={styles.container}>
      {message && <Message type={type} text={message} />}
      <h1>Balanço de Vendas</h1>
      {auth ? (
        <>
          <h2>Pesquisar: </h2>
          <BalancoForm handleSubmit={findResult} />
          <div className={styles.find_card}>
            {showCard && <BalancoCard solds={data} handleDelete={remove} />}
          </div>
        </>
      ) : (
        <div className={styles.auth}>
          <ProductFormAuth handleSubmit={verifyAuth} />
        </div>
      )}
    </div>
  );
}

export default Balanco;
