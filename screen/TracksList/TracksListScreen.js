import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
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
    navigation.navigate("PlayerScreen");
    play(track);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tracks List Screen</Text>
      {track && <Text>Now playing {track.title}</Text>}
      <Button
        title="Return Home"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button title="Play Track" onPress={() => play()} />
      <Button title="Pause Track" onPress={pause} />
      {trackList.length > 0 && (
        <TracksList tracks={trackList} onPress={navigateToPlayer} />
      )}
    </View>
  );
}
