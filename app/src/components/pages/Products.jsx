import { useState } from "react";

import Button from "../layout/Button";
import ProductsForm from "../products/ProductsForm";
import ProductsFormFind from "../products/ProductsFormFind";
import styles from "./Products.module.css";
import { DataBase, Messages } from "../Functions";
import ProductsCard from "../products/ProductsCard";
import Message from "../layout/Message";
import ProductForm from "../products/ProductForm";
import api from "../../utils/api";

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

  async function createPost(product) {
    product.name = product.name.toLowerCase();
    product.brand = product.brand.toLowerCase();
    product.description = product.description.toLowerCase();

    await api.post("/cad", product);

    Messages(setMessage, "Produto registrado com sucesso!", setType, "success");
  }

  async function find(data) {
    await api
      .get(`/find/${data.id}-${data.name}-${data.brand}-${data.description}`)
      .then((data) => {
        setFindResult(data.data);
      });
    setShowFindResult(true);
    setShowEdit(false);

    if (false) {
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
  }

  async function editForm(id) {
    const dataFind = (await api.get(`/find/${id}`)).data;

    setEditProduct(dataFind[0]);

    setShowFindResult(false);
    setShowEdit(true);
  }

  async function editPost(product, id) {
    await api.patch("/edit", product);

    Messages(setMessage, "Produto alterado com sucesso!", setType, "success");
  }

  async function remove(id) {
    const products = await api.delete(`/delete/${id}`);

    setFindResult(products.data);
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
              key={product.cod}
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
