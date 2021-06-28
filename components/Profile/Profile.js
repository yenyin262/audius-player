//import liraries
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import ShowMoreButton from "../ShowMoreButton/ShowMoreButton";

// create a component
const Profile = ({
  name,
  handle,
  trackCount,
  followerCount,
  followeeCount,
  userBio,
}) => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.userContainer}>
        <View>
          <Text style={styles.userName}>{name}</Text>
          <Text style={styles.userHandle}>@{handle}</Text>
        </View>
        <View style={styles.followBtn}>
          <MaterialIcons name="person-add-alt-1" size={24} color="white" />
          <Text style={styles.followBtnText}>Follow</Text>
        </View>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userInfoText}>
          <Text style={styles.userInfoCount}>{trackCount} </Text>
          {trackCount > 1 ? "tracks" : "track"}
        </Text>
        <Text style={styles.userInfoText}>
          <Text style={styles.userInfoCount}>{followerCount} </Text>
          Followers
        </Text>
        <Text style={styles.userInfoText}>
          <Text style={styles.userInfoCount}>{followeeCount} </Text>
          Following
        </Text>
      </View>
      <ShowMoreButton text={userBio} numberOfLines={2} />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  profileContainer: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  userContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userHandle: {
    color: "white",
    fontSize: 14,
  },
  followBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
    borderWidth: 2,
    borderRadius: 10,
    height: 40,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  followBtnText: {
    color: "white",
    fontSize: 14,
    textTransform: "uppercase",
    fontWeight: "800",
    marginLeft: 10,
  },
  userInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  userInfoText: {
    color: "white",
    fontSize: 18,
    marginRight: 5,
  },
  userInfoCount: {
    fontWeight: "900",
    fontSize: 16,
  },
});

//make this component available to the app
export default Profile;
