//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import LetThemDJItem from "../LetThemDJItem/LetThemDJItem";

// create a component
const LetThemDJView = ({ tracks }) => {
  const renderItem = ({ item }) => {
    return <LetThemDJItem tracks={item} />;
  };
  return (
    <View>
      <Text style={styles.heading}>Let Them DJ</Text>
      <FlatList
        renderItem={renderItem}
        data={tracks}
        keyExtractor={(item) => item.playlist_id}
        numColumns={2}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  heading: {
    color: "#8338EC",
    fontSize: 30,
    fontWeight: "900",
    marginVertical: 5,
    marginHorizontal: 10,
  },
});

//make this component available to the app
export default LetThemDJView;
