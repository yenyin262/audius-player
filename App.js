import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import {
  getStreamTrackSource,
  // trendingTracks,
} from "./services/audius";
import TracksList from "./components/TracksList";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TracksListScreen from "./screen/TracksList/TracksListScreen";
import HomeScreen from "./screen/Home/HomeScreen";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "HomeScreen") {
              iconName = focused ? "ios-home" : "ios-home-outline";
            } else if (route.name === "TracksListScreen") {
              iconName = focused ? "musical-notes-sharp" : "ios-list";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="HomeScreen">
          {(props) => <HomeScreen {...props} />}
        </Tab.Screen>

        <Tab.Screen name="TracksListScreen">
          {(props) => (
            <TracksListScreen
              {...props}
              playNewTrack={playNewTrack}
              stopTrack={stopTrack}
              playTrack={playTrack}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
