import { useState } from "react";

import Button from "../layout/Button";
import RegisterForm from "../products/RegisterForm";
import styles from "./Products.module.css";

function Products() {
  const [showRegister, setShowRegister] = useState(false);

  function createPost(product) {
    console.log("nivel1", product);
  }

  function alter() {
    setShowRegister(!showRegister);
  }
  return (
    <div className={styles.products_container}>
      <h1>Produtos</h1>
      <div className={styles.products_buttons}>
        <Button func={alter} text="Cadastrar" />
        <Button text="Encontrar" />
      </div>
      {showRegister && <RegisterForm handleSubmit={createPost} />}
    </div>
  );
}

export default Products;
