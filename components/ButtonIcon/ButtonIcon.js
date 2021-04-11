import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ButtonIcon(props) {
  const { onIconPress, onValuePress, value, icon: Icon } = props;
  return (
    <View
      style={{ flex: 1, justifyContent: "space-around", flexDirection: "row" }}
    >
      <Icon size={35} color="white" onPress={onIconPress} />
      <TouchableOpacity onPress={onValuePress}>
        <Text style={{ color: "white" }}>{value}</Text>
      </TouchableOpacity>
    </View>
  );
}
