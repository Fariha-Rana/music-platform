"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { HOST_Name } from "@/utils/envVariables";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AlbumAddtoPlaylist from "../AlbumAddtoPlaylist";
import Loader from "@/components/Loader";

function page() {
  const [albums, setAlbums] = useState(null);
  
  const searchParams = useSearchParams();
  const albumImage = searchParams.get("imageurl");
  let _albumId = usePathname();
  const albumId = _albumId.replace(/^\/newalbums\//, "");

  const fetchPlaylist = async () => {
    try {
      const response = await fetch(
        `${HOST_Name}/newalbums/${albumId}/api/?albumid=${albumId}`
      );
      const { data } = await response.json();
      setAlbums(data.items);
    } catch (error) {}
  };

  useEffect(() => {
    fetchPlaylist();
  }, []);

  if (!albums) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col font-sans mt-24 lg:mt-16 mb-8 min-h-screen">
      <div className="rounded-md shadow-md flex flex-col h-full gap-4 w-full">
      <h1 className="text-center text-2xl text-white font-serif">
        Album Preview
        </h1>
        {albums?.map((album, index) => (
          <div
            key={index}
            className="flex max-[550px]:flex-col h-full items-center p-4 justify-between border bg-gray-200 border-gray-400 mx-8 min-[651px]:gap-x-4 gap-4"
          >
            <div className="w-32 min-[551px]:h-20 ">
              <Image
                width={400}
                height={400}
                src={albumImage}
                alt={album?.name}
                property='true'
                className="w-auto max-[550px]:w-full max-[550px]:h-auto  h-20 object-cover rounded-md"
              />
            </div>

            <div className="flex flex-col min-[551px]:w-80 min-[551px]:h-20 items-center justify-center text-center">
              <h3 className="text-sm text-wrap">{album?.name}</h3>
              <p className="text-gray-500 text-sm text-wrap">
                <b>Artists:</b>{" "}
                {album?.artists?.map((artist) => artist?.name).join(", ")}
              </p>
            </div>

            {album?.preview_url ? (
              <audio controls className="w-full my-2 h-8">
                <source src={album?.preview_url} type="audio/mp3" />
              </audio>
            ) : (
              <p className="h-8 text-sm">No preview available</p>
            )}
            <div className="flex justify-between gap-4 items-center ">
              <span className="text-sm text-nowrap text-green-500">
                <Link
                  href={album?.external_urls?.spotify || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Listen on Spotify:{" "}
                </Link>
              </span>
              <AlbumAddtoPlaylist musicData={album} imageUrl={albumImage} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default page;
