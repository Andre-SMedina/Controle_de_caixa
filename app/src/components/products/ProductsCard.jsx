import styles from "./ProductsCard.module.css";

function ProductsCard({
  id,
  product,
  amount,
  brand,
  price,
  description,
  handleEdit,
  handleRemove,
}) {
  function edit() {
    handleEdit(id);
  }

  function remove() {
    handleRemove(id);
  }
  return (
    <div className={styles.productCardContainer}>
      <h2>{product}</h2>
      <div className={styles.card_data}>
        <p>
          <span>Marca: </span>
          {brand}
        </p>
        <p>
          <span>Descrição: </span>
          {description}
        </p>
        <p>
          <span>Quantidade: </span>
          {amount}
        </p>
        <p>
          <span>Preço: </span>
          {price}
        </p>
        <p>
          <span>Código: </span>
          {id}
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
