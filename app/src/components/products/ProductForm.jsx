import { useState } from "react";

import InputRequired from "../form/InputRequired";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProductForm.module.css";

function ProductForm({ handleSubmit, data }) {
  const [products, setProducts] = useState(data);

  function submit(e) {
    e.preventDefault();
    handleSubmit(products, data.cod);
  }
  function handleChange(e) {
    setProducts({ ...products, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form_container}>
      <h1>Editar</h1>
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
        name="price"
        text="Valor"
        placeholder="Insira a valor do produto"
        handleOnChange={handleChange}
        value={products.price ? products.price : ""}
      />
      <div className={styles.form_buttons}>
        <SubmitButton text="Salvar" />
      </div>
    </form>
  );
}

export default ProductForm;
