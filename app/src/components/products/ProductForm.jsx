import { useState } from "react";

import InputRequired from "../form/InputRequired";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProductForm.module.css";

function ProductForm({ handleSubmit, data }) {
  const [products, setProducts] = useState(data);

  function submit(e) {
    e.preventDefault();
    handleSubmit(products, data.id);
  }
  function handleChange(e) {
    setProducts({ ...products, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form_container}>
      <h1>Editar</h1>
      <InputRequired
        type="text"
        name="product"
        text="Nome"
        placeholder="Insira o nome do produto"
        handleOnChange={handleChange}
        value={products.product ? products.product : ""}
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
        name="value"
        text="Valor"
        placeholder="Insira a valor do produto"
        handleOnChange={handleChange}
        value={products.value ? products.value : ""}
      />
      <div className={styles.form_buttons}>
        <SubmitButton text="Salvar" />
      </div>
    </form>
  );
}

export default ProductForm;
