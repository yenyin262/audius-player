import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ButtonIcon(props) {
  const {
    onIconPress,
    onValuePress,
    value,
    icon: Icon,
    color,
    size,
    fontSize,
  } = props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Icon
        size={size}
        // color="white"
        color={color}
        onPress={onIconPress}
      />
      <TouchableOpacity onPress={onValuePress}>
        <Text
          style={{
            color: color,
            fontSize: fontSize,
          }}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
