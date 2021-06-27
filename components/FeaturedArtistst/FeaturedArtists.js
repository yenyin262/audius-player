//import liraries
import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import PlaylistView from "../../components/PlaylistView/PlaylistView";
import MusicByMood from "../../components/PlaylistView/PlaylistView";
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
    <View style={styles.container}>
      {playlistByArtists.length > 0 && (
        <ArtistView tracks={playlistByArtists} />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // justifyContent: "flex-start",
    // alignItems: "center",
    // backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default FeaturedArtists;
