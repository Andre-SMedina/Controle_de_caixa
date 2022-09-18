import styles from "./ProductsCard.module.css";

function ProductsCard({ product, handleEdit, handleRemove }) {
  function edit() {
    handleEdit(product.cod);
  }

  function remove() {
    handleRemove(product._id);
  }
  return (
    <div className={styles.productCardContainer}>
      <h2>{product.name}</h2>
      <div className={styles.card_data}>
        <p>
          <span>Marca: </span>
          {product.brand}
        </p>
        <p>
          <span>Descrição: </span>
          {product.description}
        </p>
        <p>
          <span>Preço: </span>
          {parseFloat(product.price).toFixed(2)}
        </p>
        <p>
          <span>Código: </span>
          {product.cod}
        </p>
      </div>
      <div className={styles.card_butons}>
        <span onClick={edit}>Editar</span>
        <span onClick={remove}>Apagar</span>
      </div>
    </div>
  );
}

export default ProductsCard;
