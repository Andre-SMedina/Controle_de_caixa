import { BsFillTrashFill } from "react-icons/bs";

import styles from "./BalancoDelete.module.css";
import api from "../../utils/api";

function BalancoDelete({ deleteId, solds, handleDelete }) {
  async function remove() {
    await api.delete(`/caixa/delete/${deleteId}`);
    const newSolds = solds.filter((e) => {
      return e._id !== deleteId;
    });

    //envia a nova lista para função remove do componente Balanco
    handleDelete(newSolds);
  }
  return (
    <>
      <BsFillTrashFill onClick={remove} className={styles.trash} />
    </>
  );
}

export default BalancoDelete;
