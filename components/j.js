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
import PlayerScreen from "./screen/PlayerScreen/PlayerScreen";
import UserProfileScreen from "./screen/UserProfile/UserProfileScreen";

import { QueryClient, QueryClientProvider } from "react-query";
import ForYouScreen from "./screen/ForYouScreen/ForYouScreen";
import HeaderBar from "./components/HeaderBar/HeaderBar";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;
// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: twentyFourHoursInMs,
    },
  },
});

const Tab = createBottomTabNavigator();

// create root level stack navigation - first screen is all my TABS
// second screen player screen

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
                } else if (route.name === "PlayerScreen") {
                  iconName = focused
                    ? "play-circle-sharp"
                    : "play-circle-outline";
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
            {/*player screen has to be inside second stack screen */}
            <Tab.Screen name="PlayerScreen">
              {(props) => <PlayerScreen {...props} />}
            </Tab.Screen>
            <Tab.Screen
              name="UserProfileScreen"
              component={UserProfileScreen}
            />
            <Tab.Screen name="ForYouScreen" component={ForYouScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </PlayerContextProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
