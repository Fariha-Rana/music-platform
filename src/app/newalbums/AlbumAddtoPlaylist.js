"use client";
import useAuth from "@/context/useAuth";
import userSavedData from "@/utils/UserSavedData";

import { IoAddSharp } from "react-icons/io5";
import { TiTickOutline } from "react-icons/ti";
import { toast } from 'react-toastify';

import { useState } from "react";


function AlbumAddtoPlaylist({ musicData, imageUrl }) {
  const { userData } = useAuth();

  const [isAdded, setIsAdded] = useState(false);

  const data = {
    id: musicData?.id,
    imageurl: imageUrl,
    audioUrl: musicData?.preview_url,
    songUrl: musicData?.external_urls?.spotify,
    albumUrl: musicData?.external_urls?.spotify,
    songName: musicData?.name,
    artistNames: musicData?.artists?.map((artist) => artist?.name).join(", "),
    albumName: musicData?.name,
  };

  async function add(e) {
    e.preventDefault();

    if (!userData) {
      toast.info("please login first");
      return;
    }

    setIsAdded(true);
    
    try {
      await userSavedData.saveMusicinUserPlaylist(data, userData.$id);
    } catch (error) {}
  }
  return (
    <>
      {isAdded ? (
       <span className="border-white border ml-8  p-1"> <TiTickOutline size={"20px"} /></span>
      ) : (
        <button
          className=" border-white border ml-8  p-1"
          onClick={add}
          title="add to wishlist"
        >
          <IoAddSharp size={"20px"} />
        </button>
      )}
    </>
  );
}

export default AlbumAddtoPlaylist;
