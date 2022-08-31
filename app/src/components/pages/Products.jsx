import { useState } from "react";

import Button from "../layout/Button";
import ProductsForm from "../products/ProductsForm";
import ProductsFormFind from "../products/ProductsFormFind";
import styles from "./Products.module.css";
import DataBase from "../Functions";
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
  const [products, setProducts] = useState({});
  const [findResult, setFindResult] = useState([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  function toggleRegister() {
    setShowRegister(!showRegister);
    setShowFind(false);
    setShowFindResult(false);
    setShowEdit(false);
  }

  async function toggleFind() {
    setShowFind(!showFind);
    if (showRegister) setShowRegister(!showRegister);
    const dataFind = await DataBase({}, "GET", "");

    setProducts(dataFind);
  }

  function filter(props, value) {
    const findValues = products.filter((e) => {
      return e[props] === value;
    });

    setFindResult(findValues);

    if (findValues.length === 0) {
      setMessage("Nenhum resultado");
      setType("error");
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  }

  function createPost(product) {
    product.product = product.product.toLowerCase();
    product.brand = product.brand.toLowerCase();
    product.description = product.description.toLowerCase();

    DataBase(product, "POST", "");
    setMessage("Produto registrado com sucesso!");
    setType("success");
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }

  async function find(data) {
    if (data.id) {
      filter("id", Number(data.id));
    } else if (data.product) {
      data.product = data.product.toLowerCase();
      filter("product", data.product);
    } else if (data.brand) {
      data.brand = data.brand.toLowerCase();
      filter("brand", data.brand);
    } else if (data.description) {
      data.description = data.description.toLowerCase();
      filter("description", data.description);
    } else {
      const dataFind = await DataBase({}, "GET", "");
      sort(dataFind);
      setFindResult(dataFind);
    }
    setShowFindResult(true);
    setShowEdit(false);
  }

  async function editForm(id) {
    const dataFind = await DataBase({}, "GET", id);

    setEditProduct(dataFind);

    setShowFindResult(false);
    setShowEdit(true);
  }

  async function editPost(product, id) {
    await DataBase(product, "PATCH", id);

    setShowEdit(false);

    setMessage("Produto alterado com sucesso!");
    setType("success");
    setTimeout(() => {
      setMessage("");
    }, 2000);

    const dataFind = await DataBase({}, "GET", "");
    setProducts(dataFind);
  }

  async function remove(id) {
    await DataBase({}, "DELETE", id);

    const dataFind = await DataBase({}, "GET", "");
    sort(dataFind);
    setFindResult(dataFind);
    setShowFindResult(true);
    setShowEdit(false);
  }

  function sort(list) {
    list.sort((a, b) => {
      if (a.product < b.product) {
        return -1;
      } else {
        return true;
      }
    });
  }

  return (
    <div className={styles.products_container}>
      {message && <Message type={type} text={message} />}
      <h1>Produtos</h1>
      <div className={styles.products_buttons}>
        <Button func={toggleRegister} text="Cadastrar" />
        <Button func={toggleFind} text="Encontrar" />
      </div>
      <div className={styles.products_forms}>
        {showRegister && <ProductsForm handleSubmit={createPost} />}
        {showFind && <ProductsFormFind handleSubmit={find} />}
      </div>
      <div className={styles.product_card}>
        {showFindResult &&
          findResult.map((product) => (
            <ProductsCard
              product={product.product}
              brand={product.brand}
              description={product.description}
              amount={product.amount}
              price={product.value}
              id={product.id}
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
