import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Go to TracksListScreen"
        onPress={() => navigation.navigate("TracksListScreen")}
        color="green"
      />
      <Button
        title="Go to PlayerScreen"
        onPress={() => navigation.navigate("PlayerScreen")}
        color="green"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
