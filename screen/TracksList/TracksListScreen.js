import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import TracksList from "../../components/TracksList/TracksList";
import { trendingTracksMock } from "../../services/audiusMock";

export default function TracksListScreen({
  navigation,
  playNewTrack,
  playTrack,
  stopTrack,
}) {
  const [trackList, setTrackList] = React.useState([]);

  useEffect(() => {
    async function getTrendingTrack() {
      // const tracks = await trendingTracks();
      const tracks = trendingTracksMock();
      setTrackList(tracks.data);
    }
    getTrendingTrack();
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tracks List Screen</Text>
      <Button
        title="Return Home"
        onPress={() => navigation.navigate("HomeScreen")}
      />
      <Button title="Play Track" onPress={playTrack} />
      <Button title="Pause Track" onPress={stopTrack} />
      {trackList.length > 0 && (
        <TracksList tracks={trackList} onPress={playNewTrack} />
      )}
    </View>
  );
}
