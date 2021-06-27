import React from "react";

import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { getAlbumImageURL } from "../../utils/utils";

import AlbumStatIcons from "../AlbumStatIcons/AlbumStatIcons";

const TopAlbumsList = ({ albums }) => {
  return (
    <TouchableOpacity
      style={{
        margin: 10,
        flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
      }}
    >
      <Image
        source={{
          uri: getAlbumImageURL(albums.playlist_image_sizes_multihash),
        }}
        style={{ width: 170, height: 160, margin: 10, borderRadius: 10 }}
      />
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <Text style={styles.name}>{albums.playlist_name}</Text>
        <Text style={[styles.name, styles.name1]} ellipsizeMode="tail">
          {albums.user.handle}
        </Text>
      </View>

      <AlbumStatIcons tracks={albums} />
    </TouchableOpacity>
  );
};
export default TopAlbumsList;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "white",
    textTransform: "capitalize",
    marginBottom: 5,
  },

  name: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    textTransform: "capitalize",
  },

  name1: {
    fontWeight: "400",
    marginTop: 10,
  },
});
