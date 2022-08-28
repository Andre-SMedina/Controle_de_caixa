import styles from "./ProductsCard.module.css";

function ProductsCard({ id, product, amount, brand, value, description }) {
  return (
    <div className={styles.productCardContainer}>
      <h2>{product}</h2>
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
        {value}
      </p>
      <p>
        <span>Código: </span>
        {id}
      </p>
    </div>
  );
}

export default ProductsCard;
