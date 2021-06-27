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
      <View style={{}}>
        <View style={styles.contentContainer}>
          <Image
            source={{ uri: artwork }}
            style={{ width: 140, height: 140 }}
          />
          <View
            style={{
              marginVertical: 20,
              marginHorizontal: 20,
              maxWidth: 200,
            }}
          >
            <Text ellipsizeMode="tail" numberOfLines={1} style={styles.name}>
              {playlist.playlist_name}{" "}
            </Text>
            <Text
              style={[styles.name, styles.name1]}
              ellipsizeMode="tail"
              numberOfLines={1}
            >
              {name}
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 20 }}>
          <TrackStatIcons playlist={playlist} rank={rank} font={20} />
        </View>

        <View>
          {tracks.map(({ title, user }, index) => (
            <View
              key={title}
              style={{
                flexDirection: "row",
                paddingVertical: 10,
                flexWrap: "wrap",
                borderBottomColor: "light grey",
                borderBottomWidth: "0.4",
                borderStyle: "solid",
              }}
            >
              <Text style={{ marginRight: 10, fontSize: 20 }}>{index + 1}</Text>
              <Text
                style={{ fontSize: 20, color: "black", maxWidth: 200 }}
                ellipsizeMode="tail"
                numberOfLines={1}
              >
                {title}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "grey",
                  paddingLeft: 5,
                }}
                ellipsizeMode="tail"
              >
                by {user.name}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View style={{ marginTop: 10 }}>
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

  title: {
    fontSize: 24,
    color: "white",
    textAlign: "left",
    textTransform: "capitalize",
    marginBottom: 5,
  },

  name: {
    fontSize: 25,
    fontWeight: "600",
    color: "black",
    textTransform: "capitalize",
    marginHorizontal: 10,
    maxWidth: 200,
  },

  name1: {
    fontWeight: "400",
  },
});
