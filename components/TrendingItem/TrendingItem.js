import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import BottomButtonIcons from "../BottomButtonIcons/BottomButtonIcons";
import TrackStatIcons from "../TrackStatIcons/TrackStatIcons";

const TrendingItem = ({ artwork, playlist, name, tracks, rank }) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginBottom: 20,
        padding: 20,
        borderRadius: 20,
        shadowColor: "rgba(133, 129, 153, 0.1)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      }}
    >
      <View>
        <View style={styles.contentContainer}>
          <Image source={{ uri: artwork }} style={styles.image} />
          <View style={styles.itemInfoContainer}>
            <Text
              ellipsizeMode="tail"
              numberOfLines={1}
              style={styles.playlistText}
            >
              {playlist.playlist_name}{" "}
            </Text>
            <Text
              style={[styles.playlistText, styles.playlistSubText]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {name}
            </Text>
          </View>
        </View>
        <View style={styles.iconContainer}>
          <TrackStatIcons playlist={playlist} rank={rank} font={20} />
        </View>

        <View>
          {tracks.map(({ title, user }, index) => (
            <View key={title} style={styles.tracksInfoContainer}>
              <Text style={styles.numericStyle}>{index + 1}</Text>
              <Text
                style={styles.songTitle}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {title}
              </Text>
              <Text style={styles.artist} ellipsizeMode="tail">
                by {user.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.bottomIcons}>
        <BottomButtonIcons color="black" fontSize={20} />
      </View>
    </View>
  );
};
export default TrendingItem;
const styles = StyleSheet.create({
  contentContainer: {
    width: "80%",
    flexDirection: "row",
  },

  image: {
    width: 140,
    height: 140,
  },

  itemInfoContainer: {
    marginVertical: 20,
    marginHorizontal: 20,
    maxWidth: 200,
  },
  playlistText: {
    fontSize: 25,
    fontWeight: "600",
    color: "black",
    textTransform: "capitalize",
    marginHorizontal: 10,
    maxWidth: 200,
  },

  playlistSubText: {
    fontWeight: "400",
  },

  iconContainer: {
    marginVertical: 20,
  },

  tracksInfoContainer: {
    flexDirection: "row",
    paddingVertical: 10,
    flexWrap: "wrap",
    borderBottomColor: "grey",
    borderBottomWidth: 0.4,
    borderStyle: "solid",
  },

  numericStyle: {
    marginRight: 10,
    fontSize: 20,
  },

  songTitle: {
    fontSize: 20,
    color: "black",
    maxWidth: 200,
  },

  artist: {
    fontSize: 20,
    color: "grey",
    paddingLeft: 5,
  },
  bottomIcons: {
    marginTop: 10,
  },
});
