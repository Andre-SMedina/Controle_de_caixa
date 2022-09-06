import { useState } from "react";

import Button from "../layout/Button";
import ProductsForm from "../products/ProductsForm";
import ProductsFormFind from "../products/ProductsFormFind";
import styles from "./Products.module.css";
import { DataBase, Messages } from "../Functions";
import ProductsCard from "../products/ProductsCard";
import Message from "../layout/Message";
import ProductForm from "../products/ProductForm";

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

  function createPost(product) {
    product.name = product.name.toLowerCase();
    product.brand = product.brand.toLowerCase();
    product.description = product.description.toLowerCase();
    product.price = parseFloat(product.price).toFixed(2);

    DataBase(product, "POST", "", "products");
    Messages(setMessage, "Produto registrado com sucesso!", setType, "success");
  }

  async function find(data) {
    const id = data.id ? `/${data.id}` : "";
    const name = data.name ? `&name_like=${data.name}` : "";
    const description = data.description
      ? `&description_like=${data.description}`
      : "";
    const brand = data.brand ? `&brand_like=${data.brand}` : "";

    const param = `${name}${description}${brand}`;

    const dataFind = await DataBase(
      {},
      "GET",
      id || `?_sort=name${param}`,
      "products"
    );

    if (!dataFind.length) {
      Messages(setMessage, "Nenhum resultado", setType, "error");
      setShowFindResult(false);
    } else {
      setShowFindResult(true);
    }

    setFindResult(dataFind);
    setShowEdit(false);
  }

  async function editForm(id) {
    const dataFind = await DataBase({}, "GET", `/${id}`, "products");

    setEditProduct(dataFind[0]);

    setShowFindResult(false);
    setShowEdit(true);
  }

  async function editPost(product, id) {
    await DataBase(product, "PATCH", id, "products");

    setShowEdit(false);

    Messages(setMessage, "Produto alterado com sucesso!", setType, "success");
  }

  async function remove(id) {
    await DataBase({}, "DELETE", id, "products");

    const dataFind = await DataBase({}, "GET", "?_sort=name", "products");
    setFindResult(dataFind);
    setShowFindResult(true);
  }

  return (
    <div className={styles.products_container}>
      {message && <Message type={type} text={message} />}
      <h1>Produtos</h1>
      <div className={styles.products_buttons}>
        <Button handleOnClick={toggleRegister} text="Cadastrar" />
        <Button handleOnClick={toggleFind} text="Encontrar" />
      </div>
      <div className={styles.products_forms}>
        {showRegister && <ProductsForm handleSubmit={createPost} />}
        {showFind && <ProductsFormFind handleSubmit={find} />}
      </div>
      <div className={styles.product_card}>
        {showFindResult &&
          findResult.map((product) => (
            <ProductsCard
              product={product}
              key={product.id}
              handleEdit={editForm}
              handleRemove={remove}
            />
          ))}
        {showEdit && <ProductForm handleSubmit={editPost} data={editProduct} />}
      </div>
    </div>
  );
}

export default Products;
