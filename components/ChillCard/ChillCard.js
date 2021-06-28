//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/core";
import Emoji from "react-native-emoji";
const CHILL_CARD = [
  {
    title: "Chill",
    icon: "dove_of_peace",
    screen: "PlaylistScreen",
  },
];

// create a component
const ChillCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {CHILL_CARD.map(({ title, icon, screen }, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => navigation.navigate(screen)}
          >
            <Text style={styles.buttonText}>{title}</Text>

            <Emoji name={icon} style={styles.emoji} />
          </TouchableOpacity>
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
  },

  button: {
    width: "100%",
    height: 240,
    backgroundColor: "#FFBE0B",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  buttonText: {
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

export default ChillCard;
