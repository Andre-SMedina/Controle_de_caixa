import styles from "./BalancoForm.module.css";
import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";
import api from "../../utils/api";

function BalancoForm({ handleSubmit }) {
  async function submit(e) {
    e.preventDefault();
    const date = e.target[0].value.split("-").reverse().join("-");

    if (date) {
      const find = (await api.get(`/balanco/${date}`)).data;
      handleSubmit(find);
    }
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.inputs}>
        <Input type="date" name="date" text="Por data" myFocus={true} />
        <Input
          type="number"
          name="cod"
          text="Por código do produto"
          myFocus={true}
        />
      </div>
      <SubmitButton text="Pesquisar" />
    </form>
  );
}

export default BalancoForm;
