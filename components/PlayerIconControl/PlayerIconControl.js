import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PlayerIconControl(props) {
  const { onIconPress, onValuePress, value, icon: Icon } = props;
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Icon size={40} color="white" onPress={onIconPress} />
    </View>
  );
}
