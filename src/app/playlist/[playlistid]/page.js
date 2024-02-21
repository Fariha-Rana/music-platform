"use client";
import { usePathname } from "next/navigation";
import { HOST_Name } from "@/utils/envVariables";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import PlaylistAddToPlaylist from "../PlaylistAddToPlaylist";
import Loader from "@/components/Loader";

function page() {
  const [tracks, setTracks] = useState(null);
  let _playlistId = usePathname();
  const playlistId = _playlistId.replace(/^\/playlist\//, "");

  const fetchPlaylist = async () => {
    const response = await fetch(
      `${HOST_Name}/playlist/${playlistId}/api/?playlistId=${playlistId}`
    );
    const { data } = await response.json();
    setTracks(data.items);
  };

  useEffect(() => {
    fetchPlaylist();
  }, []);

  if (!tracks) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col font-sans mt-24 lg:mt-16 mb-8 min-h-full">
      <div className="rounded-md shadow-md flex flex-col h-full gap-4 w-full">
        <h1 className="text-center text-2xl text-white font-serif">
          Playlist Preview
        </h1>
        {tracks?.map((track, index) => (
          <div
            key={index}
            className="flex max-[550px]:flex-col  h-full items-center p-4 justify-around border bg-gray-200 border-gray-400 mx-8 min-[651px]:gap-x-2 gap-4"
          >
            <div className="w-44 min-[551px]:h-30 ">
              <Image
                width={400}
                height={400}
                src={track?.track?.album?.images[0].url}
                alt={track?.track?.album?.name || "song image"}
                priority={true}
                className="w-auto max-[550px]:w-full max-[550px]:h-auto  h-20 object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col w-[20rem] p-1 min-[551px]:h-30 items-center justify-center text-center">
              <h3 className="text-sm text-wrap">{track.track.name}</h3>
              <p className="text-gray-500 text-sm text-wrap">
                <b>Artists:</b>{" "}
                {track?.track?.artists
                  ?.map((artist) => artist?.name)
                  .join(", ")}
              </p>
            </div>

            <audio controls className="w-full my-2 h-8">
              <source src={track?.track?.preview_url} type="audio/mp3" />
            </audio>

            <div className="flex space-x-2 my-2 flex-col text-center">
              <span className="text-sm  text-green-500 text-nowrap">
                <Link
                  href={track?.track?.external_urls?.spotify || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Listen on Spotify
                </Link>
              </span>
              <span className="text-sm text-green-500 text-nowrap">
                <Link
                  href={track?.track?.album?.external_urls?.spotify || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  See the full Album
                </Link>
              </span>
            </div>

            <PlaylistAddToPlaylist musicData={track.track} />
          </div>
        ))}
      </div>
    </div>
  );
}
export default page;
