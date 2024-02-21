"use client";
import useAuth from "@/context/useAuth";
import userSavedData from "@/utils/UserSavedData";

import { IoAddSharp } from "react-icons/io5";

function AlbumAddtoPlaylist({ musicData, imageUrl }) {
  const { userData } = useAuth();

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
      alert("please login first");
      return;
    }

    try {
      alert("added");
      await userSavedData.saveMusicinUserPlaylist(data, userData.$id);
    } catch (error) {}
  }
  return (
    <button className=" border-white border ml-8  p-1" onClick={add} title="add to wishlist">
      <IoAddSharp size={"20px"}/>
    </button>
  );
}

export default AlbumAddtoPlaylist;
