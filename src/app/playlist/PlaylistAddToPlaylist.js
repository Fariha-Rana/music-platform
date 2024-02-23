"use client";
import userSavedData from "@/utils/UserSavedData";

import useAuth from "@/context/useAuth";
import { useState } from "react";

import { TiTickOutline } from "react-icons/ti";
import { IoAddSharp } from "react-icons/io5";
import { toast } from "react-toastify";

function PlaylistAddToPlaylist({ musicData }) {
  const [isAdded, setIsAdded] = useState(false);
  const { userData } = useAuth();
  const userid = userData.userId || userData.$id
  const data = {
    id: musicData?.id,
    imageurl: musicData?.album?.images[0].url,
    audioUrl: musicData?.preview_url,
    songUrl: musicData?.external_urls?.spotify,
    albumUrl: musicData?.album?.external_urls?.spotify,
    songName: musicData?.album?.name,
    artistNames: musicData?.artists?.map((artist) => artist?.name).join(", "),
    albumName: musicData?.album?.name,
  };

  async function add(e) {
    e.preventDefault();

    if (!userData) {
      toast.info("please login first");
      return;
    }

    setIsAdded(true);

    try {
      await userSavedData.saveMusicinUserPlaylist(data, userid);
    } catch (error) {
      toast.alert("an error occured, please try again");
    }
  }
  return (
    <>
      {isAdded ? (
        <span className="border-white border ml-8  p-1">
          {" "}
          <TiTickOutline size={"20px"} />
        </span>
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

export default PlaylistAddToPlaylist;
