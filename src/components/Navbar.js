import Link from "next/link";
import Search from "./SearchBar";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex justify-between">
        <li>Home logo</li>
        <li><Search/></li>
        <div className="flex justify-end space-x-4">
        <li>Log in</li>
        {/* <li>My Playlist</li> */}
        <li>create account</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
