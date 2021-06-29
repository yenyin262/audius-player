import React from "react";
import { View, FlatList } from "react-native";
import UndergroundTrendingPlaylistItem from "../UndergroundTrendingPlaylistItem/UndergroundTrendingPlaylistItem";

const UndergroundTrendingPlaylistView = ({ tracks, onPress }) => {
  const renderItem = ({ item, index }) => {
    return (
      <UndergroundTrendingPlaylistItem
        rank={index + 1}
        artwork={item.artwork["480x480"]}
        playlist={item}
        duration={item.duration}
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

export default UndergroundTrendingPlaylistView;
