//import liraries
import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import { usePlayer } from "../../context/player";
import TracksList from "../../components/TracksList/TracksList";

import { useQuery } from "react-query";
import { getUserProfile } from "../../services/audius";
import Banner from "../../components/Banner/Banner";
import Profile from "../../components/Profile/Profile";
import Tabs from "../../components/Tabs/Tabs";
import MusicTab from "../../components/MusicTab/MusicTab";

// create a component

const UserProfileScreen = ({ route, navigation }) => {
  const userId = route?.params?.userId || "n1OXD";

  const {
    isLoading,
    isError,
    data: user,
    error,
  } = useQuery(["user:profile", userId], () => getUserProfile(userId));

  const { track, play } = usePlayer();
  const tracks = track ? [track] : [];
  console.log(user, "user data");

  const navigateToPlayer = (track) => {
    navigation.navigate("PlayerScreen");
    play(track);
  };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>User not found</Text>
      </View>
    );
  }

  console.log(user);

  return (
    <ScrollView style={styles.container}>
      <Banner
        profilePicture={user.profile_picture["480x480"]}
        coverPhoto={user.cover_photo["640x"]}
      />
      <Profile
        name={user.name}
        handle={user.handle}
        trackCount={user.track_count}
        followerCount={user.follower_count}
        followeeCount={user.followee_count}
        userBio={user.bio}
      />
      <Tabs tracks={tracks} onPress={navigateToPlayer} />
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "black",
  },
  banner: {
    marginBottom: 50,
  },
  profile: {
    paddingLeft: 15,
    paddingRight: 15,
  },

  content: {},
});

//make this component available to the app
export default UserProfileScreen;
