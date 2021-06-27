import React from "react";
import { View, Text } from "react-native";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { kFormatter } from "../../utils/utils";

export default function AlbumStatIcons({ tracks, color }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingVertical: 10,
        paddingHorizontal: 10,
        maxWidth: 300,
      }}
    >
      <ButtonIcon
        fontSize={15}
        color="black"
        size={20}
        value={tracks.repost_count}
        icon={(props) => <Ionicons name="repeat-sharp" {...props} />}
      />

      <ButtonIcon
        fontSize={15}
        color="black"
        onIconPress={() => {}}
        size={20}
        value={kFormatter(tracks.save_count)}
        icon={(props) => <Ionicons name="heart" {...props} />}
      />
      <Text
        style={{
          color: color,
          fontSize: 15,
          alignSelf: "center",
        }}
      >
        {tracks.user.track_count} tracks
      </Text>
    </View>
  );
}
