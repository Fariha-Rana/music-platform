import { getDataFromSpotify } from "@/utils/getDataFromSpotify";
import Image from "next/image";
import Link from "next/link";

const tokenEndpoint =
  "https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA";

async function Songs() {
  const { tracks } = await getDataFromSpotify(tokenEndpoint);

  return (
    <div className="bg-gray-800 text-white font-sans pt-12">
      <h1
        style={{ textShadow: "2px 2px 4px rgba(100, 100, 230, 0.9)" }}
        className="bg-gray-800 max-[800px]:flex hidden text-center text-3xl pt-8 justify-center items-center font-mono "
      >
        Recommended songs
      </h1>
      <div className="flex overflow-x-auto">
        <h1
          style={{ textShadow: "2px 2px 4px rgba(100, 100, 230, 0.9)" }}
          className="w-80 max-[801px]:hidden flex text-center text-3xl p-3 justify-center items-center font-mono"
        >
          {" "}
          Recommended songs
        </h1>
        {tracks.map((track) => (
          <div
            key={track.id}
            className={`flex flex-col items-center flex-shrink-0 bg-gray-700 m-2 pt-4 rounded-lg  w-60 text-center `}
          >

           <Image
              height={800}
              width={800}
              src={track.album.images[0].url}
              alt={track.name}
              className="w-40 h-auto object-cover mb-1"
            />
            <h2 className="text-sm font-semibold p-1 ">{track.name}</h2>
            <p className="text-sm text-gray-500 p-1">
              by<span className="text-gray-400"> {track.artists[0].name}</span>
            </p>
            {track.preview_url && (
          <audio controls className="w-full px-6 mt-4 h-8">
            <source src={track.preview_url} type="audio/mp3" />
          </audio>
        )}
        <Link href={track?.external_urls?.spotify} className="text-green-500 mt-2 block underline" target="_blank" rel="noopener noreferrer" >
            <b>Open in Spotify</b>
          </Link>  
          </div>
        ))}
      </div>
    </div>
  );
}

export default Songs;
