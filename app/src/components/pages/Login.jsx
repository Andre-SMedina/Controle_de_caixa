import { useState, useContext } from "react";

import InputRequired from "../form/InputRequired";
import styles from "../form/form.module.css";
import SubmitButton from "../form/SubmitButton";
import { Context } from "../../context/UserContext";
import { Messages } from "../Functions";
import Message from "../layout/Message";

function Login() {
  const [user, setuser] = useState([]);
  const { login } = useContext(Context);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await login(user);
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
        <h1>Login</h1>
        <InputRequired
          type="email"
          name="email"
          text="E-mail"
          placeholder="Digite seu email"
          handleOnChange={handleChange}
          value={user.email ? user.email : ""}
          myFocus={true}
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
      </div>
      <SubmitButton text="Entrar" />
    </form>
  );
}

export default Login;
