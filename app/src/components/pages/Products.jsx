import { useState } from "react";

import Button from "../layout/Button";
import ProductsForm from "../products/ProductsForm";
import ProductsFormFind from "../products/ProductsFormFind";
import styles from "./Products.module.css";
import DataBase from "../Functions";

function Products() {
  const [showRegister, setShowRegister] = useState(false);
  const [showFind, setShowFind] = useState(false);

  function createPost(product) {
    DataBase(product, "POST");
  }

  function find() {}

  function toggleRegister() {
    setShowRegister(!showRegister);
  }
  function toggleFind() {
    setShowFind(!showFind);
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
