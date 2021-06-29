import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { getArtistImage, kFormatter } from "../../utils/utils";
import { MaterialIcons } from "@expo/vector-icons";

// create a component
const ArtistItem = ({ tracks }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: getArtistImage(tracks.profile_picture_sizes),
        }}
        style={styles.artistImg}
      />
      <View style={styles.artistInfoContainer}>
        <Text style={styles.text} ellipsizeMode="tail" numberOfLines={1}>
          {tracks.bio}
        </Text>
        <Text style={[styles.text, styles.subText]} ellipsizeMode="tail">
          {kFormatter(tracks.follower_count)} followers{" "}
          <MaterialIcons name="verified" size={24} color="#8338EC" />
        </Text>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    maxWidth: "45%",
  },
  artistImg: {
    width: 160,
    height: 160,
    margin: 10,
    borderRadius: 80,
  },

  artistInfoContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
  },

  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
    textTransform: "capitalize",
    maxWidth: 200,
    textAlign: "center",
  },

  subText: {
    fontWeight: "400",
    marginTop: 10,
  },
});

//make this component available to the app
export default ArtistItem;
