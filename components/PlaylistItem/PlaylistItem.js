import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { getAlbumImageURL } from "../../utils/utils";

import AlbumStatIcons from "../AlbumStatIcons/AlbumStatIcons";
// create a component
const PlaylistItem = ({ tracks }) => {
  return (
    <TouchableOpacity
      style={{
        margin: 10,
        // flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
        maxWidth: "48%",
      }}
    >
      <Image
        source={{
          uri: getAlbumImageURL(tracks.playlist_image_sizes_multihash),
        }}
        style={{ width: 170, height: 160, margin: 10, borderRadius: 10 }}
      />
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1} s>
          {tracks.playlist_name}
        </Text>
        <Text style={[styles.name, styles.name1]} ellipsizeMode="tail">
          {tracks.user.handle}
        </Text>
      </View>

      <AlbumStatIcons tracks={tracks} />
    </TouchableOpacity>
  );
};

// define your styles
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
    maxWidth: 200,
  },

  name1: {
    fontWeight: "400",
    marginTop: 10,
  },
});

//make this component available to the app
export default PlaylistItem;
