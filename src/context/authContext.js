"use client";
import { createContext, useState, useEffect } from "react";
import appwriteAuth from "@/utils/appwriteAuthentication";
export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function checkLogInStatus() {
      try {
        const cachedUserData = localStorage.getItem("userData");
        if (cachedUserData) {
          setUserData(JSON.parse(cachedUserData));
        } else {
          const fetchedUserData = await appwriteAuth.getCurrentUser();

          if (fetchedUserData) {
            localStorage.setItem("userData", JSON.stringify(fetchedUserData));
            setUserData(fetchedUserData);
          }
        }
      } catch (err) {
        // console.error("Error in provider:", err);
      }
    }
    checkLogInStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}
