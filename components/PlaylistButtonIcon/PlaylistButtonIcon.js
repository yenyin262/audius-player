import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function PlaylistButtonIcon(props) {
  const { onIconPress, onValuePress, value, icon: Icon } = props;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Icon
        size={45}
        color="black"
        onPress={onIconPress}
        style={{ marginRight: 10 }}
      />
      <TouchableOpacity onPress={onValuePress}>
        <Text
          style={{
            color: "black",
            fontSize: 20,
          }}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = create.StyleSheet({});
