export function kFormatter(num) {
  return Math.abs(num) > 999
    ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}

// QmVHPJb5XHhBu9yqVvzDZGjZQAQFmMsjk6to6Q3vmpTtDj
// https://creatornode3.audius.co/ipfs/QmVHPJb5XHhBu9yqVvzDZGjZQAQFmMsjk6to6Q3vmpTtDj/480x480.jpg

export function getAlbumImageURL(multihash) {
  return `https://creatornode3.audius.co/ipfs/${multihash}/480x480.jpg`;
}

export function getArtistImage(profilePicture) {
  return `https://creatornode3.audius.co/ipfs/${profilePicture}/480x480.jpg`;
}
