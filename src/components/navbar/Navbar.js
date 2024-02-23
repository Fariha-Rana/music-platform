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
      <ul className="flex justify-between  items-center lg:justify-around mx-4">
        <li>
          <Link href={"/"}>
            <Image
              width={420}
              height={420}
              alt="logo"
              src="/logo.webp"
              className="w-20 h-auto "
              priority={true}
            />
          </Link>
        </li>

        {!userData ? (
          <div className="flex  justify-end text-center max-[550px]:flex-col text-nowrap gap-2 text-white">
            <li className="underline bg-green-700 rounded-md p-2">
              <Link href={"/login"}>log in</Link>
            </li>
            <li className="underline bg-green-700 rounded-md p-2">
              <Link href={"/signup"}>create account</Link>
            </li>
          </div>
        ) : (
          <>
            <div className="flex  gap-x-4 justify-around items-center w-max ">
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
