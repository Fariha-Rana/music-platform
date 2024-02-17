import { getFeaturePlaylist } from "@/utils/getFeaturedPlaylist";
import { getAccessToken } from "@/utils/getAccessToken";

import MorePlaylist from "./MorePlaylist";
import { unstable_cache } from "next/cache";

import PlaylistLayout from "./PlaylistLayout";

const accessToken = unstable_cache(getAccessToken, ["access-token"], {
  revalidate: 1200,
});

async function FeaturePlaylist() {
  const _accessToken = await accessToken();
  const featuredPlaylist = await getFeaturePlaylist(_accessToken);

  return (
    <div className="bg-gray-800 text-white font-sans">
      <h1 className="text-center text-xl p-4">{featuredPlaylist?.message}</h1>
      <PlaylistLayout featuredPlaylist={featuredPlaylist} />
      <MorePlaylist
        accessToken={_accessToken}
        paginatedUrl={featuredPlaylist?.playlists?.next}
      />
    </div>
  );
}

export default FeaturePlaylist;
