import React from "react";
import { View, FlatList } from "react-native";
import TrendingItem from "../TrendingItem/TrendingItem";

const TrendingPlaylist = ({ tracks }) => {
  const renderItem = ({ item, index }) => {
    return (
      <TrendingItem
        rank={index + 1}
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
