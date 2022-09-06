import styles from "./ProductsCard.module.css";

function ProductsCard({ product, handleEdit, handleRemove }) {
  function edit() {
    handleEdit(product.id);
  }

  function remove() {
    handleRemove(product.id);
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
          {product.price}
        </p>
        <p>
          <span>Código: </span>
          {product.id}
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
