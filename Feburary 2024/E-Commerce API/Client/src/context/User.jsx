import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userToken = localStorage.getItem("userToken");
      if (userToken) {
        try {
          const response = await fetch(
            "http://localhost:3000/api/v1/users/fetchUser",
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${userToken}`,
              },
            }
          );
          if (response.ok) {
            const userData = await response.json();
            setUser(userData);
          } else {
            console.error("Failed to fetch user:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      }
    };

    fetchUser();
  }, [user]);

  const shared = {
    user,
    setUser: (userToken) => {
      setUser(userToken);
      localStorage.setItem("userToken", userToken);
    },
  };

  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
