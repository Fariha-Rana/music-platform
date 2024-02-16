"use server";

import { getAccessToken } from "./getAccessToken";

const tokenEndpoint =
  "https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb";

export async function getArtistDetail() {
  try {
    const accessToken = await getAccessToken();
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(tokenEndpoint, requestOptions);
    const ArtistDetails = await response.json();

    console.log("artist detail");
    return ArtistDetails;
  } catch (error) {
    // console.error("Error fetching artist data:", error);
    // throw error;
  }
}
