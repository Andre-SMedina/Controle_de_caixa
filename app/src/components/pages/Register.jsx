import { useState, useContext } from "react";

import InputRequired from "../form/InputRequired";
import styles from "../form/form.module.css";
import SubmitButton from "../form/SubmitButton";
import { Context } from "../../context/UserContext";
import { Messages } from "../Functions";
import Message from "../layout/Message";

function Register() {
  const [user, setuser] = useState([]);
  const { register } = useContext(Context);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await register(user);

    if (response) {
      Messages(setMessage, response, setType, "error");
    }
  }

  function handleChange(e) {
    setuser({ ...user, [e.target.name]: e.target.value });
  }
  return (
    <form onSubmit={handleSubmit} className={styles.form_control}>
      {message && <Message type={type} text={message} />}
      <div>
        <h1>Registro de usuário</h1>
        <InputRequired
          type="text"
          name="name"
          text="Nome"
          placeholder="Digite seu nome"
          handleOnChange={handleChange}
          value={user.name ? user.name : ""}
          myFocus={true}
        />
        <InputRequired
          type="email"
          name="email"
          text="E-mail"
          placeholder="Digite seu email"
          handleOnChange={handleChange}
          value={user.email ? user.email : ""}
          myFocus={false}
        />
        <InputRequired
          type="password"
          name="password"
          text="Senha"
          placeholder="Digite sua senha"
          handleOnChange={handleChange}
          value={user.password ? user.password : ""}
          myFocus={false}
        />
        <InputRequired
          type="password"
          name="confirmpassword"
          text="Confirmação de senha"
          placeholder="Digite sua senha novamente"
          handleOnChange={handleChange}
          value={user.confirmpassword ? user.confirmpassword : ""}
          myFocus={false}
        />
      </div>
      <SubmitButton text="Registrar" />
    </form>
  );
}

export default Register;
