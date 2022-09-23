import styles from "./Home.module.css";
import { Context } from "../../context/UserContext";
import { useContext } from "react";

function Home() {
  const { userName } = useContext(Context);

  return <h1 className={styles.container}>Bem Vindo {userName}!</h1>;
}

export default Home;
