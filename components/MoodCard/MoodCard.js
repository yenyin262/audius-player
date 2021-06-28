//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";

import Emoji from "react-native-emoji";

const MOOD_CARD = [
  {
    title: "Upbeat",
    icon: "raised_hands",
    screen: "PlaylistScreen",
  },
  {
    title: "Intense",
    icon: "fire",
    screen: "PlaylistScreen",
  },
  {
    title: "Provoking",
    icon: "thinking_face",
    screen: "PlaylistScreen",
  },
  {
    title: "Intimate",
    icon: "cupid",
    screen: "PlaylistScreen",
  },
];

let colors = ["#FFBE0B", "#8338EC", "#8338EC"];
const MoodCard = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {MOOD_CARD.map(({ title, icon, screen }, index) => {
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
              <Emoji name={icon} style={styles.emoji} />
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
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
  },

  cardBlock: {
    width: "49%",
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

  emoji: {
    fontSize: 50,
    textAlign: "center",
    paddingTop: 30,
  },
});

//make this component available to the app
export default MoodCard;
