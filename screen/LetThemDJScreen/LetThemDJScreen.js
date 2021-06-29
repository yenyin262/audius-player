//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LetThemDJView from "../../components/LetThemDJView/LetThemDJView";
import { LetThemDJMock } from "../../services/audiusMock";

// create a component
const LetThemDJScreen = () => {
  const [playlistByDJ, setPlaylistByDJ] = useState([]);

  useEffect(() => {
    async function getPlaylistByDJ() {
      const musicByDJ = LetThemDJMock();
      console.log(musicByDJ.data);
      setPlaylistByDJ(musicByDJ.data);
    }
    getPlaylistByDJ();
  }, []);
  return (
    <View style={styles.container}>
      {playlistByDJ.length > 0 && <LetThemDJView tracks={playlistByDJ} />}
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
export default LetThemDJScreen;
