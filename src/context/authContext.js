"use client";
import { createContext, useState, useEffect } from "react";
import appwriteAuth from "@/utils/appwriteAuthentication";
export const AuthContext = createContext(null);

import { cache } from "react";

export const getUserData = cache(appwriteAuth.getCurrentUser);

export default function AuthProvider({ children }) {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const data = getUserData();
    if (data) {
      setUserData(data);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ userData, setUserData }}>
      {children}
    </AuthContext.Provider>
  );
}
