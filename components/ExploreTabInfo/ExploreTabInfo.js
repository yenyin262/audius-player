//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";

// create a component
const ExploreTabInfo = ({ heading, info }) => {
  return (
    <View>
      <Text style={styles.headingText}>{heading}</Text>
      {!!info && <Text style={styles.infoText}>{info}</Text>}
    </View>
  );
};

//make this component available to the app
export default ExploreTabInfo;

const styles = StyleSheet.create({
  headingText: {
    color: "#8338EC",
    fontSize: 24,
    fontWeight: "700",
  },

  infoText: {
    color: "black",
    fontSize: 20,
    fontWeight: "500",
    marginVertical: 5,
  },
});
