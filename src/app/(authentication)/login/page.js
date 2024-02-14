"use client";
import appwriteAuth from "@/utils/appwriteAuthentication";
import useAuthentication from "@/context/useAuthentication";

import { useRouter} from "next/navigation";
import { useState } from "react";


// Import statements

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState(""); // Corrected variable name
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUserData } = useAuthentication();

  const router = useRouter();

  const _loginAsGuest = async (e) => {
    e.preventDefault();
    try {
      const session = await appwriteAuth._createAnonymousSession(name);
      if (session) setUserData(session);
      router.push(`/`);
    } catch (error) {
      setError(error.message);
    }
  };

  const _login = async (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  const _signUp = async (e) => {
    e.preventDefault();
    // Add your signup logic here
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className={`mx-auto w-full max-w-lg bg-gray-200/50 rounded-xl p-10 max-[550px]:m-12`}>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Log in as guest
        </h2>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={_loginAsGuest} className="mt-8">
          {/* Guest Signup Button */}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-blue-800 hover:bg-primary/80"
          >
            Log in as Guest
          </button>
        </form>
        
        {/* Login Form */}
        <form onSubmit={_login} className="mt-8">
          {/* Your existing login form fields */}
          {/* ... */}
          {/* Login Button */}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-blue-800 hover:bg-primary/80"
          >
            Log in
          </button>
        </form>

        {/* Signup Form */}
        <form onSubmit={_signUp} className="mt-8">
          {/* Your signup form fields */}
          {/* ... */}
          {/* Signup Button */}
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-blue-800 hover:bg-primary/80"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
