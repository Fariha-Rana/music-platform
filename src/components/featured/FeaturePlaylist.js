import { getFeaturePlaylist } from "@/utils/getFeaturedPlaylist";
import MorePlaylist from "./MorePlaylist";

async function FeaturePlaylist() {
  const featuredPlaylist = await getFeaturePlaylist();

  return (
    <div className="bg-gray-800 text-white font-sans">
      <MorePlaylist paginatedUrl={featuredPlaylist?.playlists?.next} featuredPlaylist={featuredPlaylist.playlists?.items}/>
    </div>
  );
}

export default FeaturePlaylist;
