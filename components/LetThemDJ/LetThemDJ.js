//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import LetThemDJList from "../LetThemDJList/LetThemDJList";

// create a component
const LetThemDJ = ({ tracks }) => {
  const renderItem = ({ item }) => {
    return <LetThemDJList tracks={item} />;
  };
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "purple",
          fontSize: 30,
          fontWeight: "900",
          marginVertical: 5,
          marginHorizontal: 10,
        }}
      >
        Let Them DJ
      </Text>
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
  container: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default LetThemDJ;
