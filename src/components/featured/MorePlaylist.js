"use client";
import { useState } from "react";
import PlaylistLayout from "./PlaylistLayout";
import { HOST_Name } from "@/utils/envVariables";

function MorePlaylist({ paginatedUrl, featuredPlaylist }) {
  const [featuredPlaylists, setFeaturedPlaylists] = useState(featuredPlaylist);
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
      // console.error("Error fetching playlists:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 ">
      <div className="flex text-center justify-end items-center p-2 text-lg underline">
        <button
          type="submit"
          onClick={fetchPlaylists}
          disabled={!_paginatedUrl}
        >
          {loading ? "loading" : _paginatedUrl ? "Load more" : ""}
        </button>
      </div>
      <PlaylistLayout featuredPlaylist={featuredPlaylists} />
    </div>
  );
}

export default MorePlaylist;
