"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");

  const router = useRouter();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (search.length > 0) {
      router.push(`/${search}`);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-white rounded-lg flex-grow min-[800px]:mx-8 mx-2"
    >
      <input
        type="search"
        className="px-4 text-gray-800 rounded-full focus:outline-none w-full"
        placeholder="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className={`flex items-center bg-yellow-500 justify-center w-16 min-[900px]:h-11 h-auto text-white rounded-r-lg cursor-pointer`}
        disabled={search.length === 0}
      >
        <svg
          className="w-5 h-5 "
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </form>
  );
}

export default Search;
