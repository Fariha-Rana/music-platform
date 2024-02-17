"use client";
import appwriteAuth from "@/utils/appwriteAuthentication";
import useAuth from "@/context/useAuth";

const LogoutPage = () => {
  const { setUserData } = useAuth();
  async function _logOut() {
    try {
      await appwriteAuth.logOut();
      setUserData(null);
      alert("Logout successful");
    } catch (error) {
    }
  }

  return (
    <button className="text-teal-700" onClick={_logOut}>
      Log Out
    </button>
  );
};

export default LogoutPage;
