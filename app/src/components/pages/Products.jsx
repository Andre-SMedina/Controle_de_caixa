import { useState } from "react";

import Button from "../layout/Button";
import ProductsForm from "../products/ProductsForm";
import ProductsFormFind from "../products/ProductsFormFind";
import styles from "./Products.module.css";
import { Messages } from "../Functions";
import ProductsCard from "../products/ProductsCard";
import Message from "../layout/Message";
import ProductForm from "../products/ProductForm";
import api from "../../utils/api";
import ProductFormAuth from "../products/ProductFormAuth";
import Confirm from "../layout/Confirm";

function Products() {
  //mostra o formulário para cadastrar um produto
  const [showRegister, setShowRegister] = useState(false);
  const [showFind, setShowFind] = useState(false);
  const [showFindResult, setShowFindResult] = useState(false);
  const [editProduct, setEditProduct] = useState({});
  //mostrar o formulário de edição
  const [showEdit, setShowEdit] = useState(false);
  const [findResult, setFindResult] = useState([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");
  const [auth, setAuth] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [removeId, setRemoveId] = useState("");

  async function verifyAuth(password) {
    const response = (await api.post("/auth", password)).data;
    if (response) {
      setAuth(true);
    } else {
      Messages(setMessage, "Senha incorreta!", setType, "error");
    }
  }

  function toggleRegister() {
    setShowRegister(!showRegister);
    setShowFind(false);
    setShowFindResult(false);
    setShowEdit(false);
  }

  function toggleFind() {
    setShowFind(!showFind);
    if (showRegister) setShowRegister(!showRegister);
  }

  async function createPost(product) {
    product.name = product.name.toLowerCase();
    product.brand = product.brand.toLowerCase();
    product.description = product.description.toLowerCase();

    await api.post("/cad", product);

    Messages(setMessage, "Produto registrado com sucesso!", setType, "success");
  }

  async function find(data) {
    await api.post(`/find`, data).then((data) => {
      setFindResult(data.data);
    });
    setShowFindResult(true);
    setShowEdit(false);
  }

  async function editCardForm(cod) {
    const data = { cod };
    const dataFind = (await api.post(`/find`, data)).data[0];

    setEditProduct(dataFind);

    setShowFindResult(false);
    setShowEdit(true);
  }

  async function editCardPost(product) {
    const edit = await api.patch("/edit", product);

    console.log(edit);

    Messages(setMessage, "Produto alterado com sucesso!", setType, "success");
    setShowEdit(false);
  }

  async function confirm(response) {
    setShowConfirm(true);
    if (response === "sim") {
      setShowConfirm(false);
      const products = await api.delete(`/delete/${removeId}`);

      setFindResult(products.data);
      setShowFindResult(true);
    } else if (response === "nao") {
      setShowConfirm(false);
    }
  }

  async function remove(id) {
    setRemoveId(id);
    confirm();
  }

  return (
    <div className={styles.products_container}>
      {message && <Message type={type} text={message} />}
      {showConfirm && (
        <Confirm text={"Deseja realmente apagar?"} handleClick={confirm} />
      )}
      <h1>Produtos</h1>
      {auth ? (
        <div className={styles.products_buttons}>
          <Button handleOnClick={toggleRegister} text="Cadastrar" />
          <Button handleOnClick={toggleFind} text="Encontrar" />
        </div>
      ) : (
        <div className={styles.products_buttons}>
          <ProductFormAuth handleSubmit={verifyAuth} />
        </div>
      )}
      <div className={styles.products_forms}>
        {showRegister && <ProductsForm handleSubmit={createPost} />}
        {showFind && <ProductsFormFind handleSubmit={find} />}
      </div>
      <div className={styles.product_card}>
        {showFindResult &&
          findResult.map((product) => (
            <ProductsCard
              product={product}
              key={product.cod}
              handleEdit={editCardForm}
              handleRemove={remove}
            />
          ))}
        {showEdit && (
          <ProductForm handleSubmit={editCardPost} data={editProduct} />
        )}
      </div>
    </div>
  );
}

export default Products;
