import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ButtonIcon(props) {
  const { onIconPress, onValuePress, value, icon: Icon } = props;
  return (
    <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
      <Icon
        size={35}
        color="white"
        onPress={onIconPress}
        style={{ marginRight: 10 }}
      />
      <TouchableOpacity onPress={onValuePress}>
        <Text
          style={{
            color: "white",
            fontSize: 20,
          }}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
