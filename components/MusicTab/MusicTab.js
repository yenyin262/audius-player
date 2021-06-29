//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import TracksList from "../TracksList/TracksList";

// create a component
const MusicTab = ({ tracks, navigateToPlayer }) => {
  console.log(navigateToPlayer, "where is navigate?");
  return (
    <View style={styles.container}>
      <TracksList tracks={tracks} onPress={navigateToPlayer} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default MusicTab;
