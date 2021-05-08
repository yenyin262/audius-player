//import liraries
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";

import { usePlayer } from "../../context/player";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import TracksList from "../../components/TracksList/TracksList";

import { useQuery } from "react-query";
import { getUserProfile } from "../../services/audius";

// create a component
const UserProfileScreen = ({ route, navigation }) => {
  const userId = route?.params?.userId || "nlGNe";

  const { isLoading, isError, data: user, error } = useQuery(
    ["user:profile", userId],
    () => getUserProfile(userId)
  );

  const { track, play } = usePlayer();
  const tracks = track ? [track] : [];
  console.log(user, "user data");

  const navigateToPlayer = (track) => {
    navigation.navigate("PlayerScreen");
    play(track);
  };

  if (isLoading) {
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Loading</Text>
    </View>;
  }

  if (!user) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>User not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.banner}>
        <ImageBackground
          source={{ uri: user.cover_photo["640x"] }}
          style={{
            flexDirection: "row",
            resizeMode: "cover",
            height: 150,
            width: "100%",
            position: "relative",
          }}
        />
        <Image
          source={{ uri: user.profile_picture["480x480"] }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 150,
            position: "absolute",
            left: 20,
            bottom: -50,
          }}
        />
      </View>
      <View style={styles.profile}>
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 16,
                fontWeight: "bold",
                marginBottom: 5,
              }}
            >
              {user.handle}
            </Text>
            <Text
              style={{
                color: "white",
                fontSize: 14,
              }}
            >
              @{user.handle}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderColor: "grey",
              borderWidth: 2,
              borderRadius: 10,
              height: 40,
              paddingVertical: 10,
              paddingHorizontal: 20,
            }}
          >
            <MaterialIcons name="person-add-alt-1" size={24} color="white" />
            <Text
              style={{
                color: "white",
                fontSize: 14,
                textTransform: "uppercase",
                fontWeight: "800",
                marginLeft: 10,
              }}
            >
              Follow
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 18, marginRight: 5 }}>
            <Text style={{ fontWeight: "900", fontSize: 24 }}>
              {user.track_count}{" "}
            </Text>
            {user.track_count > 1 ? "tracks" : "track"}
          </Text>
          <Text style={{ color: "white", fontSize: 18, marginRight: 5 }}>
            <Text style={{ fontWeight: "900", fontSize: 24 }}>
              {user.follower_count}{" "}
            </Text>
            Followers
          </Text>
          <Text style={{ color: "white", fontSize: 18, marginRight: 5 }}>
            <Text style={{ fontWeight: "900", fontSize: 24 }}>
              {user.followee_count}{" "}
            </Text>
            Following
          </Text>
        </View>
        <View style={styles.bio}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              textTransform: "capitalize",
              marginHorizontal: 5,
            }}
          >
            {user.bio}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons name="music" size={40} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginRight: 5,
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Music
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <MaterialIcons name="album" size={40} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginRight: 5,
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Albums
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <MaterialCommunityIcons
            name="playlist-music"
            size={40}
            color="white"
          />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginRight: 5,
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Playlists
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <MaterialIcons name="repeat" size={40} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginRight: 5,
              textTransform: "uppercase",
              fontWeight: "700",
            }}
          >
            Reposts
          </Text>
        </View>
      </View>
      <View style={{ marginVertical: 20, paddingBottom: 40 }}>
        <TracksList tracks={tracks} onPress={navigateToPlayer} />
      </View>
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
  bio: { marginVertical: 10 },
  content: {},
});

//make this component available to the app
export default UserProfileScreen;
