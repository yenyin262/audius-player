import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { getAlbumImageURL } from "../../utils/utils";
import AlbumStatIcons from "../AlbumStatIcons/AlbumStatIcons";
// create a component
const LetThemDJItem = ({ tracks }) => {
  return (
    <TouchableOpacity
      style={{
        margin: 10,
        backgroundColor: "white",
        borderRadius: 10,
        maxWidth: "48%",
      }}
    >
      <Image
        source={{
          uri: getAlbumImageURL(tracks.playlist_image_sizes_multihash),
        }}
        style={styles.itemImg}
      />
      <View style={styles.itemInfoContainer}>
        <Text style={styles.text}>{tracks.playlist_text}</Text>
        <Text style={[styles.text, styles.subtext]} ellipsizeMode="tail">
          {tracks.user.handle}
        </Text>
      </View>

      <AlbumStatIcons tracks={tracks} />
    </TouchableOpacity>
  );
};
export default LetThemDJItem;

// define your styles
const styles = StyleSheet.create({
  itemImg: {
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
  },

  subtext: {
    fontWeight: "400",
    marginTop: 10,
  },
});

//make this component available to the app
