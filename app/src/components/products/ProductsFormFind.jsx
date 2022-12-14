import { useState } from "react";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import Button from "../layout/Button";
import styles from "./ProductsForm.module.css";

function ProductsForm({ handleSubmit }) {
  const [products, setProducts] = useState({});

  function submit(e) {
    e.preventDefault();
    handleSubmit(products);
  }
  function handleChange(e) {
    setProducts({ ...products, [e.target.name]: e.target.value });
  }
  function handleReset() {
    setProducts({});
  }

  return (
    <form onSubmit={submit} className={styles.form_container}>
      <h1>Encontrar</h1>
      <Input
        type="search"
        name="name"
        text="Nome"
        placeholder="Insira o nome do produto"
        handleOnChange={handleChange}
        value={products.name ? products.name : ""}
      />
      <Input
        type="search"
        name="brand"
        text="Marca"
        placeholder="Insira a marca do produto"
        handleOnChange={handleChange}
        value={products.brand ? products.brand : ""}
      />
      <Input
        type="search"
        name="description"
        text="Descrição"
        placeholder="Insira a descrição do produto"
        handleOnChange={handleChange}
        value={products.description ? products.description : ""}
      />
      <Input
        type="number"
        name="cod"
        text="Código"
        placeholder="Insira o código do produto"
        handleOnChange={handleChange}
        value={products.cod ? products.cod : ""}
      />

      <div className={styles.form_buttons}>
        <SubmitButton text="Buscar" />
        <Button handleOnClick={handleReset} text="Limpar" />
      </div>
    </form>
  );
}

export default ProductsForm;
