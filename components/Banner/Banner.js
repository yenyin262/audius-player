//import liraries
import React from "react";

import { View, StyleSheet, Image, ImageBackground } from "react-native";

// create a component
const Banner = ({ coverPhoto, profilePicture }) => {
  return (
    <View style={styles.banner}>
      <ImageBackground source={{ uri: coverPhoto }} style={styles.coverImg} />
      <Image source={{ uri: profilePicture }} style={styles.img} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  banner: {
    marginBottom: 50,
  },
  coverImg: {
    flexDirection: "row",
    resizeMode: "cover",
    height: 150,
    width: "100%",
    position: "relative",
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 150,
    position: "absolute",
    left: 20,
    bottom: -50,
  },
});

//make this component available to the app
export default Banner;
