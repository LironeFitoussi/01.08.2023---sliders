import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});
export default function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  const userToken = localStorage.getItem("userToken");

  const fetchUser = async () => {
    if (userToken) {
      console.log("User Updated, fetching...");
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
          const fetchedUser = await response.json();
          setUser(fetchedUser.data.user);
          console.log("User fetched successfully!");
        } else {
          console.error("Failed to fetch user:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  useEffect(() => {
    user && console.log(user);
  }, [user, setUser]);

  const shared = { user, setUser, fetchUser };

  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
