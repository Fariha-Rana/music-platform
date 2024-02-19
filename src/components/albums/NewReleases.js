import { getDataFromSpotify } from "@/utils/getDataFromSpotify";
import MoreReleasedAlbums from "./MoreReleasedAlbums";


const tokenEndpoint = "https://api.spotify.com/v1/browse/new-releases";

async function NewReleases() {
  const newReleases = await getDataFromSpotify(tokenEndpoint);

  return (
    <div className="bg-gray-800 text-white font-sans">
      <h1 style={{ textShadow: '2px 2px 4px rgba(100, 100, 230, 0.9)' }} className="max-[800px]:flex hidden text-center text-3xl pt-8 justify-center items-center font-mono">New Albums</h1>
      <MoreReleasedAlbums paginatedUrl={newReleases?.albums?.next} moreAlbums={newReleases.albums?.items}/>
    </div>
  );
}

export default NewReleases;
