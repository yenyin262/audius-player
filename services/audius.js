import qs from "query-string";
import { APP_NAME } from "../config/audius";
import { coolFetch } from "./fetch";

let AUDIUS_HOST = null;
const sample = (arr) => arr[Math.floor(Math.random() * arr.length)];
/**
 * Returns random host for audius
 *
 * @returns {string}
 */
async function getHost() {
  if (!AUDIUS_HOST) {
    const newHost = await fetch("https://api.audius.co")
      .then((r) => r.json())
      .then((j) => j.data)
      .then((d) => sample(d));
    AUDIUS_HOST = newHost;
  }
  return AUDIUS_HOST;
}

/**
 * Adds app_name query param to url
 *
 * @export
 * @param {string} url
 * @returns {string}
 */
export function getUrlWithAppNameQuery(url) {
  const parsedUrl = qs.parseUrl(url);
  const parsedUrlWithAppNameQuery = {
    ...parsedUrl,
    query: { ...parsedUrl.query, app_name: APP_NAME },
  };
  return qs.stringifyUrl(parsedUrlWithAppNameQuery);
}

/**
 * Returns url with audius host and app_name for a path
 *
 * Example:
 * getAudiusUrl("/v1/tracks/trending");
 * > https://disc-gru01.audius.hashbeam.com/v1/tracks/trending?app_name=yy-player'
 *
 * @export
 * @param {string} path
 * @returns {string}
 */
export async function getAudiusUrl(path) {
  const host = await getHost();
  return getUrlWithAppNameQuery(`${host}/${path}`);
}

/**
 * Fetch with track with app_name query param
 *
 * @param {RequestInfo} input
 * @param {RequestInit} init
 * @returns {Promise<Response>}
 */
export async function audiusFetch(input, init) {
  return coolFetch(await getAudiusUrl(input), init);
}

/**
 * Return source object to load expo Audio.Sound
 *
 * @param {string} trackId
 * @returns {{uri: string}}
 */
export async function getStreamTrackSource(trackId) {
  return {
    uri: await getAudiusUrl(`/v1/tracks/${trackId}/stream`),
  };
}

/**
 * Returns a list of trending tracks
 * https://audiusproject.github.io/api-docs/#trending-tracks
 *
 * @export
 * @returns {{data: [object]}} - List of currently trending tracks
 */
export async function trendingTracks() {
  return audiusFetch("/v1/tracks/trending", {
    method: "GET",

    headers: {
      Accept: "application/json",
    },
  });
}

/**
 * Returns a list of trending tracks
 * https://audiusproject.github.io/api-docs/#get-user
 *
 * @export
 * @param {string} id
 * @returns {object} - User profile data
 */
export async function getUserProfile(id) {
  const response = await audiusFetch(`/v1/users/${id}`, {
    method: "GET",

    headers: {
      Accept: "application/json",
    },
  });
  return response.data;
}
