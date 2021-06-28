//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

// create a component
const ArtistCard = ({ tracks }) => {
  const renderItem = ({ item }) => {
    return <ArtistList tracks={item} />;
  };
  return (
    <View>
      {/* <Text
        style={{
          color: "purple",
          fontSize: 30,
          fontWeight: "900",
          marginVertical: 5,
          marginHorizontal: 10,
        }}
      >
        Artist
      </Text> */}
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
const styles = StyleSheet.create({});

//make this component available to the app
export default ArtistCard;
