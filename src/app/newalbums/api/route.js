import { _getAccessToken } from "@/utils/getCachedAccessToken";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const albumId = searchParams.get("albumid");
  const accessToken = await _getAccessToken();

  try {
    const requestOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const response = await fetch(
      `https://api.spotify.com/v1/albums/${albumId}/tracks`,
      requestOptions
    );
    const data = await response.json();
    return Response.json({ data });
  } catch (error) {
    throw error;
  }
}
