import { useState } from "react";

import Input from "../form/Input";
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
        name="product"
        text="Nome"
        placeholder="Insira o nome do produto"
        handleOnChange={handleChange}
        value={products.product ? products.product : ""}
      />
      <Input
        type="number"
        name="amount"
        text="Quantidade"
        placeholder="Insira a quantidade do produto"
        handleOnChange={handleChange}
        value={products.amount ? products.amount : ""}
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
      <Input
        type="number"
        name="value"
        text="Valor"
        placeholder="Insira a valor do produto"
        handleOnChange={handleChange}
        value={products.value ? products.value : ""}
      />
      <div className={styles.form_buttons}>
        <SubmitButton text="Cadastrar" />
        <Button func={handleReset} text="Limpar" />
      </div>
    </form>
  );
}

export default ProductsForm;
