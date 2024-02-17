import { getFeaturePlaylist } from "@/utils/getFeaturedPlaylist";
import { getAccessToken } from "@/utils/getAccessToken";

import MorePlaylist from "./MorePlaylist";
import { unstable_cache } from "next/cache";
import Link from "next/link";

const accessToken = unstable_cache(getAccessToken, ["access-token"], {revalidate : 1200});

async function FeaturePlaylist() {
  const _accessToken = await accessToken();
  const featuredPlaylist = await getFeaturePlaylist(_accessToken);

  return (
    <div className="bg-gray-800 text-white font-sans">
      <h1 className="text-center text-xl p-4">{featuredPlaylist?.message}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
        {featuredPlaylist?.playlists?.items.map((playlist) => (
          <div key={playlist.id} className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-xl font-bold py-2">{playlist.name}</h2>
            <img src={playlist.images[0]?.url} alt={playlist.name} className="w-full h-48 object-cover mb-4" />
            <p className="text-gray-300">{playlist.description}</p>
            <p className="text-gray-400 mt-2">Owner: {playlist.owner.display_name}</p>
            <p className="text-gray-400">Total Tracks: {playlist.tracks.total}</p>
            <Link href={playlist.external_urls.spotify} className="text-blue-500 mt-2 block">
              <b>Open in Spotify</b>
            </Link>
          </div>
        ))}
      </div>
      <MorePlaylist accessToken={_accessToken} paginatedUrl={featuredPlaylist?.playlists?.next} />
    </div>
  );
}

export default FeaturePlaylist;