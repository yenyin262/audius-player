//import liraries
import React from "react";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

import PlaylistItem from "../PlaylistItem/PlaylistItem";

// create a component
const PlaylistView = ({ tracks }) => {
  const renderItem = ({ item }) => {
    return <PlaylistItem tracks={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.playlist_id}
        numColumns={2}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default PlaylistView;
