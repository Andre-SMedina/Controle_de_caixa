import { useState } from "react";

import Input from "../form/Input";
import styles from "./RegisterForm.module.css";

function RegisterForm({ handleSubmit }) {
  const [products, setProducts] = useState({});

  function submit(e) {
    e.preventDefault();
    handleSubmit(products);
  }
  function handleChange(e) {
    setProducts({ ...products, [e.target.name]: e.target.value });
    console.log(products);
  }

  return (
    <form onSubmit={submit} className={styles.form_container}>
      <Input
        type="text"
        name="name"
        text="Nome do produto"
        placeholder="Insira o nome do produto"
        handleOnChange={handleChange}
        value={products.name ? products.name : ""}
      />
      <Input
        type="number"
        name="qtd"
        text="Quantidade do produto"
        placeholder="Insira a quantidade do produto"
        handleOnChange={handleChange}
        value={products.qtd ? products.qtd : ""}
      />
      <input type="submit" value="vai" />
    </form>
  );
}

export default RegisterForm;
