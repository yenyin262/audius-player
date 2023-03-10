import React from "react";
import { StyleSheet, View } from "react-native";
import { Audio } from "expo-av";
import {
  getStreamTrackSource,
  // trendingTracks,
} from "./services/audius";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TracksListScreen from "./screen/TracksList/TracksListScreen";
import HomeScreen from "./screen/Home/HomeScreen";

import { Ionicons } from "@expo/vector-icons";
import { PlayerContextProvider } from "./context/player";
import PlayerScreen from "./screen/PlayerScreen/PlayerScreen";
import UserProfileScreen from "./screen/UserProfile/UserProfileScreen";

import { QueryClient, QueryClientProvider } from "react-query";

import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "./screen/ExploreScreen/ExploreScreen";

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
const Stack = createStackNavigator();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PlayerContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Main"
              options={{ headerShown: false, title: null }}
            >
              {(props) => (
                <View style={{ flex: 1 }}>
                  <Tab.Navigator
                    screenOptions={({ route }) => ({
                      tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === "Home") {
                          iconName = focused ? "ios-home" : "ios-home-outline";
                        } else if (route.name === "Music") {
                          iconName = focused
                            ? "musical-notes-sharp"
                            : "ios-list";
                        } else if (route.name === "Profile") {
                          iconName = focused
                            ? "ios-person"
                            : "ios-person-outline";
                        } else if (route.name === "Explore") {
                          iconName = focused
                            ? "trending-up"
                            : "ios-trending-up-outline";
                        }
                        return (
                          <Ionicons name={iconName} size={size} color={color} />
                        );
                      },
                    })}
                  >
                    <Tab.Screen name="Home">
                      {(props) => <HomeScreen {...props} />}
                    </Tab.Screen>

                    <Tab.Screen name="Music">
                      {(props) => <TracksListScreen {...props} />}
                    </Tab.Screen>
                    <Tab.Screen name="Profile" component={UserProfileScreen} />
                    <Tab.Screen name="Explore" component={ExploreScreen} />
                  </Tab.Navigator>
                </View>
              )}
            </Stack.Screen>
            <Stack.Screen
              name="PlayerScreen"
              options={{ title: "Now Playing" }}
            >
              {(props) => <PlayerScreen {...props} />}
            </Stack.Screen>
          </Stack.Navigator>
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
