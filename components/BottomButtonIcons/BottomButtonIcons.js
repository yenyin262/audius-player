import React, { useState } from "react";
import { View, Text } from "react-native";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { kFormatter } from "../../utils/utils";

export default function BottomButtonIcons({ color }) {
  const [heartCount, setHeartCount] = useState(0);
  const [repeatCount, setRepeatCount] = useState(0);

  const onRepeatPress = () => {
    setRepeatCount(repeatCount + 1);
  };

  const onHeartPress = () => {
    setHeartCount(heartCount + 1);
  };

  const onValuePress = () => {
    console.log("new component to show how many likes");
  };

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          flex: 6,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ButtonIcon
          fontSize={20}
          color={color}
          size={35}
          onIconPress={onRepeatPress}
          value={kFormatter(repeatCount)}
          onValuePress={onValuePress}
          icon={(props) => <Ionicons name="repeat-sharp" {...props} />}
        />
        <ButtonIcon
          fontSize={20}
          color={color}
          size={35}
          onIconPress={onHeartPress}
          value={kFormatter(heartCount)}
          onValuePress={onValuePress}
          icon={(props) => <Ionicons name="heart" {...props} />}
        />

        <ButtonIcon
          fontSize={20}
          color={color}
          size={35}
          icon={(props) => <Entypo name="forward" {...props} />}
        />
      </View>
      <View
        style={{
          flex: 2,
        }}
      ></View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <ButtonIcon
          color={color}
          size={35}
          icon={(props) => <Ionicons name="ellipsis-vertical" {...props} />}
        />
      </View>
    </View>
  );
}
