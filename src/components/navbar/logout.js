"use client";
import appwriteAuth from "@/utils/appwriteAuthentication";
import useAuth from "@/context/useAuth";
import { toast } from 'react-toastify';

const LogoutPage = () => {
  const { setUserData } = useAuth();

  async function _logOut() {
    try {
      toast.success("Logout successful"); 
      await appwriteAuth.logOut();
      setUserData(null);
      localStorage.removeItem("userData");
    } catch (error) {
      toast.error("Could not Log out, try again please"); 
    }
  }

  return (
    <button className="text-teal-700" onClick={_logOut}>
      Log Out
    </button>
  );
};

export default LogoutPage;
