import Link from "next/link";
import Image from "next/image";
import AddToProfile from "./AddToProfile";
function PlaylistLayout({featuredPlaylist}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
    {featuredPlaylist?.playlists?.items.map((playlist) => (
      <div key={playlist.id} className="bg-gray-700 p-4 rounded-lg">
        <h2 className="text-xl font-bold py-2">{playlist.name}</h2>
        <Image
          height={400}
          width={400}
          src={playlist.images[0]?.url}
          alt={playlist.name}
          className="w-full h-60 object-cover mb-4"
        />
        <p className="text-gray-300">{playlist.description}</p>
        <p className="text-gray-400 mt-2">Owner: {playlist.owner.display_name}</p>
        <p className="text-gray-400">Total Tracks: {playlist.tracks.total}</p>
        <Link href={playlist.external_urls.spotify} className="text-blue-500 mt-2 block">
          <b>Open in Spotify</b>
        </Link>
        <AddToProfile/>
      </div>
    ))}
  </div>
  )
}

export default PlaylistLayout