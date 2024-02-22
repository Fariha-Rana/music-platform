import { _getAccessToken } from "@/utils/getCachedAccessToken";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const playlistId = searchParams.get("playlistId");
  const accessToken = await _getAccessToken();
  try {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      requestOptions
    );
    const data = await response.json();
    return Response.json({ data });
  } catch (error) {
    // console.log(error.message);
    throw error;
  }
}
