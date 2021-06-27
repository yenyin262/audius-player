import React from "react";
import { View, Text } from "react-native";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { kFormatter } from "../../utils/utils";

export default function TrackStatIcons({ playlist, rank }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        borderBottomColor: "light grey",
        borderBottomWidth: "0.4",
        borderStyle: "solid",
        paddingVertical: 10,
        // maxWidth: 300,
      }}
    >
      <ButtonIcon
        fontSize={20}
        color="black"
        onIconPress={() => {}}
        value={rank}
        // onValuePress={() => {}}
        size={25}
        icon={(props) => <Foundation name="crown" color="black" {...props} />}
      />
      <ButtonIcon
        fontSize={20}
        color="black"
        onIconPress={() => {}}
        size={25}
        // onValuePress={() => {}}
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
