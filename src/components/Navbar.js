// Navbar.js

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <b className="text-white text-xl font-bold">Your Logo</b>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex space-x-4">
              <Link href="/browse">
                <b className="text-gray-300 hover:text-white">Browse</b>
              </Link>
              <Link href="/search">
                <b className="text-gray-300 hover:text-white">Search</b>
              </Link>
              <Link href="/library">
                <b className="text-gray-300 hover:text-white">Your Library</b>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button className="text-gray-300 hover:text-white focus:outline-none">
              {/* Mobile Menu Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
