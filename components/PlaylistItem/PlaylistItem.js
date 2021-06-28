import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { getAlbumImageURL } from "../../utils/utils";

import AlbumStatIcons from "../AlbumStatIcons/AlbumStatIcons";
// create a component
const PlaylistItem = ({ tracks }) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image
        source={{
          uri: getAlbumImageURL(tracks.playlist_image_sizes_multihash),
        }}
        style={styles.itemImage}
      />
      <View style={styles.itemInfoContainer}>
        <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
          {tracks.playlist_name}
        </Text>
        <Text style={[styles.text, styles.subText]} ellipsizeMode="tail">
          {tracks.user.handle}
        </Text>
      </View>

      <AlbumStatIcons tracks={tracks} />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  button: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    maxWidth: "48%",
  },
  itemImage: {
    width: 170,
    height: 160,
    margin: 10,
    borderRadius: 10,
  },
  itemInfoContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
    color: "black",
    textTransform: "capitalize",
    maxWidth: 200,
  },

  subText: {
    fontWeight: "400",
    marginTop: 10,
  },
});

//make this component available to the app
export default PlaylistItem;
