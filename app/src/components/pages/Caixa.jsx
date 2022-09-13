import { useState, useEffect } from "react";
import { generate } from "short-uuid";
import { BsFillTrashFill, BsSearch } from "react-icons/bs";

import styles from "./Caixa.module.css";
import CaixaForm from "../caixa/CaixaForm";
import CaixaListBuy from "../caixa/CaixaListBuy";
import { DataBase, Messages } from "../Functions";
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
      const data = (await api.get("/temp")).data;
      setListBuy(data.listBuy);
      setTotal(data.total);
    }

    apiGet();
  }, []);

  async function submit(cod, fraction, amount) {
    const find = (await api.get(`/find/${cod}`)).data;

    if (!find.length) {
      Messages(setMessage, "Produto não encontrado!", setType, "error");
      return;
    }
    const item = find[0];
    item.price = item.price.toFixed(2);

    if (fraction) {
      item.price = (parseFloat(item.price) * parseFloat(fraction)).toFixed(2);
    }
    if (amount) {
      item.price = (parseFloat(item.price) * parseFloat(amount)).toFixed(2);
      item.amount = amount;
    } else {
      item.amount = 1;
    }

    // setUid(uuid);
    item.uid = generate();

    const price = (parseFloat(item.price) + parseFloat(total)).toFixed(2);

    setTotal(price);
    setListBuy([...listBuy, item]);

    //table caixa
    const list = (await api.get("/temp")).data;
    list.listBuy.push(item);
    list.total = price;

    await api.patch("/temp", list);
  }

  async function finishedBuy(payment) {
    const list = (await api.get("/temp")).data;

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
    const dateFormat = `${date.toLocaleDateString()} - ${date.toLocaleTimeString()}`;

    list.date = dateFormat;
    // list.id = "";
    list.items = list.listBuy.length;
    list.payment = payment;

    await api.post("/caixa", list);

    list.listBuy = [];
    list.total = "0.00";

    await api.patch("/temp", list);

    setListBuy([]);
    setTotal(0);

    return Messages(setMessage, "Finalizado com sucesso!", setType, "success");
  }

  async function removeListProduct(uid2) {
    let price = 0;
    const newList = listBuy.filter((item) => {
      if (item.uid === uid2) {
        const sum = parseFloat(total) - parseFloat(item.price);
        price = sum.toFixed(2);
        setTotal(price);
      }
      return item.uid !== uid2;
    });

    setListBuy(newList);

    const list = await (await api.get("/temp")).data;
    list.listBuy = newList;
    list.total = price;

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

  async function find(name) {
    const nameFind = name.target.value;

    if (nameFind.length > 1) {
      const listFind = await DataBase(
        {},
        "GET",
        `?_sort=name&name_like=${nameFind}`,
        "products"
      );

      setFindProduct(listFind);
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
          <h3 className={styles.list_buy_tittle_amount}>Qtd</h3>
          <h3 className={styles.list_buy_tittle_price}>Preço</h3>
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
            handleOnChange={find}
            autoFocus={false}
          />
          <div onClick={toggleFastFind} className={styles.close_find}>
            X
          </div>
          {findProduct.map((product) => (
            <div key={product.id} className={styles.fastFind_result}>
              <p>
                Nome: <span>{product.name}</span>
              </p>
              <p>
                Marca: <span>{product.brand}</span>
              </p>
              <p>
                Tipo: <span>{product.description}</span>
              </p>
              <p>
                Preço: <span>{product.price}</span>
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
