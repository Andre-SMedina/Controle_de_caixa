function DataBase(obj, method, params = "") {
  if (method === "GET") {
    const prod = fetch(`http://54.209.185.105:5000/Products${params}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.name) {
          console.log(data);
          return [data];
        }
        return data;
      })
      .catch((err) => console.log(err));
    return prod;
  } else {
    fetch(`http://54.209.185.105:5000/Products/${params}`, {
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

function Messages(setMessage, textMessage, setType, type) {
  setMessage(textMessage);
  setType(type);
  setTimeout(() => {
    setMessage("");
  }, 2000);
}

function Sort(list) {
  list.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    } else {
      return true;
    }
  });
}

export { DataBase, Messages, Sort };
