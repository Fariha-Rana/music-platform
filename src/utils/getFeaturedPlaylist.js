"use server";

const tokenEndpoint = "https://api.spotify.com/v1/browse/featured-playlists";

export async function getFeaturePlaylist(accessToken, offset = 0, limit = 20) {
  try {
    const queryParams = `?offset=${offset}&limit=${limit}&locale=*`;
    const endpointWithParams = `${tokenEndpoint}?${queryParams}`;

    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(endpointWithParams, requestOptions);
    const featuredPlaylistResponse = await response.json();
    return featuredPlaylistResponse;
  } catch (error) {
    console.log(error.message)
    throw error; 
  }
}

