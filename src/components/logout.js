"use client";
import appwriteAuth from "@/utils/appwriteAuthentication";

const LogoutPage = () => {
  async function _logOut() {
    try {
      await appwriteAuth.logOut();
      alert("Logout successful");
    } catch (error) {
      console.error("Logout failed", error?.message);
    }
  }

  return (
   <section  className="mt-8 align-middle justify-center">
     <button className="text-teal-700"
      onClick={_logOut}
    >
      Log Out
    </button>
   </section>
  );
};

export default LogoutPage;
