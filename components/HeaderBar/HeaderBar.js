//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
// create a component
function HeaderBar() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="bell" size={40} color="grey" />
      <Image
        style={{ marginHorizontal: 30, width: 150, height: 40 }}
        source={require("../../assets/logo.png")}
      />
      <MaterialIcons name="search" size={40} color="black" />
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});

//make this component available to the app
export default HeaderBar;
