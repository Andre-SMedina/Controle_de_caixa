import { useState, useEffect } from "react";

import Button from "../layout/Button";
import ProductsForm from "../products/ProductsForm";
import ProductsFormFind from "../products/ProductsFormFind";
import styles from "./Products.module.css";
import DataBase from "../Functions";

function Products() {
  const [showRegister, setShowRegister] = useState(false);
  const [showFind, setShowFind] = useState(false);
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/Products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function createPost(product) {
    DataBase(product, "POST");
  }

  async function find(products) {
    const data = await DataBase({}, "GET", products.id);
    console.log(data);
  }

  function toggleRegister() {
    setShowRegister(!showRegister);
    if (showFind) setShowFind(!showFind);
  }
  function toggleFind() {
    setShowFind(!showFind);
    if (showRegister) setShowRegister(!showRegister);
  }
  return (
    <div className={styles.products_container}>
      <h1>Produtos</h1>
      <div className={styles.products_buttons}>
        <Button func={toggleRegister} text="Cadastrar" />
        <Button func={toggleFind} text="Encontrar" />
      </div>
      <div className={styles.products_forms}>
        {showRegister && <ProductsForm handleSubmit={createPost} />}
        {showFind && <ProductsFormFind handleSubmit={find} />}
      </div>
    </div>
  );
}

export default Products;
