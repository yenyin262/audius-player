//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, Touchable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import MusicTab from "../MusicTab/MusicTab";
import ComingSoonTab from "../ComingSoonTab/ComingSoonTab";

const TABS_STATE = [
  {
    title: "Music",
    icon: "music",
    render: (props) => <MusicTab {...props} />,
  },
  {
    title: "Albums",
    icon: "album",
    render: (props) => <ComingSoonTab {...props} />,
  },
  {
    title: "Playlists",
    icon: "playlist-music",
    render: (props) => <ComingSoonTab {...props} />,
  },
  {
    title: "Reposts",
    icon: "repeat",
    render: (props) => <ComingSoonTab {...props} />,
  },
];

// create a component
const Tabs = ({ tracks, navigateToPlayer }) => {
  const [activeTab, setActiveTab] = useState(0);
  console.log(navigateToPlayer, "navigate in tab component");
  return (
    <View>
      <View style={styles.tabsContainer}>
        {TABS_STATE.map(({ title, icon }, index) => (
          <TouchableOpacity key={title} onPress={() => setActiveTab(index)}>
            <View
              style={[styles.tabItem, activeTab === index && styles.tabActive]}
            >
              <MaterialCommunityIcons name={icon} size={40} color="white" />
              <Text style={styles.tabItemText}>{title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View>
        {TABS_STATE[activeTab].render &&
          TABS_STATE[activeTab].render({ tracks, navigateToPlayer })}
      </View>
    </View>
  );
};

// define your styles

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 20,
  },
  tabItem: {
    alignItems: "center",
  },

  tabItemText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    textTransform: "uppercase",
    fontWeight: "700",
  },

  tabActive: {
    borderBottomColor: "purple",
    borderBottomWidth: 4,
  },
});

//make this component available to the app
export default Tabs;
