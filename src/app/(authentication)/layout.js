"use client";
import useAuth from "@/context/useAuth";

function Layout({ children }) {
  const { userData } = useAuth();
  if (!userData) {
    alert("please login first.");
    return <div></div>;
  } else {
    return <>{children}</>;
  }
}

export default Layout;
