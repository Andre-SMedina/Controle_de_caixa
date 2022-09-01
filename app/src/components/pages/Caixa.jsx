import { useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./Caixa.module.css";
import CaixaForm from "../caixa/CaixaForm";
import CaixaListBuy from "../caixa/CaixaListBuy";
import { DataBase, Messages } from "../Functions";

function Caixa() {
  const [listBuy, setListBuy] = useState([]);

  async function submit(id) {
    const item = await DataBase({}, "GET", id);
    setListBuy([...listBuy, item]);
  }
  return (
    <div className={styles.container}>
      <h1>Caixa</h1>

      <CaixaForm handleSubmit={submit} />
      <h2>Lista de Compras:</h2>
      {listBuy.length === 1 ? (
        <CaixaListBuy product={listBuy[0]} />
      ) : (
        listBuy.map((item) => <CaixaListBuy product={item} key={uuid()} />)
      )}
    </div>
  );
}

export default Caixa;
