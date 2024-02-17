"use client";
import { useState } from "react";
import PlaylistLayout from "./PlaylistLayout";
import { getMoreFeaturePlaylist } from "./getFeaturedPlaylists";

function MorePlaylist({ accessToken, paginatedUrl }) {
  const [featuredPlaylists, setFeaturedPlaylists] = useState(null);
  const [_paginatedUrl, setpaginatedUrl] = useState(paginatedUrl);
  const [loading, setLoading] = useState(false);

  const fetchPlaylists = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await getMoreFeaturePlaylist(_paginatedUrl, accessToken);
      setFeaturedPlaylists(response);
      setpaginatedUrl(response.playlists.next);
    } catch (error) {
      console.error("Error fetching playlists:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-3">
      <PlaylistLayout featuredPlaylist={featuredPlaylists} />
      <div className="flex text-center justify-center items-center p-2 text-lg underline">
        <button
          type="submit"
          onClick={fetchPlaylists}
          disabled={!featuredPlaylists?.playlists?.next}
        >
          {loading
            ? "loading"
            : featuredPlaylists?.playlists?.next
            ? "see more"
            : "no more found"}
        </button>
      </div>
    </div>
  );
}

export default MorePlaylist;
