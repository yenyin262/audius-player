//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const ComingSoonTab = ({}) => {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 18 }}>Coming Soon! </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

//make this component available to the app
export default ComingSoonTab;
