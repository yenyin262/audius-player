import React from "react";
import { View, FlatList, StyleSheet, StatusBar, Text } from "react-native";
import TrendingItem from "../TrendingItem/TrendingItem";

const TrendingPlaylist = ({ tracks, onPress }) => {
  const renderItem = ({ item, index }) => {
    return (
      <TrendingItem
        rank={index + 1}
        // onPress={() => onPress(item)}
        tracks={item.tracks}
        artwork={item.artwork["480x480"]}
        name={item.user.name}
        playlist={item}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TrendingPlaylist;
