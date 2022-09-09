import { BsFillTrashFill } from "react-icons/bs";

import styles from "./BalancoDelete.module.css";
import { DataBase } from "../Functions";

function BalancoDelete({ deleteId, solds, deletou }) {
  async function remove() {
    await DataBase({}, "DELETE", deleteId, "caixa");
    const newSolds = solds.filter((e) => {
      return e.id !== deleteId;
    });

    deletou(newSolds);
  }
  return (
    <>
      <BsFillTrashFill onClick={remove} className={styles.trash} />
    </>
  );
}

export default BalancoDelete;
