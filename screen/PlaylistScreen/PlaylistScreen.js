//import liraries
import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import PlaylistView from "../../components/PlaylistView/PlaylistView";
import MusicByMood from "../../components/PlaylistView/PlaylistView";
import { Mood_Music } from "../../services/audiusMock";

// create a component
const PlaylistScreen = () => {
  const [playlistByMood, setPlaylistByMood] = useState([]);

  useEffect(() => {
    async function getPlaylistByMood() {
      const moodPlaylistMusic = Mood_Music();
      setPlaylistByMood(moodPlaylistMusic.data);
    }
    getPlaylistByMood();
  }, []);

  return (
    <View style={styles.container}>
      {playlistByMood.length > 0 && <PlaylistView tracks={playlistByMood} />}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default PlaylistScreen;
