"use client";
import { useState } from "react";
import Link from "next/link";

async function getMoreFeaturePlaylist(fetchUrl, accessToken) {
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(fetchUrl, requestOptions);
    const featuredPlaylistResponse = await response.json();
    return featuredPlaylistResponse;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}

function MorePlaylist({ accessToken, paginatedUrl }) {
  const [featuredPlaylists, setFeaturedPlaylists] = useState(null);
  const [_paginatedUrl, setpaginatedUrl] = useState(paginatedUrl);

  const fetchPlaylists = async (e) => {
    e.preventDefault();
    try {
      const response = await getMoreFeaturePlaylist(_paginatedUrl, accessToken);
      console.log(response)
      setFeaturedPlaylists(response);
      setpaginatedUrl(response.playlists.next);
      alert(response.playlists.next);
    } catch (error) {
      console.error("Error fetching playlists:", error.message);
    }
  };

  return (
    <div className="">
      <div className="flex text-center justify-center items-center p-2 text-lg underline">
        <button
          type="submit"
          disabled={featuredPlaylists?.playlists?.next}
          onClick={fetchPlaylists}
        >
          see more
        </button>
      </div>
      {featuredPlaylists?.playlists?.items.map((playlist) => (
        <div key={playlist.id} className="bg-gray-700 p-4 rounded-lg">
          <h2 className="text-xl font-bold py-2">{playlist.name}</h2>
          <img
            src={playlist.images[0]?.url}
            alt={playlist.name}
            className="w-full h-48 object-cover mb-4"
          />
          <p className="text-gray-300">{playlist.description}</p>
          <p className="text-gray-400 mt-2">
            Owner: {playlist.owner.display_name}
          </p>
          <p className="text-gray-400">Total Tracks: {playlist.tracks.total}</p>
          <Link
            href={playlist.external_urls.spotify}
            className="text-blue-500 mt-2 block"
          >
            <b>Open in Spotify</b>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default MorePlaylist;
