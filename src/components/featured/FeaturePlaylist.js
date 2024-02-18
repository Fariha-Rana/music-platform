import { getFeaturePlaylist } from "@/utils/getFeaturedPlaylist";

import MorePlaylist from "./MorePlaylist";
import PlaylistLayout from "./PlaylistLayout";

async function FeaturePlaylist() {
  const featuredPlaylist = await getFeaturePlaylist();

  return (
    <div className="bg-gray-800 text-white font-sans">
      <h1 className="text-center text-xl p-4">{featuredPlaylist?.message}</h1>
      <PlaylistLayout featuredPlaylist={featuredPlaylist.playlists?.items} />
      <MorePlaylist paginatedUrl={featuredPlaylist?.playlists?.next} />
    </div>
  );
}

export default FeaturePlaylist;
