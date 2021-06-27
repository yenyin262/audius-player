//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/core";

import Emoji from "react-native-emoji";
import { color } from "react-native-reanimated";
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
            style={{
              width: "49%",
              height: 240,
              backgroundColor: colors[index % colors.length],
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

              {/* <MaterialCommunityIcons name={icon} size={40} color="grey" /> */}
              <Emoji
                name={icon}
                style={{ fontSize: 50, textAlign: "center", paddingTop: 30 }}
              />
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
});

//make this component available to the app
export default MoodCard;
