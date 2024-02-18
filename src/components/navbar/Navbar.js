"use client";
import Link from "next/link";
import Image from "next/image";

import LogoutPage from "@/components/navbar/logout";

import { SlPlaylist } from "react-icons/sl";
import { IoMusicalNotesOutline } from "react-icons/io5";

import useAuth from "@/context/useAuth";

const Navbar = () => {
  const { userData } = useAuth();

  return (
    <nav className="bg-gray-800 p-4 text-white font-mono">
      <ul className="flex justify-around  items-center mx-4">
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
                <Link href={"/myplaylist"} title="my playlist">
                  <span title="my playlist">
  
                    <SlPlaylist size={"20px"} />
                  </span>
                </Link>
              </li>
              <li className="underline">
                <Link href={"/mysongs"}>
                  <span title="my songs">
  
                    <IoMusicalNotesOutline size={"25px"} />
                  </span>
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
