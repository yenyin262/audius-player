//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const TILE_CARD = [
  {
    title: "Let them DJ",
    subtitle: "Playlists created by the people you follow ",
  },
  {
    title: "Best New Releases",
    subtitle: "From the artists you follow ",
  },
  {
    title: "Under The Radar",
    subtitle: "Tracks you might have missed from the artists you follow ",
  },
  {
    title: "Top Albums",
    subtitle: "The Top Albums from all of audius",
  },
  {
    title: "Most Loved",
    subtitle: "Tracks favorited by the people you follow",
  },
  {
    title: "Feeling Lucky?",
    subtitle: "A purely random collection of tracks from Audius",
  },
];
const ForYouTileCard = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {TILE_CARD.map(({ title, subtitle, color }, index) => {
          return (
            <View
              key={index}
              style={{
                width: "49%",
                height: 240,
                backgroundColor: "pink",
                borderStyle: "solid",
                borderWidth: 2,
                padding: 10,
                marginBottom: 10,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontSize: 24,
                  textTransform: "uppercase",
                  fontWeight: "900",
                  marginVertical: 10,
                }}
              >
                {title}
              </Text>
              <Text style={{ color: "black", fontSize: 22 }}>{subtitle}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

//make this component available to the app
export default ForYouTileCard;
