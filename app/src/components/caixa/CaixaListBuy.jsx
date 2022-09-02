// import { DataBase, Messages } from "../Functions";
import styles from "./CaixaListBuy.module.css";

function CaixaListBuy({ product, handleOnRemove }) {
  function remove() {
    handleOnRemove(product.id, product.uid);
  }
  return (
    <div className={styles.card_container}>
      {product.name && (
        <div className={styles.card_list}>
          <p className={styles.product_name}>{product.name}</p>
          <p className={styles.product_description}>{product.description}</p>
          <p className={styles.product_brand}>{product.brand}</p>
          <p className={styles.product_price}>{product.price}</p>
          <span onClick={remove} className={styles.product_remove}>
            X
          </span>
        </div>
      )}
    </div>
  );
}

export default CaixaListBuy;
