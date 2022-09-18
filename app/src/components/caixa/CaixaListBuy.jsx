import { BsFillTrashFill } from "react-icons/bs";

import styles from "./CaixaListBuy.module.css";

function CaixaListBuy({ product, handleOnRemove }) {
  function remove() {
    handleOnRemove(product.uid);
  }
  return (
    <div className={styles.card_container}>
      {product.name && (
        <div className={styles.card_list}>
          <p className={styles.product_id}>cod. {product.cod}</p>
          <p className={styles.product_name}>{product.name}</p>
          <p className={styles.product_description}>{product.description}</p>
          <p className={styles.product_brand}>{product.brand}</p>
          <p className={styles.product_amount}>{product.amount}</p>
          <p className={styles.product_price}>{product.price}</p>
          <span onClick={remove}>
            <BsFillTrashFill />
          </span>
        </div>
      )}
    </div>
  );
}

export default CaixaListBuy;
