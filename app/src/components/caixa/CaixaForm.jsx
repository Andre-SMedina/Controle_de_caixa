import { useState } from "react";

import SubmitButton from "../form/SubmitButton";
import Button from "../layout/Button";
import Input from "../form/Input";
import styles from "./CaixaForm.module.css";

function CaixaForm({ handleSubmit, handleClick }) {
  const [product, setProduct] = useState({});

  function submit(e) {
    e.preventDefault();
    handleSubmit(product.id, product.fraction, product.amount);
    setProduct({});
  }

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function finished() {
    handleClick();
  }
  return (
    <form onSubmit={submit} className={styles.form_container}>
      <div className={styles.inputs}>
        <Input
          type="number"
          name="id"
          text="Código do produto"
          placeholder="Digite o código do produto"
          handleOnChange={handleChange}
          value={product.id ? product.id : ""}
          myFocus={true}
        />
        <div className={styles.amount}>
          <Input
            type="number"
            name="amount"
            text="Quantidade"
            placeholder="1"
            handleOnChange={handleChange}
            value={product.amount ? product.amount : ""}
            myFocus={false}
          />
        </div>
        <Input
          type="number"
          name="fraction"
          text="Fração do produto"
          placeholder="1,0"
          handleOnChange={handleChange}
          value={product.fraction ? product.fraction : ""}
          myFocus={false}
        />
      </div>
      <div className={styles.buttons}>
        <SubmitButton text="Carregar" />
        <Button text="Finalizar" handleOnClick={finished} />
      </div>
    </form>
  );
}

export default CaixaForm;
