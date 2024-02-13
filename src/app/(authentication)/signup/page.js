"use client";
import appwriteAuth from "@/utils/appwriteAuthentication";
import useAuthentication from "@/context/useAuthentication";

import { useRouter} from "next/navigation";
import { useState } from "react";


const Login = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const { setUserData } = useAuthentication();
  const router = useRouter();

  const _login = async (e) => {
    e.preventDefault();
    try {
      const session = await appwriteAuth._createAnonymousSession(name);
      if (session) setUserData(session);
      router.push(`/`);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className={`mx-auto w-full max-w-lg bg-gray-200/50 rounded-xl p-10 max-[550px]:m-12`}>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Log in as guest
        </h2>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={_login} className="mt-8">
          <div className="space-y-5">
            <label
              htmlFor="namr"
              className="text-base font-medium text-gray-900"
            >
              your nickname
            </label>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
                id="name"
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-primary px-3.5 py-2.5 font-semibold leading-7 text-blue-800 hover:bg-primary/80"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
