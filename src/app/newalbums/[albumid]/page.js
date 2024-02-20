"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { HOST_Name } from "@/utils/envVariables";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AlbumAddtoPlaylist from "../AlbumAddtoPlaylist";
import { Suspense } from "react";
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

  return (
    <Suspense fallback={<Loader />}>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 h-screen bg-gray-200 ">
        {albums?.map((album, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 text-gray-300 shadow-md rounded-md flex flex-col justify-between h-max items-center"
          >
            <Image
              width={400}
              height={400}
              src={albumImage}
              alt={album?.name}
              className="w-60 h-auto object-cover rounded-md my-4"
              priority={true}
            />
            <p className="font-bold text-lg">{album?.name}</p>
            <p className="text-sm text-gray-600 my-2">
              Artists:{" "}
              {album?.artists?.map((artist) => artist?.name).join(", ")}
            </p>

            {album?.preview_url ? (
              <audio controls className="w-full my-2 h-8">
                <source src={album?.preview_url} type="audio/mp3" />
              </audio>
            ) : (
              <p className="h-8 text-sm">No preview available</p>
            )}
            <div className="flex justify-between gap-4 items-center mt-4">
              <span className="text-sm  text-green-500">
                Listen on Spotify:{" "}
                <Link
                  href={album?.external_urls?.spotify || "/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Open Link
                </Link>
              </span>
              <AlbumAddtoPlaylist musicData={album} imageUrl={albumImage} />
            </div>
          </div>
        ))}
      </div>
    </Suspense>
  );
}
export default page;
