"use client";
import Link from "next/link";
import Image from "next/image";

import LogoutPage from "@/components/navbar/logout";

import { SlPlaylist } from "react-icons/sl";

import useAuth from "@/context/useAuth";

const Navbar = () => {
  const { userData } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white font-mono">
      <ul className="flex justify-between  items-center mx-4">
        <li>
          <Link href={"/"}>
            <Image
              width={20}
              height={20}
              alt="logo"
              src="/next.svg"
              className="w-20 h-auto "
              priority={true}
            />
          </Link>
        </li>

        {!userData ? (
          <div className="flex justify-end  sm:space-x-4 max-[550px]:flex-col text-nowrap">
            <li className="underline">
              <Link href={"/login"}>log in</Link>
            </li>
            <li className="underline">
              <Link href={"/signup"}>create account</Link>
            </li>
          </div>
        ) : (
          <>
            <div className="flex  sm:gap-x-4 justify-around items-center w-max ">
              <li className="underline">
                <Link href={"/myplaylist"} aria-disabled={!userData}  title="my songs">
                  <SlPlaylist size={"20px"} />
                </Link>
              </li>
              <li className="underline border border-gray-300 p-2 rounded-lg">
                <LogoutPage />
              </li>
            </div>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
