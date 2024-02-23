"use client";
import appwriteAuth from "@/utils/appwriteAuthentication";

import { useRouter } from "next/navigation";
import { useState } from "react";
import useAuth from "@/context/useAuth";

import Link from "next/link";

const Login = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [passowrd, setPassowrd] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();
  const { setUserData } = useAuth();

  const _signup = async (e) => {
    e.preventDefault();
    try {
      const data = await appwriteAuth.createAccount(email, passowrd, name);
      setUserData(data);
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
        {error && <p className="text-red-600  text-center">{error}</p>}
        <h2 className="text-center text-lg font-bold leading-tight text-black">
          Create your new account
        </h2>
        <form
          onSubmit={_signup}
          className="mt-8 flex flex-col justify-center items-center space-y-2"
        >
          <input
            type="name"
            placeholder="enter your nickname"
            className="border rounded-sm border-gray-600 px-2 py-1"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="enter your email"
            className="border rounded-sm border-gray-600 px-2 py-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="enter your passowrd"
            className="border rounded-sm border-gray-600 px-2 py-1"
            value={passowrd}
            onChange={(e) => setPassowrd(e.target.value)}
            required
          />
          <button
            type="submit"
            className="inline-flex items-center text-sm justify-center rounded-md bg-primary px-4 py-1 mt-8 font-semibold leading-7 bg-green-700 text-neutral-100 hover:bg-gray-600 border border-gray-600 "
          >
            Log in
          </button>
        </form>
        <p className="mt-8">
          {"already have an account?"}{" "}
          <Link href={"/login"} className="underline ">
            log in now{" "}
          </Link>
        </p>
        <p className="mt-1">
          {" "}
          or{" "}
          <Link href={"/guestsession"} className="underline ">
            create a guest session{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
