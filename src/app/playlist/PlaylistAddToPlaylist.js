"use client";
import userSavedData from "@/utils/UserSavedData";
import { IoAddSharp } from "react-icons/io5";
import useAuth from "@/context/useAuth";

function PlaylistAddToPlaylist({ musicData }) {
  const { userData } = useAuth();

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
      alert("please login first");
      return;
    }

    try {
      alert("added");
      await userSavedData.saveMusicinUserPlaylist(data, userData.$id);
    } catch (error) {
      alert("an error occured, please try again");
    }
  }
  return (
      <button
      className=" border-white border p-1 "
      onClick={add}
      title="add to wishlist"
    >
      <IoAddSharp size={"20px"} />
    </button>
  );
}

export default PlaylistAddToPlaylist;
