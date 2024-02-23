"use client";
import Loader from "@/components/Loader";
import useAuth from "@/context/useAuth";
import userSavedData from "@/utils/UserSavedData";
import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";

function Page() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userData } = useAuth();
  const userid = userData?.$userId || userData?.$id;

  async function get() {
    try {
      const _data = await userSavedData.getSavedMusicList(userid);
      setData(_data);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    get();
  }, [userid]);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col font-sans  mt-8 mb-8 min-h-full">
      <div className="rounded-md shadow-md flex flex-col h-full gap-4 w-full">
        <h1 className="text-center text-2xl text-white font-serif">
          My preview Playlist
        </h1>
        {!data && userid && (
          <p className="h-screen text-center mt-8 text-green-400">
            No Song saved yet....
          </p>
        )}
        {!userid && (
          <p className="h-screen text-center mt-8 text-green-400">
            Log in to see your saved list....
          </p>
        )}

        {data?.imageurl?.map((image, index) => (
          <div
            key={data.id[index]}
            className="flex max-[550px]:flex-col h-full items-center p-4 justify-between border bg-neutral-200 border-gray-400 mx-8 min-[651px]:gap-x-4 gap-4"
          >
            <div className="w-32 min-[551px]:h-20 ">
              <img
                src={image}
                alt={data.songName[index]}
                className="w-auto max-[550px]:w-full max-[550px]:h-auto  h-20 object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col min-[551px]:w-80 min-[551px]:h-20 items-center justify-center text-center">
              <h3 className="text-sm text-wrap">
                <b>Title:</b>{" "}
                {data.songName[index].length > 25
                  ? data.songName[index].substring(0, 25) + "..."
                  : data.songName[index]}
              </h3>
              <p className="text-gray-500 text-sm text-wrap">
                <b>Artists:</b>{" "}
                {data.artistNames[index].length > 25
                  ? data.artistNames[index].substring(0, 25) + "..."
                  : data.artistNames[index]}
              </p>
            </div>

            <audio controls className="w-full h-8">
              <source src={data?.audioUrl[index]} type="audio/mp3" />
            </audio>
            <div className="text-nowrap">
              <Link
                href={data?.albumUrl[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Album Link
              </Link>
              <br />
              <Link
                href={data?.songUrl[index]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700"
              >
                Song Link
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
