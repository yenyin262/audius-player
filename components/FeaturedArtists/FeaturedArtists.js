//import liraries
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Artist_Music } from "../../services/audiusMock";
import ArtistView from "../ArtistView/ArtistView";

// create a component
const FeaturedArtists = () => {
  const [playlistByArtists, setPlaylistByArtists] = useState([]);

  useEffect(() => {
    async function getPlaylistByArtists() {
      const artistPlaylistMusic = Artist_Music();
      setPlaylistByArtists(artistPlaylistMusic.data);
    }
    getPlaylistByArtists();
  }, []);

  return (
    <View>
      {playlistByArtists.length > 0 && (
        <ArtistView tracks={playlistByArtists} />
      )}
    </View>
  );
};

//make this component available to the app
export default FeaturedArtists;
