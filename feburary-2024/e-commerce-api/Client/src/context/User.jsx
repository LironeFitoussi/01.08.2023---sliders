import { useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});
export default function UserProvider({ children }) {
  const [user, setUser] = useState();
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken"));

  const fetchUser = async () => {
    if (userToken !== null) {
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
    } else {
      console.log("No Session Avtived!");
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userToken]);

  useEffect(() => {
    user && console.log(user);
  }, [user]);

  // Listen to changes in localStorage for userToken
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    setUserToken(token);
  }, []);

  const shared = { user, setUser, fetchUser, userToken, setUserToken };

  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
