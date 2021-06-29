//import liraries
import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import TrendingPlaylist from "../../components/TrendingPlaylist/TrendingPlaylist";
import { trendingPlaylistMock } from "../../services/audiusMock";

// create a component
const TrendingPlaylistScreen = ({}) => {
  const [playList, setPlayList] = React.useState([]);

  useEffect(() => {
    async function getTrendingTrack() {
      //   const trendingTracks = await trendingPlaylist();

      const trendingTracks = trendingPlaylistMock();
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
        {playList.length > 0 && <TrendingPlaylist tracks={playList} />}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    marginVertical: 20,
    marginHorizontal: 20,
  },
});

//make this component available to the app
export default TrendingPlaylistScreen;
