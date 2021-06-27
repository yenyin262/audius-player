import React, { useEffect } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import TracksList from "../../components/TracksList/TracksList";
import { usePlayer } from "../../context/player";
import { trendingTracksMock } from "../../services/audiusMock";

export default function TracksListScreen({ navigation }) {
  const { track, play, pause } = usePlayer();
  const [trackList, setTrackList] = React.useState([]);

  useEffect(() => {
    async function getTrendingTrack() {
      // const tracks = await trendingTracks();
      const tracks = trendingTracksMock();
      setTrackList(tracks.data);
    }
    getTrendingTrack();
  }, []);

  const navigateToPlayer = (track) => {
    play(track);
    navigation.navigate("PlayerScreen");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <HeaderBar />
      {trackList.length > 0 && (
        <TracksList tracks={trackList} onPress={navigateToPlayer} />
      )}
    </SafeAreaView>
  );
}
