import { useState } from "react";

import styles from "./BalancoCard.module.css";

function BalancoCard({ solds }) {
  const [showList, setShowList] = useState(false);
  const [products, setProducts] = useState([]);

  function details(e) {
    const id = parseInt(e.target.children[0].innerText);

    solds.forEach((item) => {
      if (item.id === id) setProducts(item.listBuy);
    });

    setShowList(true);

    // console.log(keyId, keyId2);
  }
  return (
    <div className={styles.container}>
      {solds.map((sold) => (
        <div className={styles.cards} key={sold.id}>
          <h3 onClick={details}>
            <span className={styles.id}>{sold.id}</span>Ver produtos
          </h3>
          <p className={styles.payment}>
            <span>Pagamento: </span>
            {sold.payment}
          </p>
          <p className={styles.items}>
            <span>Items: </span>
            {sold.items}
          </p>
          <p>
            <span>Total: </span>R$ {sold.total}
          </p>
          <p>
            <span>Hora: </span>
            {sold.date.split("-")[1]}
          </p>
        </div>
      ))}
      {showList &&
        products.map((product) => (
          <div key={product.uid}>
            <p>
              Nome: <span>{product.name}</span>
            </p>
          </div>
        ))}
    </div>
  );
}

export default BalancoCard;
