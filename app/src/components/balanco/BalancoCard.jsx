import { useState } from "react";

import styles from "./BalancoCard.module.css";
import BalancoDelete from "./BalancoDelete";

function BalancoCard({ solds, handleDelete }) {
  const [showList, setShowList] = useState(false);
  const [products, setProducts] = useState([]);

  function details(e) {
    const id = e.target.id;

    solds.forEach((item) => {
      if (item._id === id) setProducts(item.listBuy);
    });

    setShowList(true);
  }

  function exit() {
    setShowList(false);
  }

  function remove(lista) {
    handleDelete(lista);
  }

  return (
    <div className={styles.container}>
      {solds.map((sold) => (
        <div className={styles.cards} key={sold._id}>
          <h3 onClick={details} id={sold._id}>
            Ver produtos
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
          <BalancoDelete
            deleteId={sold._id}
            solds={solds}
            handleDelete={remove}
          />
        </div>
      ))}
      {showList && (
        <div className={styles.details}>
          <h2>Lista de Produtos</h2>
          <div className={styles.fechar} onClick={exit}>
            <p>X</p>
          </div>
          <div className={styles.details_item}>
            {products.map((product) => (
              <div key={product.uid}>
                <p>
                  Nome: <span>{product.name}</span>
                </p>
                <p>
                  Marca: <span>{product.brand}</span>
                </p>
                <p>
                  Descrição: <span>{product.description}</span>
                </p>
                <p>
                  Quantidade: <span>{product.amount}</span>
                </p>
                <p>
                  Preço: <span>{product.price}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BalancoCard;
