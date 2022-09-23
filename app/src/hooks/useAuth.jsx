import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import api from "../utils/api";

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  //quando recarrega a página mantem logado
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);

  async function register(user) {
    try {
      const data = await api.post("/users/register", user).then((response) => {
        return response.data;
      });

      await authUser(data);
    } catch (error) {
      return error.response.data.message;
    }
  }

  async function login(user) {
    try {
      const data = await api.post("/users/login", user).then((response) => {
        return response.data;
      });
      await authUser(data);
    } catch (error) {
      return error.response.data.message;
    }
  }

  function logout() {
    setAuthenticated(false);
    setUserName("");
    localStorage.removeItem("token");
    api.defaults.headers.Authorization = undefined;
    navigate("/");
  }

  async function authUser(data) {
    api.defaults.headers.Authorization = `Bearer ${data.token}`;
    setAuthenticated(true);
    setUserName(data.name);
    localStorage.setItem("token", JSON.stringify(data.token));
    navigate("/");
  }

  return { userName, authenticated, register, login, logout };
}
