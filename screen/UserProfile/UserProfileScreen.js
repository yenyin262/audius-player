//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";

import { usePlayer } from "../../context/player";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import { Ionicons } from "@expo/vector-icons";
import TracksList from "../../components/TracksList/TracksList";

const { width } = Dimensions.get("window");
const imageSize = width - 300;

// create a component
const UserProfileScreen = ({ navigation }) => {
  const { track, play } = usePlayer();
  console.log(track, "profile track 1");

  const navigateToPlayer = (track) => {
    navigation.navigate("PlayerScreen");
    play(track);
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={{ uri: track.user.cover_photo["640x"] }}
          style={{
            flexDirection: "row",
            resizeMode: "cover",
            height: 150,
            width: "100%",
            position: "relative",
          }}
        />
        <Image
          source={{ uri: track.user.profile_picture["480x480"] }}
          style={{
            width: imageSize,
            height: imageSize,
            borderRadius: 150,
            position: "absolute",
            top: 70,
          }}
        />
        <View
          style={{
            marginVertical: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 80,
          }}
        >
          <View>
            <Text style={{ color: "white", fontSize: 18 }}>
              {track.user.handle}{" "}
            </Text>
            <Text style={{ color: "white", fontSize: 18, marginVertical: 10 }}>
              @{track.user.handle}{" "}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              borderColor: "grey",
              borderWidth: 2,
              borderRadius: 10,
              height: 60,
              width: 150,
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}
          >
            <MaterialIcons name="person-add-alt-1" size={30} color="white" />
            <Text
              style={{
                color: "white",
                fontSize: 18,
                textTransform: "uppercase",
                fontWeight: "800",
                paddingTop: 5,
              }}
            >
              {" "}
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
              {" "}
              {track.user.track_count}{" "}
            </Text>
            {track.user.track_count > 1 ? "tracks" : "track"}
          </Text>
          <Text style={{ color: "white", fontSize: 18, marginRight: 5 }}>
            <Text style={{ fontWeight: "900", fontSize: 24 }}>
              {track.user.follower_count}{" "}
            </Text>
            Followers
          </Text>
          <Text style={{ color: "white", fontSize: 18, marginRight: 5 }}>
            <Text style={{ fontWeight: "900", fontSize: 24 }}>
              {" "}
              {track.user.followee_count}{" "}
            </Text>
            Following
          </Text>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              textTransform: "capitalize",
              marginHorizontal: 5,
            }}
          >
            {track.user.bio}{" "}
          </Text>
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
        <View style={{ marginVertical: 20 }}>
          <TracksList tracks={[track]} onPress={navigateToPlayer} />
          {/* <View style={{ flexDirection: "row" }}>
            <Image
              source={{ uri: track.artwork["480x480"] }}
              style={{
                width: imageSize,
                height: imageSize,
              }}
            />
            <View style={{ width: 280, marginHorizontal: 20 }}>
              <Text
                style={{
                  color: "white",
                  textAlign: "right",
                  paddingRight: 50,
                  marginVertical: 10,
                }}
              >
                {new Date(track.duration * 1000).toISOString().substr(15, 4)}
              </Text>
              <Text style={{ color: "white" }}>{track.title}</Text>
              <Text style={{ color: "white", marginTop: 10 }}>
                {track.user.handle}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                width: 200,
              }}
            >
              <ButtonIcon
                icon={(props) => (
                  <MaterialIcons name="repeat" size={40} color="white" />
                )}
                value={track.repost_count}
              />

              <ButtonIcon
                icon={(props) => (
                  <MaterialCommunityIcons
                    name="cards-heart"
                    size={24}
                    color="white"
                  />
                )}
                value={track.favorite_count}
              />
            </View>
            <Text style={{ color: "white", paddingLeft: 120 }}>
              {track.play_count} plays
            </Text>
          </View> */}
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginTop: 50,
    paddingTop: 40,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "black",
  },
});

//make this component available to the app
export default UserProfileScreen;
