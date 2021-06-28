//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
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

  return (
    <View style={styles.container}>
      {FORYOU_CARD.map(({ title, subtitle, screen }, index) => {
        return (
          <View
            key={index}
            style={[
              styles.cardBlock,
              { backgroundColor: colors[index % colors.length] },
            ]}
          >
            <TouchableOpacity onPress={() => navigation.navigate(screen)}>
              <Text style={styles.titleText}>{title}</Text>
              <Text style={styles.descriptionText}>{subtitle}</Text>
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
    color: "white",
    marginBottom: 10,
    marginTop: 20,
  },

  cardBlock: {
    width: 380,
    height: 240,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  titleText: {
    color: "black",
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "900",
    marginVertical: 10,
  },

  descriptionText: {
    color: "black",
    fontSize: 22,
  },
});

//make this component available to the app
export default ForYouCard;
