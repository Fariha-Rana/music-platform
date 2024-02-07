"use client";
import { getAccessToken } from "@/utils/getAccessToken";
import { getArtistDetail } from "@/utils/getArtistDetails";
import { useRouter } from "next/navigation";

function Search() {

  const router = useRouter();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    // await getAccessToken()
    await getArtistDetail()
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-white rounded-lg flex-grow min-[800px]:mx-8 mx-2"
    >
      <input
        type="search"
        className="p-4 text-gray-800 rounded-full focus:outline-none w-full"
        placeholder="search"
        // value={search}
        // onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
