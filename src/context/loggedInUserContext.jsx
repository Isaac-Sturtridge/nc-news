import { createContext, useState } from "react";

export const loggedInUserContext = createContext();

export const LoggedInUserProvider = ({ children }) => {
  const [user, setUser] = useState({ username: "jessjelly" });

  return (
    <loggedInUserContext.Provider value={{ user, setUser }}>
      {children}
    </loggedInUserContext.Provider>
  );
};
