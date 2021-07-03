//import liraries
import React, { useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import UndergroundTrendingPlaylistView from "../../components/UndergroundTrendingPlaylistView/UndergroundTrendingPlaylistView";
import { undergroundTrendingMock } from "../../services/audiusMock";

// create a component
const UndergroundTrendingScreen = ({}) => {
  const [undergroundPlayList, setPlayList] = React.useState([]);

  useEffect(() => {
    async function getTrendingTrack() {
      const trendingTracks = undergroundTrendingMock();
      console.log(trendingTracks);
      setPlayList(trendingTracks.data);
    }
    getTrendingTrack();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {undergroundPlayList.length > 0 && (
          <UndergroundTrendingPlaylistView tracks={undergroundPlayList} />
        )}
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
export default UndergroundTrendingScreen;
