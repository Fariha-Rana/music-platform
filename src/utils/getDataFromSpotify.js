"use server";
import { unstable_cache } from "next/cache";
import { getAccessToken } from "./getAccessToken";

const _getAccessToken = unstable_cache(getAccessToken, ["access-token"], {
  revalidate: 1200,
});

export async function getDataFromSpotify(tokenEndpoint) {
  try {
    const accessToken = await _getAccessToken();
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(tokenEndpoint, requestOptions);
    const featuredPlaylistResponse = await response.json();
    return featuredPlaylistResponse;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
}
