import Link from "next/link";
import Image from "next/image";

function AlbumLayout({ moreAlbums }) {
  return (
     <div className="flex  overflow-x-auto">
       <h1 style={{ textShadow: '2px 2px 4px rgba(100, 100, 230, 0.9)' }} className="w-80 mx-8  max-[801px]:hidden flex text-center text-3xl p-3 justify-center items-center font-mono">New Albums</h1>
      {moreAlbums?.map((albums) => (
        <div key={albums.id} className="flex flex-col justify-center items-center flex-shrink-0 bg-gray-700 p-1 rounded-lg m-2 w-56 ">
          <h2 className="text-lg font-bold py-1 ">{albums?.name}</h2>
          <Image
            height={1400}
            width={1400}
            src={albums.images[0]?.url}
            alt={albums.name}
            className="w-40 h-auto object-cover mb-1"
            property='true'
          />
          <p className="text-gray-400">Total Tracks: {albums?.total_tracks}</p>
          <Link href={albums?.external_urls?.spotify} className="text-green-500 mt-2 block underline" target="_blank" rel="noopener noreferrer" >
            <b>Open in Spotify</b>
          </Link>  
          <Link href={"/newalbums/" + albums?.id + "?imageurl=" + albums.images[0]?.url} className="text-blue-500 mt-2 block underline" >
            <b>preview</b>
          </Link>
        </div>
      ))}
    </div>
  );
}


export default AlbumLayout