import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { Context } from "../../context/UserContext";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";
import Button from "../layout/Button";
import Confirm from "./Confirm";

function Navbar() {
  const { authenticated, logout } = useContext(Context);
  const [showConfirm, setShowConfirm] = useState(false);

  function exit(response) {
    setShowConfirm(true);
    if (response === "sim") {
      logout();
      setShowConfirm(false);
    } else if (response === "nao") {
      setShowConfirm(false);
    }
  }

  return (
    <nav className={styles.navbar}>
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
          <Button text="Sair" handleOnClick={exit} />
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
