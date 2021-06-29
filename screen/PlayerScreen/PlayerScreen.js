import React, { useEffect, useMemo } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { usePlayer } from "../../context/player";
import PlayerIconControl from "../../components/PlayerIconControl/PlayerIconControl";
import { TouchableOpacity } from "react-native-gesture-handler";
import BottomButtonIcons from "../../components/BottomButtonIcons/BottomButtonIcons";

const { width } = Dimensions.get("window");
const imageSize = width - 96;

function getInitialPosition(duration) {
  if (duration > 3600) return "0:00:00";
  else if (duration > 600) return "00:00";
  return "0:00";
}

export default function PlayerScreen({ navigation }) {
  const { track, isPlaying, sound, toggle } = usePlayer();
  const remaining = useMemo(
    () => new Date(track.duration * 1000).toISOString().substr(15, 4),
    [track.duration]
  );
  const [position, setPosition] = React.useState(
    getInitialPosition(track.duration)
  );

  useEffect(() => {
    setPosition(getInitialPosition(track.duration));
  }, [track.duration]);

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    }
  }, [sound]);

  /**
   * @param {import("expo-av").AVPlaybackStatus} status
   */
  function onPlaybackStatusUpdate(status) {
    if (status.isPlaying) {
      setPosition(new Date(status.positionMillis).toISOString().substr(15, 4));
    }
  }

  const navigateToUserProfile = () => {
    navigation.navigate("UserProfileScreen", { userId: track.user.id });
  };

  return (
    <View style={styles.screenContainer}>
      <TouchableOpacity
        onPress={navigateToUserProfile}
        style={{
          alignItems: "center",
          flexBasis: imageSize,
          marginBottom: 24,
          width: "100%",
        }}
      >
        <Image
          source={{ uri: track.artwork["480x480"] }}
          style={{
            width: imageSize,
            height: imageSize,
          }}
        />
      </TouchableOpacity>
      <View style={styles.flexView}>
        <View style={styles.trackInfoContainer}>
          <Text style={styles.trackTitle}>{track.title}</Text>
          <Text style={styles.artist}>{track.user.name}</Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>{position}</Text>
            <View style={styles.flexView} />
            <Text style={[styles.text, { width: 40 }]}>{remaining}</Text>
          </View>
        </View>
        <View style={styles.iconControlContainer}>
          <PlayerIconControl
            icon={(props) => (
              <MaterialIcons name="replay" {...props} size={30} />
            )}
          />

          <PlayerIconControl
            icon={(props) => (
              <MaterialIcons name="skip-previous" {...props} size={50} />
            )}
          />
          <PlayerIconControl
            icon={(props) => (
              <MaterialIcons
                name={isPlaying ? "pause-circle-filled" : "play-circle-filled"}
                {...props}
                onPress={toggle}
                size={90}
              />
            )}
          />
          <PlayerIconControl
            icon={(props) => (
              <MaterialIcons name="skip-next" {...props} size={50} />
            )}
          />

          <PlayerIconControl
            icon={(props) => (
              <MaterialIcons name="shuffle" {...props} size={30} />
            )}
          />
        </View>

        <BottomButtonIcons color="white" fontSize={20} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: "black",
    padding: 24,
  },
  slider: {
    marginTop: -12,
  },
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 16,
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "white",
  },
  text: {
    color: "rgba(255, 255, 255, 0.72)",
    fontSize: 12,
    textAlign: "center",
  },
  flexView: {
    flex: 1,
  },
  trackInfoContainer: {
    flex: 1,
    marginBottom: 10,
  },

  trackTitle: {
    textAlign: "center",
    color: "grey",
    fontSize: 24,
    marginBottom: 5,
  },

  artist: {
    color: "hotpink",
    textAlign: "center",
    fontSize: 18,
  },

  flexView: {
    flex: 1,
  },
  iconControlContainer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
