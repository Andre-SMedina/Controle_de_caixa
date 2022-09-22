import { useState, useEffect } from "react";
import { generate } from "short-uuid";
import { BsFillTrashFill, BsSearch } from "react-icons/bs";

import styles from "./Caixa.module.css";
import CaixaForm from "../caixa/CaixaForm";
import CaixaListBuy from "../caixa/CaixaListBuy";
import { Messages } from "../Functions";
import Message from "../layout/Message";
import Input from "../form/Input";
import api from "../../utils/api";

function Caixa() {
  const [listBuy, setListBuy] = useState([]);
  const [findProduct, setFindProduct] = useState([]);
  const [showFastFind, setShowFastFind] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    async function apiGet() {
      const data = (await api.get(`/temp`)).data;

      setListBuy(data.listBuy);
      setTotal(data.total);
    }

    apiGet();
  }, []);

  async function submit(cod, amount) {
    const finded = (await api.post(`/find`, { cod })).data;

    if ((finded.length > 1) | (finded.length < 1)) {
      document.querySelector("#focus").focus();
      Messages(setMessage, "Produto não encontrado!", setType, "error");
      return;
    }
    document.querySelector("#focus").focus();

    const item = finded[0];

    item.price = item.price.toFixed(2);

    if (amount) {
      item.total = (parseFloat(item.price) * parseFloat(amount)).toFixed(2);
      item.amount = amount;
    } else {
      item.total = item.price;
      item.amount = 1;
    }

    // setUid(uuid);
    item.uid = generate();

    const newTotal = (parseFloat(item.total) + parseFloat(total)).toFixed(2);
    setTotal(newTotal);
    setListBuy([...listBuy, item]);

    //table caixa
    const list = (await api.get(`/temp`)).data;
    list.listBuy.push(item);
    list.total = newTotal;
    // const newList = list;

    await api.patch("/temp", list);
  }

  async function finishedBuy(payment) {
    const list = (await api.get(`/temp`)).data;

    if (!list.listBuy.length) {
      return Messages(setMessage, "Nenhum produto na lista!", setType, "error");
    } else if (!payment) {
      return Messages(
        setMessage,
        "Escolha uma forma de pagamento!",
        setType,
        "error"
      );
    }

    const date = new Date();
    const dateFormated = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;

    const newList = {
      userId: list.listBuy[0].userId,
      listBuy: list.listBuy,
      total: list.total,
      items: list.listBuy.length,
      payment: payment,
      date: dateFormated,
    };

    await api.post("/caixa", newList);

    newList.listBuy = [];
    newList.total = "0.00";

    await api.patch("/temp", newList);

    setListBuy([]);
    setTotal(0);

    //alterar estoque
    await api.patch("/estoque", list.listBuy);

    return Messages(setMessage, "Finalizado com sucesso!", setType, "success");
  }

  async function removeListProduct(uid2) {
    let newTotal = 0;
    const newList = listBuy.filter((item) => {
      if (item.uid === uid2) {
        const sum = parseFloat(total) - parseFloat(item.total);
        newTotal = sum.toFixed(2);
        setTotal(newTotal);
      }
      return item.uid !== uid2;
    });

    setListBuy(newList);

    const list = (await api.get(`/temp`)).data;
    list.listBuy = newList;
    list.total = newTotal;

    await api.patch("/temp", list);
  }

  async function clearList() {
    setListBuy([]);
    setTotal("0.00");
    const list = { listBuy: [], total: "0.00" };
    await api.patch("/temp", list);
  }

  function toggleFastFind() {
    setShowFastFind(!showFastFind);
    setFindProduct([]);
  }

  async function fastFind(name) {
    const nameFind = name.target.value;

    if (nameFind.length > 1) {
      const listFound = (await api.post(`/find/`, { name: nameFind })).data;

      setFindProduct(listFound);
    } else setFindProduct([]);
  }

  return (
    <div className={styles.container}>
      {message && <Message text={message} type={type} />}
      <h1>Caixa</h1>
      <CaixaForm handleSubmit={submit} handleClick={finishedBuy} />
      <h2>Lista de Compras:</h2>
      <div className={styles.list_buy}>
        <div className={styles.list_buy_tittle}>
          <h3 className={styles.list_buy_tittle_product}>Produto</h3>
          <h3 className={styles.list_buy_tittle_description}>Descrição</h3>
          <h3 className={styles.list_buy_tittle_brand}>Marca</h3>
          <h3 className={styles.list_buy_tittle_price}>Preço</h3>
          <h3 className={styles.list_buy_tittle_amount}>Qtd</h3>
          <h3 className={styles.list_buy_tittle_total}>Total</h3>
          <span onClick={clearList}>
            <BsFillTrashFill />
          </span>
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
              key={generate()}
            />
          ))
        )}
        <div className={`${styles.list_buy_total} ${styles.list_buy_tittle}`}>
          <h3>Total:</h3>
          <h3>R$ {total}</h3>
        </div>
      </div>
      {showFastFind ? (
        <div className={styles.fastFind}>
          <h3>Consulta rápida</h3>
          <Input
            type="search"
            name="name"
            placeholder="Nome do produto (min 2 letras)"
            handleOnChange={fastFind}
            autoFocus={false}
          />
          <div onClick={toggleFastFind} className={styles.close_find}>
            X
          </div>
          {findProduct.map((product) => (
            <div key={product.cod} className={styles.fastFind_result}>
              <p>
                Nome: <span>{product.name}</span>
              </p>
              <p>
                Marca: <span>{product.brand}</span>
              </p>
              <p>
                Descrição: <span>{product.description}</span>
              </p>
              <p>
                Quantidade: <span>{product.amount}</span>
              </p>
              <p>
                Preço: <span>{product.price.toFixed(2)}</span>
              </p>
              <p>
                Cod. <span>{product.cod}</span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div onClick={toggleFastFind} className={styles.open_find}>
          <BsSearch />
        </div>
      )}
    </div>
  );
}

export default Caixa;
