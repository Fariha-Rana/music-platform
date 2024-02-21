"use server";

const { SPOTIFY_CLEINT_ID, SPOTIFY_SECRET_TOKEN } = require("./envVariables");

const tokenEndpoint = "https://accounts.spotify.com/api/token";
const clientId = SPOTIFY_CLEINT_ID;
const clientSecret = SPOTIFY_SECRET_TOKEN;

const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
};

export async function getAccessToken() {
  try {
    const response = await fetch(tokenEndpoint, requestOptions);
    const { access_token } = await response.json();
    // console.log(" Token:");
    return access_token;
  } catch (error) {}
}
