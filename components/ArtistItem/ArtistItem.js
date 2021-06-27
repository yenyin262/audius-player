import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import { getArtistImage, kFormatter } from "../../utils/utils";
import { MaterialIcons } from "@expo/vector-icons";
import AlbumStatIcons from "../AlbumStatIcons/AlbumStatIcons";
// create a component
const ArtistItem = ({ tracks }) => {
  return (
    <View
      style={{
        margin: 10,
        // flex: 1,
        backgroundColor: "white",
        borderRadius: 10,
        maxWidth: "45%",
      }}
    >
      <Image
        source={{
          uri: getArtistImage(tracks.profile_picture_sizes),
        }}
        style={{ width: 160, height: 160, margin: 10, borderRadius: 80 }}
      />
      <View
        style={{
          marginVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1} s>
          {tracks.bio}
        </Text>
        <Text style={[styles.name, styles.name1]} ellipsizeMode="tail">
          {kFormatter(tracks.follower_count)} followers{" "}
          <MaterialIcons name="verified" size={24} color="#8338EC" />
        </Text>
      </View>
    </View>
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
    fontSize: 16,
    fontWeight: "600",
    color: "grey",
    textTransform: "capitalize",
    maxWidth: 200,
    textAlign: "center",
  },

  name1: {
    fontWeight: "400",
    marginTop: 10,
  },
});

//make this component available to the app
export default ArtistItem;
