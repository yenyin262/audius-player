import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import {
  getStreamTrackSource,
  // trendingTracks,
} from "./services/audius";
import TracksList from "./components/TracksList";
import { trendingTracksMock } from "./services/audiusMock";

export default function App() {
  /**
   * https://docs.expo.io/versions/latest/sdk/audio/#playing-sounds
   * @type {[Audio.Sound, Function]} SoundState
   */
  const [sound, setSound] = React.useState();
  /**
   * @type {[string, Function]} TrackState
   */
  const [track, setTrack] = React.useState();
  const lastTrack = React.useRef(null);
  const [trackList, setTrackList] = React.useState([]);

  React.useEffect(() => {
    // Unload sound when track is changed
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  React.useEffect(() => {
    // Load new sound when track changes
    async function loadSound(trackId) {
      const { sound } = await Audio.Sound.createAsync(
        await getStreamTrackSource(trackId)
      );
      setSound(sound);

      lastTrack.current = trackId;
      await sound.playAsync();
    }

    if (track && lastTrack.current !== track) {
      loadSound(track);
    }
  }, [track]);

  async function getTrendingTrack() {
    // const tracks = await trendingTracks();
    const tracks = trendingTracksMock();
    setTrackList(tracks.data);
  }

  function playNewTrack(trackId) {
    setTrack(trackId);
  }

  async function playTrack() {
    if (sound && (await sound.getStatusAsync()).isLoaded) {
      await sound.playAsync();
    }
  }

  async function stopTrack() {
    sound.pauseAsync();
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button title="Log trending" onPress={getTrendingTrack} />
      <Button title="Play Track" onPress={playTrack} />
      <Button title="Pause Track" onPress={stopTrack} />
      {trackList.length > 0 && (
        <TracksList tracks={trackList} onPress={playNewTrack} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
