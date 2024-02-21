"use client";
import { useState } from "react";
import AlbumLayout from "./AlbumLayout";
import { HOST_Name } from "@/utils/envVariables";

function MoreReleasedAlbums({ paginatedUrl, moreAlbums }) {
  const [_moreAlbums, setmoreAlbums] = useState(moreAlbums);
  const [_paginatedUrl, setpaginatedUrl] = useState(paginatedUrl);
  const [loading, setLoading] = useState(false);

  const fetchalbums = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${HOST_Name}/api/?url=${_paginatedUrl}`);
      const { data } = await response.json();
      console.log(data?.albums);
      setmoreAlbums((prevState) => [
        ...prevState,
        ...data?.albums?.items,
      ]);
      setpaginatedUrl(data?.albums?.next);
    } catch (error) {
      // console.error("Error fetching albums:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-6 pb-4">
      <div className="flex text-center justify-end items-center p-2 text-lg underline h-8">
        <button
          type="submit"
          onClick={fetchalbums}
          disabled={!_paginatedUrl}
        >
          {loading ? "loading" : _paginatedUrl ? "Load more" : " "}
        </button>
      </div>
      <AlbumLayout moreAlbums={_moreAlbums} />
    </div>
  );
}

export default MoreReleasedAlbums;
