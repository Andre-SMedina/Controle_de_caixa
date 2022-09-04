import { useState } from "react";
import { v4 as uuid } from "uuid";

import styles from "./Caixa.module.css";
import CaixaForm from "../caixa/CaixaForm";
import CaixaListBuy from "../caixa/CaixaListBuy";
import { DataBase, Messages } from "../Functions";
import Message from "../layout/Message";

function Caixa() {
  const [listBuy, setListBuy] = useState([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [total, setTotal] = useState(0);
  const [uid, setUid] = useState(0);

  async function submit(id) {
    const find = await DataBase({}, "GET", `/${id}`);

    if (!find.length) {
      Messages(setMessage, "Produto não encontrado!", setType, "error");
      return;
    }
    const item = find[0];

    setUid(uuid);
    item.uid = uid;

    const sum = parseFloat(item.price) + parseFloat(total);
    const price = sum.toFixed(2);

    setTotal(price);
    setListBuy([...listBuy, item]);
  }

  function removeListProduct(uid2) {
    const newList = listBuy.filter((item) => {
      if (item.uid === uid2) {
        const sum = parseFloat(total) - parseFloat(item.price);
        const price = sum.toFixed(2);
        setTotal(price);
      }
      return item.uid !== uid2;
    });

    setListBuy(newList);
    return 4;
  }
  return (
    <div className={styles.container}>
      {message && <Message text={message} type={type} />}
      <h1>Caixa</h1>
      <CaixaForm handleSubmit={submit} />
      <h2>Lista de Compras:</h2>
      <div className={styles.list_buy}>
        <div className={styles.list_buy_tittle}>
          <h3 className={styles.list_buy_tittle_product}>Produto</h3>
          <h3 className={styles.list_buy_tittle_description}>Descrição</h3>
          <h3 className={styles.list_buy_tittle_brand}>Marca</h3>
          <h3 className={styles.list_buy_tittle_price}>Preço</h3>
        </div>
        {listBuy.length === 1 ? (
          <CaixaListBuy
            handleOnRemove={removeListProduct}
            product={listBuy[0]}
          />
        ) : (
          listBuy.map((item) => (
            <CaixaListBuy
              items={[setListBuy, listBuy, setTotal, total]}
              handleOnRemove={removeListProduct}
              product={item}
              key={uuid()}
            />
          ))
        )}
        <div className={`${styles.list_buy_total} ${styles.list_buy_tittle}`}>
          <h3>Total:</h3>
          <h3>R$ {total}</h3>
        </div>
      </div>
    </div>
  );
}

export default Caixa;
