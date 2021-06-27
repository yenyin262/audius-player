//import liraries
import React, { Component, useEffect } from "react";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import TrendingPlaylist from "../../components/TrendingPlaylist/TrendingPlaylist";
import UndergroundTrendingPlaylist from "../../components/UndergroundTrendingPlaylist/UndergroundTrendingPlaylist";
import { undergroundTrendingMock } from "../../services/audiusMock";

// create a component
const UndergroundTrendingScreen = ({}) => {
  const [undergroundPlayList, setPlayList] = React.useState([]);

  useEffect(() => {
    async function getTrendingTrack() {
      //   const trendingTracks = await trendingPlaylist();

      const trendingTracks = undergroundTrendingMock();
      console.log(trendingTracks);
      setPlayList(trendingTracks.data);
    }
    getTrendingTrack();
  }, []);

  // const navigateToPlayer = (track) => {
  //   play(track);
  //   navigation.navigate("PlayerScreen");
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {undergroundPlayList.length > 0 && (
          <UndergroundTrendingPlaylist tracks={undergroundPlayList} />
        )}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "flex-start",
    alignItems: "flex-start",
    marginVertical: 20,

    marginHorizontal: 20,
  },
});

//make this component available to the app
export default UndergroundTrendingScreen;
