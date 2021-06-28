import React from "react";
import { View, Text, StyleSheet } from "react-native";
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
    <View style={styles.iconContainer}>
      <Icon size={size} color={color} onPress={onIconPress} />
      <TouchableOpacity onPress={onValuePress}>
        <Text
          style={{
            color: color,
            fontSize: fontSize,
            marginHorizontal: 5,
          }}
        >
          {value}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
});
