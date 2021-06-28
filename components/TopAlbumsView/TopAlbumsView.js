import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import TopAlbumsItem from "../TopAlbumsList/TopAlbumsList";

const TopAlbumsView = ({ albums }) => {
  const renderItem = ({ item }) => {
    return <TopAlbumsItem albums={item} />;
  };

  return (
    <View>
      <Text style={styles.heading}>Top Albums</Text>
      <FlatList
        numColumns={2}
        data={albums}
        renderItem={renderItem}
        keyExtractor={(item) => item.playlist_id}
      />
    </View>
  );
};

export default TopAlbumsView;

const styles = StyleSheet.create({
  heading: {
    color: "#8338EC",
    fontSize: 30,
    fontWeight: "900",
    marginVertical: 5,
    marginHorizontal: 10,
  },
});
