import { useState } from "react";

import SubmitButton from "../form/SubmitButton";
import Input from "../form/Input";
import styles from "./CaixaForm.module.css";

function CaixaForm({ handleSubmit }) {
  const [product, setProduct] = useState({});

  function submit(e) {
    e.preventDefault();
    handleSubmit(product.id);
    setProduct({});
  }

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={submit} className={styles.form_container}>
      <Input
        type="number"
        name="id"
        text="Código do produto"
        placeholder="Digite o código do produto"
        handleOnChange={handleChange}
        value={product.id ? product.id : ""}
        myFocus={true}
      />
      <SubmitButton text="Carregar" />
    </form>
  );
}

export default CaixaForm;
