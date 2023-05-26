"use client";

import { createContext, useContext, useState } from "react";
import Axios from "./Axios";

const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  async function getMe() {
    try {
      let res = await Axios.get("/users/me");
      setUser(res.data)
      return res.data
    } catch (error) {
      console.log(error.response);
    }
  }
  return (
    <UserContext.Provider value={{ user, setUser ,getMe}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
