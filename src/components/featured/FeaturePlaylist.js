import { getDataFromSpotify } from "@/utils/getDataFromSpotify";
import MorePlaylist from "./MorePlaylist";

const tokenEndpoint = "https://api.spotify.com/v1/browse/featured-playlists";

async function FeaturePlaylist() {
  const featuredPlaylist = await getDataFromSpotify(tokenEndpoint);

  return (
    <div className="bg-gray-800 text-white font-sans">
    <h1 style={{ textShadow: '2px 2px 4px rgba(100, 100, 230, 0.9)' }} className="max-[800px]:flex hidden text-center text-3xl pt-8 justify-center">Featured playlists</h1> 
      <MorePlaylist paginatedUrl={featuredPlaylist?.playlists?.next} featuredPlaylist={featuredPlaylist.playlists?.items}/>
    </div>
  );
}

export default FeaturePlaylist;
