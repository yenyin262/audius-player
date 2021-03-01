/**
 * Fetch with returning data instead of response object
 *
 * @param {RequestInfo} input
 * @param {RequestInit} [init]
 * @returns {Promise<Response>}
 */
export async function coolFetch(input, init) {
  const response = await fetch(input, init);
  if (response.status === 204) return null;

  const contentType = response.headers.get("content-type");
  if (contentType && contentType.indexOf("application/json") !== -1) {
    const data = await response.json();
    if (response.ok) return data;

    return await Promise.reject(data);
  } else {
    if (response.ok) return null;

    return await Promise.reject(response.statusText);
  }
}
