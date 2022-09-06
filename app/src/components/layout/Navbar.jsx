import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";
import logo from "../../img/logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <h1>
        <Link to="/">Controle de Caixa</Link>
      </h1>
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
      </ul>
    </nav>
  );
}

export default Navbar;
