import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      setUser(userToken);
    }
  }, []);

  const shared = {
    user,
    setUser: (userToken) => {
      setUser(userToken);
      localStorage.setItem("userToken", userToken);
    },
  };

  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
