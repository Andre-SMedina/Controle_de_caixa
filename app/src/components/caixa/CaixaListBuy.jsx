// import { DataBase, Messages } from "../Functions";
import styles from "./CaixaListBuy.module.css";

function CaixaListBuy({ product }) {
  return (
    <div className={styles.card_container}>
      {product.name && (
        <div className={styles.card_list}>
          <p>
            <span>Produto: </span>
            {product.name}
          </p>
        </div>
      )}
    </div>
  );
}

export default CaixaListBuy;
