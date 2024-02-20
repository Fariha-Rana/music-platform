"use client";
import { usePathname } from "next/navigation";
import { HOST_Name } from "@/utils/envVariables";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function page() {
  const [tracks, setTracks] = useState(null);
  let _playlistId = usePathname();
  const playlistId = _playlistId.replace(/^\//, "");

  const fetchPlaylist = async () => {
    const response = await fetch(
      `${HOST_Name}/${playlistId}/api/?playlistId=${playlistId}`
    );
    const { data } = await response.json();
    setTracks(data.items);
  };
  useEffect(() => {
    fetchPlaylist();
  }, []);
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 h-full bg-gray-200">
      {tracks?.map((track, index) => (
        <div key={index} className="p-4 bg-gray-800 text-gray-300 shadow-md rounded-md flex flex-col justify-center items-center">
          <Image
          width={400}
          height={400}
            src={track.track.album.images[0].url}
            alt={track.track.album.name}
            className="w-60 h-auto object-cover rounded-md my-4"
            priority={true}
          />
          <p className="font-bold text-lg">{track.track.name}</p>
          <p className="text-sm text-gray-600 my-2">
            Artists: {track.track.artists.map(artist => artist.name).join(', ')}
          </p>
          <p className="text-sm text-gray-600 my-2 ">Album: {track.track.album.name}</p>
          <div className="flex space-x-2 my-2 flex-col text-center">
            <span className="text-sm  text-green-500">
              Listen on Spotify: {' '}
              <Link href={track.track.external_urls.spotify || '/'} target="_blank" rel="noopener noreferrer" className="underline">
                Open Link
              </Link>
            </span>
            <span className="text-sm text-green-500">
              See the full Album: {' '}
              <Link href={track.track.album.external_urls.spotify || '/'} target="_blank" rel="noopener noreferrer" className="underline">
                Open Link
              </Link>
            </span>
          </div>
            {track.track.preview_url ? (
          <audio controls className="w-full my-2 h-8">
              <source src={track.track.preview_url} type="audio/mp3" />
          </audio>
            ) : (
              <p className="h-8 text-sm">No preview available</p>
            )}
        
        </div>
      ))}
    </div>
  );
};
export default page;
