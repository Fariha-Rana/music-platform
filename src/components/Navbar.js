import Link from "next/link";
import Search from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white font-mono">
      <ul className="flex justify-between ">
        <li>Home logo</li>
        <li><Search/></li>
        <div className="flex justify-end lg:space-x-4 max-[550px]:flex-col text-nowrap">
        <li className="underline"><Link href={"/login"}>Log in</Link></li>
        <li  className="underline"><Link href={"/signup"}>create account</Link></li>
        {/* <li>My Playlist</li> */}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
