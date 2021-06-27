//import liraries
import React, { Component, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import LetThemDJ from "../../components/LetThemDJ/LetThemDJ";
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
      {playlistByDJ.length > 0 && <LetThemDJ tracks={playlistByDJ} />}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default LetThemDJScreen;
