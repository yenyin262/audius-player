//import liraries
import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const PLAYLIST_CARD = [
  {
    title: "Let them DJ",
    subtitle: "Playlists created by the people you follow ",
    screen: "LetThemDJScreen",
  },

  {
    title: "Top Albums",
    subtitle: "The Top Albums from all of audius",
    screen: "TopAlbumsScreen",
  },
];

let colors = ["#FB5607", "#FF006E"];

const PlaylistCard = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <View style={styles.container}>
        {PLAYLIST_CARD.map(({ title, subtitle, screen }, index) => {
          return (
            <View
              key={index}
              style={[
                styles.cardBlock,
                { backgroundColor: colors[index % colors.length] },
              ]}
            >
              <TouchableOpacity onPress={() => navigation.navigate(screen)}>
                <Image />
                <Text style={styles.text}>{title}</Text>
                <Text style={styles.description}>{subtitle}</Text>
              </TouchableOpacity>
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

  cardBlock: {
    width: "49%",
    height: 240,
    borderStyle: "solid",
    borderWidth: 2,
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  text: {
    color: "black",
    fontSize: 24,
    textTransform: "uppercase",
    fontWeight: "900",
    marginVertical: 10,
  },
  description: {
    color: "black",
    fontSize: 22,
  },
});

//make this component available to the app
export default PlaylistCard;
