import { useState } from "react";

import SubmitButton from "../form/SubmitButton";
import Select from "../form/Select";
import Button from "../layout/Button";
import Input from "../form/Input";
import styles from "./CaixaForm.module.css";

function CaixaForm({ handleSubmit, handleClick }) {
  const [product, setProduct] = useState({});
  const [payment, setPayment] = useState([]);
  const optionsOp = [
    { name: "Débito", id: 1 },
    { name: "Crédito", id: 2 },
    { name: "Dinheiro", id: 3 },
    { name: "Pix", id: 4 },
  ];

  function submit(e) {
    e.preventDefault();
    handleSubmit(product.cod, product.amount);
    setProduct({});
  }

  function handleChange(e) {
    setProduct({ ...product, [e.target.name]: e.target.value });
  }

  function handlePayment(e) {
    setPayment({
      ...payment,
      idPay: e.target.value,
      pay: e.target.options[e.target.selectedIndex].text,
    });
  }

  function finished() {
    handleClick(payment.pay);
    setPayment([]);
  }
  return (
    <form onSubmit={submit} className={styles.form_container}>
      <div className={styles.inputs}>
        <div className={styles.cod}>
          <Input
            type="number"
            name="cod"
            text="Código do produto"
            placeholder="Digite o código do produto"
            handleOnChange={handleChange}
            value={product.cod ? product.cod : ""}
            myFocus={true}
            idFocus={"focus"}
          />
        </div>
        <Input
          type="number"
          name="amount"
          text="Quantidade"
          placeholder="1"
          handleOnChange={handleChange}
          value={product.amount ? product.amount : ""}
          myFocus={false}
        />
        <Select
          text="Tipo de pagamento"
          name="payment"
          options={optionsOp}
          handleOnChange={handlePayment}
          value={payment.idPay ? payment.idPay : ""}
        />
      </div>
      <div className={styles.buttons}>
        <SubmitButton text="Adicionar" />
        <Button text="Finalizar" handleOnClick={finished} />
      </div>
    </form>
  );
}

export default CaixaForm;
