function DataBase(obj, method, id) {
  if (method === "GET") {
    const prod = fetch(`http://localhost:5000/Products/${id}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        return data;
      })
      .catch((err) => console.log(err));
    return prod;
  } else {
    fetch(`http://localhost:5000/Products/${id}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((resp) => resp.json())
      .catch((err) => console.log(err));
  }
}

export default DataBase;
