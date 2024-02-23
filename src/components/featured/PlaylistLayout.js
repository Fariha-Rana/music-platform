import Link from "next/link";
import Image from "next/image";

function PlaylistLayout({ featuredPlaylist }) {
  return (
    <div className="flex overflow-x-auto">
       <h1 style={{ textShadow: '2px 2px 4px rgba(100, 100, 230, 0.9)' }} className="w-80 mr-8 max-[801px]:hidden flex text-center text-3xl p-3 justify-center items-center font-mono">Popular Playlist</h1>
      {featuredPlaylist?.map((playlist) => (
        <div key={playlist.id} className="flex flex-col justify-center items-center flex-shrink-0 bg-gray-700 p-1 rounded-lg m-2 w-56 ">
          <h2 className="text-lg font-bold py-1 ">{playlist.name}</h2>
          <img
            src={playlist.images[0]?.url}
            alt={playlist.name}
            className="w-40 h-auto object-cover mb-1"
          />
          <p className="text-gray-400">Total Tracks: {playlist.tracks.total}</p>
          <Link href={playlist?.external_urls?.spotify} className="text-green-500 mt-2 block underline" target="_blank" rel="noopener noreferrer" >
            <b>Open in Spotify</b>
          </Link>  
          <Link href={"/playlist/" + playlist?.id} className="text-blue-500 mt-2 block underline">
            <b>preview</b>
          </Link>
        </div>
      ))}
    </div>
  );
}


export default PlaylistLayout