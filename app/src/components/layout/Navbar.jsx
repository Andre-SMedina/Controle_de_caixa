import { Link } from "react-router-dom";
import { useContext } from "react";

import { Context } from "../../context/UserContext";
import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";
import Button from "../layout/Button";

function Navbar() {
  const { authenticated, logout } = useContext(Context);

  return (
    <nav className={styles.navbar}>
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
          <Button text="Sair" handleOnClick={logout} />
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
