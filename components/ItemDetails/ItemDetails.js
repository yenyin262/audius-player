import React from "react";
import { Text, View } from "react-native";

export default function ItemDetails({ playCount, duration }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-between",
        flexDirection: "row",
        width: "95%",
        marginTop: 10,
      }}
    >
      <Text style={{ color: "hotpink", fontSize: "16px" }}>
        {new Date(duration * 1000).toISOString().substr(15, 4)}
      </Text>
      <Text style={{ color: "hotpink", fontSize: "16px" }}>
        {playCount} plays
      </Text>
    </View>
  );
}
