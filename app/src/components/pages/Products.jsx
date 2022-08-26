import { useState } from "react";

import Button from "../layout/Button";
import ProductsForm from "../products/ProductsForm";
import styles from "./Products.module.css";
import DataBase from "../Functions";

function Products() {
  const [showRegister, setShowRegister] = useState(false);

  function createPost(product) {
    DataBase(product, "POST");
  }

  function toggle() {
    setShowRegister(!showRegister);
  }
  return (
    <div className={styles.products_container}>
      <h1>Produtos</h1>
      <div className={styles.products_buttons}>
        <Button func={toggle} text="Cadastrar" />
        <Button text="Encontrar" />
      </div>
      {showRegister && <ProductsForm handleSubmit={createPost} />}
    </div>
  );
}

export default Products;
