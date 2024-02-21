"use client";
import Loader from "@/components/Loader";
import useAuth from "@/context/useAuth";
import userSavedData from "@/utils/UserSavedData";
import Image from "next/image";
import Link from "next/link";
import { cache } from "react";
import { useEffect, useState } from "react";

const getUserPlaylist = cache(async (id) => {
  return await userSavedData.getSavedMusicList(id);
});

function page() {
  const [data, setData] = useState(null);
  const { userData } = useAuth();
  const userid = userData?.$id;

  async function get() {
    const _data = await getUserPlaylist(userid);
    setData(_data);
    console.log(_data);
  }

  useEffect(() => {
    get();
  }, [userid]);

  if (!data) {
    return <Loader />;
  }
  return (
    <div className="flex flex-col font-sans mt-24 lg:mt-16 mb-8 min-h-full">
      <div className="rounded-md shadow-md flex flex-col h-full gap-4 w-full">
        <h1 className="text-center text-2xl text-white font-serif">
          My preview Playlist
        </h1>
        {data?.songName?.map((song, index) => (
          <div
            key={data.id[index]}
            className="flex max-[550px]:flex-col h-full items-center p-4 justify-between border bg-gray-400 border-gray-400 mx-8 min-[651px]:gap-x-4 gap-4"
          >
            <div className="w-32 min-[551px]:h-20 ">
              <Image
                height={400}
                width={400}
                src={data.imageurl[index]}
                alt={song}
                className="w-auto max-[550px]:w-full max-[550px]:h-auto  h-20 object-cover rounded-md"
              />
            </div>
            <div className="flex flex-col min-[551px]:w-80 min-[551px]:h-20 items-center justify-center text-center">
              <h3 className="text-sm text-wrap">
                <b>Title:</b> {song}
              </h3>
              <p className="text-gray-500 text-sm text-wrap">
                <b>Artists:</b> {data.artistNames[index]}
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

export default page;
