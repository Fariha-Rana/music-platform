import { getArtistDetail } from "@/utils/getArtistDetails";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const SpotifyArtistInfo = async () => {
  const artistInfo = await getArtistDetail();
  const {
    external_urls,
    followers,
    genres,
    images,
    name,
    popularity,
    type,
    uri,
  } = artistInfo;

  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        height={500}
        width={500}
        src={images[0].url}
        alt={`${name} Cover`}
        className="rounded-full w-32 h-32 mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-sm text-gray-500 mb-2">Popularity: {popularity}</p>
      <p className="text-sm text-gray-500 mb-2">Followers: {followers.total}</p>
      <p className="text-sm text-gray-500 mb-4">Genres: {genres.join(", ")}</p>
      <Link
        href={external_urls.spotify}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Open on Spotify
      </Link>
    </div>
  );
};

export default SpotifyArtistInfo;
