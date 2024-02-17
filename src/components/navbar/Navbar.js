"use client";
import Link from "next/link";
import Image from "next/image";
import Search from "./SearchBar";
import LogoutPage from "@/components/navbar/logout";
import { SlPlaylist } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";

import useAuth from "@/context/useAuth";

const Navbar = () => {
  const { userData } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white font-mono">
      <ul className="flex justify-between  items-center mx-4">
        <li >
          <Link
           href={"/"}>
            <Image
              width={20}
              height={20}
              alt="logo"
              src="/next.svg"
              className="w-20 h-auto"
            />
          </Link>
        </li>
        <li>
          <Search />
        </li>
        {!userData ? (
          <div className="flex justify-end lg:space-x-4 max-[550px]:flex-col text-nowrap">
            <li className="underline">
              <Link href={"/login"}>log in</Link>
            </li>
            <li className="underline">
              <Link href={"/signup"}>create account</Link>
            </li>
          </div>
        ) : (
          <>
            <div className="flex justify-evenly items-center w-max gap-6">
              <li className="underline">
                {" "}
                <Link href={"/myplaylist"}>
                  <SlPlaylist size={"20px"} />
                </Link>
              </li>
              <li className="underline">
                <Link href={"/profile"}>
                  <CgProfile size={"25px"} />
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
