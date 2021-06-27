//import liraries
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { fullPlaylist } from "../../data/fullplaylist.json";
import { useNavigation } from "@react-navigation/core";

const FORYOU_CARD = [
  {
    title: "Trending Playlists",
    subtitle: "The top playlists on Audius right now.",
    button: "button component",
    backgroundColor: "FAFBFF",
    screen: "TrendingPlaylistScreen",
  },
  {
    title: "Underground Trending",
    subtitle:
      "Some of the best up-and-coming music on Audius all in one place.",
    button: "button component",
    color: "D662F0",
    screen: "UndergroundTrendingScreen",
  },
];
let colors = ["#FB5607", "#FF006E"];

// create a component
const ForYouCard = () => {
  const navigation = useNavigation();

  console.log(fullPlaylist, "full of playlist ");
  return (
    <View style={styles.container}>
      {FORYOU_CARD.map(({ title, subtitle, color, screen }, index) => {
        return (
          <View
            key={index}
            style={{
              width: 380,
              height: 240,
              backgroundColor: colors[index % colors.length],
              // backgroundColor: `linear-gradient(
              //       135deg
              //       , rgb(255, 166, 59) 0%, rgb(255, 37, 37) 100%)`,
              borderStyle: "solid",
              borderWidth: 2,
              padding: 10,
              marginBottom: 10,
              borderRadius: 20,
            }}
          >
            <TouchableOpacity onPress={() => navigation.navigate(screen)}>
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
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",

    color: "white",
    marginBottom: 10,
    marginTop: 20,
  },
});

//make this component available to the app
export default ForYouCard;
