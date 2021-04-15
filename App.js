import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Audio } from "expo-av";
import {
  getStreamTrackSource,
  // trendingTracks,
} from "./services/audius";
import TracksList from "./components/TracksList/TracksList";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TracksListScreen from "./screen/TracksList/TracksListScreen";
import HomeScreen from "./screen/Home/HomeScreen";

import { Ionicons } from "@expo/vector-icons";
import { PlayerContextProvider } from "./context/player";

const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <PlayerContextProvider>
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
            {(props) => <TracksListScreen {...props} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </PlayerContextProvider>
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
