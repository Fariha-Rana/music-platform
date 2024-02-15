import Link from "next/link";
import Search from "./SearchBar";
import appwriteAuth from "@/utils/appwriteAuthentication";
import LogoutPage from "@/components/logout";

const Navbar = () => {
  const userData = appwriteAuth.userData;
  return (
    <nav className="bg-gray-800 p-4 text-white font-mono">
      <ul className="flex justify-between ">
        <li>Home logo</li>
        <li>
          <Search />
        </li>
        {userData ? (
          <div className="flex justify-end lg:space-x-4 max-[550px]:flex-col text-nowrap">
            <li className="underline">
              <Link href={"/login"}>Log in</Link>
            </li>
            <li className="underline">
              <Link href={"/signup"}>create account</Link>
            </li>
          </div>
        ) : (
          <div className="flex justify-end lg:space-x-4 max-[550px]:flex-col text-nowrap">
            <li className="underline">
              <Link href={"/login"}>My Profile</Link>
            </li>
            <li className="underline">
              <LogoutPage />
            </li>
          </div>
        )}
        {/* <li>My Playlist</li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
