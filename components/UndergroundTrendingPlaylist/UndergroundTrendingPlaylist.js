import React from "react";
import { View, FlatList } from "react-native";
import UndergroundTrendingPlaylistList from "../UndergroundTrendingPlaylistList/UndergroundTrendingPlaylistList";

const UndergroundTrendingPlaylist = ({ tracks, onPress }) => {
  const renderItem = ({ item, index }) => {
    return (
      <UndergroundTrendingPlaylistList
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

export default UndergroundTrendingPlaylist;
