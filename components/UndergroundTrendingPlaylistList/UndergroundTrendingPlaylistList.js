import React, { useState } from "react";

import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import BottomButtonIcons from "../BottomButtonIcons/BottomButtonIcons";
import TrackStatIcons from "../TrackStatIcons/TrackStatIcons";

const UndergroundTrendingPlaylistList = ({
  artwork,
  playlist,
  rank,
  duration,
}) => {
  return (
    <View
      style={{
        backgroundColor: "white",
        marginBottom: 20,
        padding: 20,
        borderRadius: 20,
        shadowColor: "rgba(133, 129, 153, 0.1)",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
      }}
    >
      <View style={styles.contentContainer}>
        <Image source={{ uri: artwork }} style={{ width: 140, height: 140 }} />

        <View
          style={{
            marginHorizontal: 20,
          }}
        >
          <View style={{ marginHorizontal: 150, width: "50%" }}>
            <Text style={{ color: "grey", fontSize: 16 }}>
              {new Date(duration * 1000).toISOString().substr(15, 4)}
            </Text>
          </View>

          <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
            {playlist.title}{" "}
          </Text>
          <Text
            style={[styles.name, styles.name1]}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {playlist.user.name}
          </Text>
        </View>
      </View>

      <TrackStatIcons playlist={playlist} rank={rank} />

      <View style={{ marginTop: 20 }}>
        <BottomButtonIcons color="black" fontSize={20} />
      </View>
    </View>
  );
};
export default UndergroundTrendingPlaylistList;
const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
  },

  title: {
    fontSize: 24,
    color: "white",

    textTransform: "capitalize",
    marginBottom: 5,
  },

  name: {
    fontSize: 25,
    fontWeight: "600",
    color: "black",
    textTransform: "capitalize",
    maxWidth: 200,
  },

  name1: {
    fontWeight: "400",
    marginTop: 10,
  },
});
