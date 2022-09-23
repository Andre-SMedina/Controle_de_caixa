import { createContext } from "react";

import useAuth from "../hooks/useAuth";

const Context = createContext();

function UserProvider({ children }) {
  const { userName, authenticated, register, login, logout } = useAuth();

  return (
    <Context.Provider
      value={{ userName, authenticated, register, login, logout }}
    >
      {children}
    </Context.Provider>
  );
}

export { Context, UserProvider };
