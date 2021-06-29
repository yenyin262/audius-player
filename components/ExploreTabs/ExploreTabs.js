//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ExploreTabInfo from "../ExploreTabInfo/ExploreTabInfo";
import ForYouCard from "../ForYouCard/ForYouCard";
import MoodCard from "../MoodCard/MoodCard";
import PlaylistCard from "../PlaylistCard /PlaylistCard";
import ChillCard from "../ChillCard/ChillCard";
import FeaturedPlaylists from "../FeaturedPlaylists/FeaturedPlaylists";
import FeaturedArtists from "../FeaturedArtists/FeaturedArtists";

const TABS_STATE = [
  {
    title: "For You",
    icon: "star",
    heading: "Just for You ",
    info: "Content curated for  you based on your likes, reposts, and follows. Refreshes often so if you like a track, favorite it.",
    render: (props) => <ExploreTabInfo {...props} />,
    component: <ForYouCard />,
    component2: <PlaylistCard />,
  },

  {
    title: "Moods",
    icon: "mood",
    heading: "Playlists to Fit Your Mood ",
    info: "Playlists made by Audius users, sorted by mood and feel.",
    render: (props) => <ExploreTabInfo {...props} />,
    component: <ChillCard />,
    component2: <MoodCard />,
  },
  {
    title: "Playlists",
    icon: "my-library-music",
    heading: "Featured Playlists",
    info: "",
    render: (props) => <ExploreTabInfo {...props} />,
    component: <FeaturedPlaylists />,
  },
  {
    title: "Artists",
    icon: "person",
    heading: "Featured Artists",
    info: "",
    render: (props) => <ExploreTabInfo {...props} />,
    component: <FeaturedArtists />,
  },
];

// create a component
const ExploreTabs = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState(0);

  const activeTabState = TABS_STATE[activeTab];

  return (
    <View>
      <View style={styles.tabsContainer}>
        {TABS_STATE.map(({ title, icon, screen }, index) => (
          <TouchableOpacity key={title} onPress={() => setActiveTab(index)}>
            <View
              style={[styles.tabItem, activeTab === index && styles.tabActive]}
            >
              <MaterialIcons name={icon} size={40} color="grey" />
              <Text style={styles.tabItemText}>{title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View>
        {activeTabState &&
          activeTabState.render({
            heading: activeTabState.heading,
            info: activeTabState.info,
          })}
      </View>

      <View>{activeTabState && activeTabState.component}</View>
      <View>{activeTabState && activeTabState.component2}</View>
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  tabItem: {
    alignItems: "center",
  },

  tabItemText: {
    color: "grey",
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "700",
  },

  tabActive: {
    borderBottomColor: "#8338EC",
    borderBottomWidth: 4,
  },
});

//make this component available to the app
export default ExploreTabs;
