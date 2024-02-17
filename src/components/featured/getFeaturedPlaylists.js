export async function getMoreFeaturePlaylist(fetchUrl, accessToken) {
    try {
      const requestOptions = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      };
  
      const response = await fetch(fetchUrl, requestOptions);
      const featuredPlaylistResponse = await response.json();
      return featuredPlaylistResponse;
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }