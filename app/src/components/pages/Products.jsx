import { useState } from "react";

import Button from "../layout/Button";
import ProductsForm from "../products/ProductsForm";
import ProductsFormFind from "../products/ProductsFormFind";
import styles from "./Products.module.css";
import DataBase from "../Functions";
import ProductsCard from "../products/ProductsCard";
import Message from "../layout/Message";

function Products() {
  const [showRegister, setShowRegister] = useState(false);
  const [showFind, setShowFind] = useState(false);
  const [showFindResult, setShowFindResult] = useState(false);
  const [products, setProducts] = useState({});
  const [findResult, setFindResult] = useState([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

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
      setFindResult(products);
    }
    setShowFindResult(true);
  }

  function toggleRegister() {
    setShowRegister(!showRegister);
    if (showFind) setShowFind(!showFind);
  }
  async function toggleFind() {
    setShowFind(!showFind);
    if (showRegister) setShowRegister(!showRegister);
    const dataFind = await DataBase({}, "GET", "");
    setProducts(dataFind);
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
              value={product.value}
              id={product.id}
              key={product.id}
            />
          ))}
      </div>
    </div>
  );
}

export default Products;
