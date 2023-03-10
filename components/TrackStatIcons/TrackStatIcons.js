import React from "react";
import { View, StyleSheet } from "react-native";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { kFormatter } from "../../utils/utils";

export default function TrackStatIcons({ playlist, rank }) {
  return (
    <View style={styles.iconContainer}>
      <ButtonIcon
        fontSize={20}
        color="black"
        onIconPress={() => {}}
        value={rank}
        size={25}
        icon={(props) => <Foundation name="crown" color="black" {...props} />}
      />
      <ButtonIcon
        fontSize={20}
        color="black"
        onIconPress={() => {}}
        size={25}
        value={kFormatter(playlist.favorite_count)}
        icon={(props) => <Ionicons name="heart" {...props} />}
      />
      <ButtonIcon
        fontSize={20}
        color="black"
        size={25}
        value={playlist.repost_count}
        icon={(props) => <Ionicons name="repeat-sharp" {...props} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderBottomColor: "grey",
    borderBottomWidth: 0.4,
    borderStyle: "solid",
    paddingVertical: 10,
  },
});
