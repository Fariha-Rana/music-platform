"use client";
import useAuth from "@/context/useAuth";
import { toast } from "react-toastify";

function Layout({ children }) {
  const { userData } = useAuth();
  if (userData) {
    return <div></div>;
  } else {
    return <>{children}</>;
  }
}

export default Layout;
