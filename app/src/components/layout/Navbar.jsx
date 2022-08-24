import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <h1>Controle de Caixa</h1>
      <ul>
        <Link to="/products">
          <li>Produtos</li>
        </Link>
        <Link to="/">
          <li>Caixa</li>
        </Link>
        <Link to="/">
          <li>Balanço</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
