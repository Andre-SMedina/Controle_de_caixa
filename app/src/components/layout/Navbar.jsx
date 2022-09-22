import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { BsList } from "react-icons/bs";

import { Context } from "../../context/UserContext";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";
import Confirm from "./Confirm";
import api from "../../utils/api";
import InputRequired from "../form/InputRequired";
import SubmitButton from "../form/SubmitButton";
import { Messages } from "../Functions";
import Message from "./Message";

function Navbar() {
  const { authenticated, logout } = useContext(Context);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);
  const [password, setPassword] = useState([]);
  const [message, setMessage] = useState("");
  const [type, setType] = useState("");

  function exit(response) {
    setShowConfirm(true);
    if (response === "sim") {
      logout();
      setShowConfirm(false);
    } else if (response === "nao") {
      setShowConfirm(false);
    }
  }

  function handleChange(e) {
    setPassword({ ...password, [e.target.name]: e.target.value });
  }

  function changePassForm() {
    setShowChangePass(!showChangePass);
  }

  async function changePassword(e) {
    e.preventDefault();
    if (password.newPass !== password.confirmNewPass) {
      return Messages(setMessage, "Confirme a nova senha!", setType, "error");
    }

    const response = await api.post("/users/changePass", password);

    if (response.data) {
      setPassword([]);
      setShowChangePass(false);
      return Messages(setMessage, "Senha alterada!", setType, "success");
    } else {
      return Messages(setMessage, "Senha atual está errada!", setType, "error");
    }
  }

  return (
    <nav className={styles.navbar}>
      {message && <Message text={message} type={type} />}
      {showChangePass && (
        <form onSubmit={changePassword} className={styles.change_password}>
          <span onClick={changePassForm}>X</span>
          <InputRequired
            type="password"
            name="oldPass"
            text="Senha atual"
            placeholder="Digite a senha atual"
            handleOnChange={handleChange}
            value={password.oldPass ? password.oldPass : ""}
            myFocus={true}
          />
          <InputRequired
            type="password"
            name="newPass"
            text="Nova senha"
            placeholder="Digite a nova senha"
            handleOnChange={handleChange}
            value={password.newPass ? password.newPass : ""}
          />
          <InputRequired
            type="password"
            name="confirmNewPass"
            text="Confirme a senha nova"
            placeholder="Digite a senha nova"
            handleOnChange={handleChange}
            value={password.confirmNewPass ? password.confirmNewPass : ""}
          />
          <SubmitButton text="Confirmar" />
        </form>
      )}
      {showConfirm && (
        <Confirm text={"Deseja realmente sair?"} handleClick={exit} />
      )}
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <h1>
        <Link to="/">Controle de Caixa</Link>
      </h1>
      {authenticated ? (
        <ul>
          <Link to="/products">
            <li>Produtos</li>
          </Link>
          <Link to="/caixa">
            <li>Caixa</li>
          </Link>
          <Link to="/balanco">
            <li>Balanço</li>
          </Link>
          <ul className={styles.menu}>
            <li>
              <BsList />
              <ul className={styles.submenu}>
                <li onClick={changePassForm}>Alterar senha</li>
                <li onClick={exit}>Sair</li>
              </ul>
            </li>
          </ul>
        </ul>
      ) : (
        <ul>
          <Link to="/login">
            <li>Login</li>
          </Link>
          <Link to="/register">
            <li>Cadastrar</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
