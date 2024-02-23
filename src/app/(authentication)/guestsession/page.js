"use client";
import appwriteAuth from "@/utils/appwriteAuthentication";
import { useRouter } from "next/navigation";
import { useState } from "react";
import useAuth from "@/context/useAuth";
const Login = () => {
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const {setUserData} = useAuth()
  const router = useRouter();

  const _loginAsGuest = async (e) => {
    e.preventDefault();
    try {
       const data = await appwriteAuth._createAnonymousSession(name);
       setUserData(data)
       console.log(data)
      router.replace(`/`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen font-sans">
      <div
        className={`mx-auto p-20 max-w-full bg-gray-200/50 rounded-xl max-[550px]:m-12`}
      >
        {error && <p className="text-red-600 mt-12 text-center">{error}</p>}
        <h2 className="text-center text-lg font-bold leading-tight text-black">
          Log in as guest
        </h2>
        <form
          onSubmit={_loginAsGuest}
          className="mt-8 flex flex-col justify-center items-center"
        >
          <input
            type="text"
            placeholder="enter your nickname"
            className="border rounded-sm border-gray-600 px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-1 mt-4 font-semibold leading-7 bg-gray-800 text-neutral-100 hover:bg-gray-600 border border-gray-600 "
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
