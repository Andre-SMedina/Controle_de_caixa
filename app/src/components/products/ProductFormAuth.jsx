import { useState } from "react";

import InputRequired from "../form/InputRequired";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProductForm.module.css";

function ProductFormAuth({ handleSubmit }) {
  const [pass, setPass] = useState({});

  function submit(e) {
    e.preventDefault();
    handleSubmit(pass);
  }
  function handleChange(e) {
    setPass({ ...pass, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form_container}>
      <InputRequired
        type="password"
        name="password"
        text="Senha"
        placeholder="Digite a senha"
        handleOnChange={handleChange}
        value={pass.password ? pass.password : ""}
      />
      <div className={styles.form_buttons}>
        <SubmitButton text="Entrar" />
      </div>
    </form>
  );
}

export default ProductFormAuth;
