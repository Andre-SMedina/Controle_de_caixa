import styles from "./BalancoForm.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import { DataBase, Messages } from "../Functions";

function BalancoForm({ handleSubmit }) {
  async function submit(e) {
    e.preventDefault();
    const date = e.target[0].value.split("-").reverse().join("/");
    const cod = e.target[1].value;
    if (date) {
      const find = await DataBase({}, "GET", `?date_like=${date}`, "caixa");
      handleSubmit(find);
    }
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.inputs}>
        <Input type="date" name="date" text="Por data" myFocus={true} />
        <Input
          type="number"
          name="id"
          text="Por código do produto"
          myFocus={true}
        />
      </div>
      <SubmitButton text="Pesquisar" />
    </form>
  );
}

export default BalancoForm;
