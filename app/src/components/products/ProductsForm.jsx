import { useState } from "react";

import InputRequired from "../form/InputRequired";
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
    Array.from(document.querySelectorAll("input")).forEach((input) => {
      if (!["Cadastrar", "Encontrar", "Limpar"].includes(input.value)) {
        input.value = "";
      }
    });
  }

  return (
    <form onSubmit={submit} className={styles.form_container}>
      <h1>Cadastro</h1>
      <InputRequired
        type="text"
        name="name"
        text="Nome"
        placeholder="Insira o nome do produto"
        handleOnChange={handleChange}
        value={products.name ? products.name : ""}
      />
      <InputRequired
        type="text"
        name="brand"
        text="Marca"
        placeholder="Insira a marca do produto"
        handleOnChange={handleChange}
        value={products.brand ? products.brand : ""}
      />
      <InputRequired
        type="text"
        name="description"
        text="Descrição"
        placeholder="Insira a descrição do produto"
        handleOnChange={handleChange}
        value={products.description ? products.description : ""}
      />
      <InputRequired
        type="number"
        name="amount"
        text="Quantidade"
        placeholder="Insira a quantidade do produto"
        handleOnChange={handleChange}
        value={products.amount ? products.amount : ""}
      />
      <InputRequired
        type="number"
        name="price"
        text="Valor"
        placeholder="Insira a valor do produto"
        handleOnChange={handleChange}
        value={products.price ? products.price : ""}
      />
      <div className={styles.form_buttons}>
        <SubmitButton text="Cadastrar" />
        <Button handleOnClick={handleReset} text="Limpar" />
      </div>
    </form>
  );
}

export default ProductsForm;
