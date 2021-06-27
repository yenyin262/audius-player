//import liraries
import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { fullPlaylist } from "../../data/fullplaylist.json";
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

  console.log(fullPlaylist, "full of playlist ");
  return (
    <View style={styles.container}>
      {CHILL_CARD.map(({ title, icon, screen }, index) => {
        return (
          <TouchableOpacity
            key={index}
            style={{
              width: "100%",
              height: 240,
              backgroundColor: "#FFBE0B",
              borderStyle: "solid",
              borderWidth: 2,
              padding: 10,
              marginBottom: 10,
              borderRadius: 20,
            }}
            onPress={() => navigation.navigate(screen)}
          >
            {/* <View> */}
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
            {/* </View> */}
          </TouchableOpacity>
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
    // marginTop: 20,
  },
});

//make this component available to the app
export default ChillCard;
