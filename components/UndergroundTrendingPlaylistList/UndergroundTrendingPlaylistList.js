import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import BottomButtonIcons from "../BottomButtonIcons/BottomButtonIcons";
import TrackStatIcons from "../TrackStatIcons/TrackStatIcons";

const UndergroundTrendingPlaylistList = ({
  artwork,
  playlist,
  rank,
  duration,
}) => {
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
      <View style={styles.contentContainer}>
        <Image source={{ uri: artwork }} style={styles.image} />

        <View
          style={{
            marginHorizontal: 20,
          }}
        >
          <View style={styles.durationContentContainer}>
            <Text style={styles.durationText}>
              {new Date(duration * 1000).toISOString().substr(15, 4)}
            </Text>
          </View>

          <Text
            style={styles.playlistTitle}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {playlist.title}
          </Text>
          <Text
            style={[styles.playlistTitle, styles.playlistSubText]}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {playlist.user.name}
          </Text>
        </View>
      </View>

      <TrackStatIcons playlist={playlist} rank={rank} />

      <View style={styles.bottomIcons}>
        <BottomButtonIcons color="black" fontSize={20} />
      </View>
    </View>
  );
};
export default UndergroundTrendingPlaylistList;
const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
  },
  contentContainer: {
    flexDirection: "row",
  },

  durationContentContainer: {
    marginHorizontal: 150,
    width: "50%",
  },
  durationText: {
    color: "grey",
    fontSize: 16,
  },
  playlistTitle: {
    fontSize: 25,
    fontWeight: "600",
    color: "black",
    textTransform: "capitalize",
    maxWidth: 200,
  },

  playlistSubText: {
    fontWeight: "400",
    marginTop: 10,
  },
  bottomIcons: {
    marginTop: 20,
  },
});
