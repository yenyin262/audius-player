//import liraries
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import ExploreTabs from "../../components/ExploreTabs/ExploreTabs";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import { createStackNavigator } from "@react-navigation/stack";
import TrendingPlaylistScreen from "../TrendingPlaylistScreen/TrendingPlaylistScreen";
import UndergroundTrendingScreen from "../UndergroundTrendingScreen/UndergroundTrendingScreen";
import TopAlbumsScreen from "../TopAlbumsScreen/TopAlbumsScreen";
import LetThemDJScreen from "../LetThemDJScreen/LetThemDJScreen";
import PlaylistScreen from "../PlaylistScreen/PlaylistScreen";

const Stack = createStackNavigator();
// create a component

const ExploreScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ExploreScreen"
        options={{ headerShown: false, title: null }}
      >
        {(props) => (
          <ScrollView>
            <View style={styles.container}>
              <HeaderBar />

              <Text style={styles.heading}>Explore</Text>
              <ExploreTabs navigation={props.navigation} />
            </View>
          </ScrollView>
        )}
      </Stack.Screen>
      <Stack.Screen
        name="TrendingPlaylistScreen"
        options={{ title: "Trending Now" }}
      >
        {(props) => <TrendingPlaylistScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen
        name="UndergroundTrendingScreen"
        options={{ title: "Music before it breaks" }}
      >
        {(props) => <UndergroundTrendingScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="TopAlbumsScreen" options={{ title: "Top Albums" }}>
        {(props) => <TopAlbumsScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="LetThemDJScreen" options={{ title: "Let Them DJ" }}>
        {(props) => <LetThemDJScreen {...props} />}
      </Stack.Screen>
      <Stack.Screen name="PlaylistScreen" options={{ title: "Music by Mood" }}>
        {(props) => <PlaylistScreen {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  heading: {
    color: "#8338EC",
    fontSize: 60,
    fontWeight: "900",
    marginVertical: 10,
  },
  container: {
    marginVertical: 50,
    marginHorizontal: 20,
  },
});

//make this component available to the app
export default ExploreScreen;
