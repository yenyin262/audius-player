import React from "react";
import { View, FlatList, StyleSheet, StatusBar, Text } from "react-native";
import TrendingItem from "../TrendingItem/TrendingItem";
import UndergroundTrendingPlaylistList from "../UndergroundTrendingPlaylistList/UndergroundTrendingPlaylistList";

const UndergroundTrendingPlaylist = ({ tracks, onPress }) => {
  const renderItem = ({ item, index }) => {
    return (
      <UndergroundTrendingPlaylistList
        rank={index + 1}
        // onPress={() => onPress(item)}
        // tracks={item.tracks}
        artwork={item.artwork["480x480"]}
        // name={item.user.name}
        playlist={item}
        duration={item.duration}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },

  // contentContainer: {
  //   flex: 1,
  //   width: "100%",
  //   paddingHorizontal: 10,
  //   alignItems: "flex-start",
  //   justifyContent: "flex-start",
  // },
  item: {
    marginVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "left",
    textTransform: "capitalize",
    marginBottom: 5,
  },

  name: {
    fontSize: 18,
    fontWeight: "400",
    color: "#999A9E",
    textTransform: "capitalize",
  },
});

export default UndergroundTrendingPlaylist;
