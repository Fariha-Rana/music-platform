"use client";
import { useState } from "react";
import PlaylistLayout from "./PlaylistLayout";
import { HOST_Name } from "@/utils/envVariables";

function MorePlaylist({ paginatedUrl }) {
  const [featuredPlaylists, setFeaturedPlaylists] = useState([]);
  const [_paginatedUrl, setpaginatedUrl] = useState(paginatedUrl);
  const [loading, setLoading] = useState(false);

  const fetchPlaylists = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch(`${HOST_Name}/api/?url=${_paginatedUrl}`);
      const { data } = await response.json();
      setFeaturedPlaylists((prevState) => [
        ...prevState,
        ...data?.playlists?.items,
      ]);
      setpaginatedUrl(data?.playlists?.next);
    } catch (error) {
      console.error("Error fetching playlists:", error.message);
    } finally {
      setLoading(false);
    }
  };

  console.log(featuredPlaylists);
  return (
    <div className="mt-3">
      <PlaylistLayout featuredPlaylist={featuredPlaylists} />
      <div className="flex text-center justify-center items-center p-2 text-lg underline">
        <button
          type="submit"
          onClick={fetchPlaylists}
          disabled={!_paginatedUrl}
        >
          {loading ? "loading" : _paginatedUrl ? "see more" : "no more found"}
        </button>
      </div>
    </div>
  );
}

export default MorePlaylist;
