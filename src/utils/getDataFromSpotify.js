import { _getAccessToken } from "./getCachedAccessToken";

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
