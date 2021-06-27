import React from "react";
import { View, FlatList, StyleSheet, StatusBar, Text } from "react-native";
import TopAlbumsList from "../TopAlbumsList/TopAlbumsList";

const TopAlbums = ({ albums, onPress }) => {
  const renderItem = ({ item }) => {
    return <TopAlbumsList albums={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        // columnWrapperStyle={{ justifyContent: "space-around" }}
        numColumns={2}
        data={albums}
        renderItem={renderItem}
        keyExtractor={(item) => item.playlist_id}
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
  // item: {
  //   marginVertical: 5,
  //   paddingHorizontal: 10,
  //   flex: 1,
  //   flexDirection: "row",
  //   width: "100%",
  // },
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

export default TopAlbums;
