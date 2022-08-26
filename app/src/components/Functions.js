async function DataBase(obj = {}, method = "", id = "") {
  await fetch(`http://localhost:5000/Products/${id}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  })
    .then((resp) => resp.json())
    .catch((err) => console.log(err));
}

export default DataBase;
