import { useNavigation } from "@react-navigation/core";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.homeScreenContainer}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../../assets/logo.png")} />
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate("Music")}>
            <Text style={styles.text}>New Music Everyday</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
            <Text style={styles.text}>My Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.item}>
          <TouchableOpacity onPress={() => navigation.navigate("Explore")}>
            <Text style={styles.text}>Start Exploring</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => navigation.navigate("TrendingPlaylistScreen")}
          >
            <Text style={styles.text}>Music topping the charts!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    marginHorizontal: 30,
    width: 150,
    height: 40,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start", // if you want to fill rows left to right
    marginTop: 25,
  },
  item: {
    width: "48%",
    margin: "1%",
    backgroundColor: "#7209B7",
    height: 350,
    justifyContent: "center",
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
    textAlign: "center",
  },
  homeScreenContainer: {
    flex: 1,
  },
});
