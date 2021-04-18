import React, { useEffect, useMemo } from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { usePlayer } from "../../context/player";
import PlayerIconControl from "../../components/PlayerIconControl/PlayerIconControl";

const { width } = Dimensions.get("window");
const imageSize = width - 96;

function getInitialPosition(duration) {
  if (duration > 3600) return "0:00:00";
  else if (duration > 600) return "00:00";
  return "0:00";
}

export default function PlayerScreen({}) {
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

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        padding: 24,
      }}
    >
      <View
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
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1, marginBottom: 10 }}>
          <Text
            style={{
              textAlign: "center",
              color: "grey",
              fontSize: 24,
              marginBottom: 5,
            }}
          >
            {track.title}
          </Text>
          <Text
            style={{
              color: "hotpink",
              textAlign: "center",
              fontSize: 18,
            }}
          >
            {track.user.name}
          </Text>
        </View>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>{position}</Text>
            <View style={{ flex: 1 }} />
            <Text style={[styles.text, { width: 40 }]}>{remaining}</Text>
          </View>
        </View>
        <View
          style={{
            flex: 2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
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

        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ButtonIcon
              onIconPress={() => {}}
              value={0}
              onValuePress={() => {}}
              icon={(props) => <Ionicons name="repeat-sharp" {...props} />}
            />
            <ButtonIcon
              onIconPress={() => {}}
              value={100}
              onValuePress={() => {}}
              icon={(props) => <Ionicons name="heart" {...props} />}
            />
            <ButtonIcon
              icon={(props) => <Entypo name="forward" {...props} />}
            />
          </View>
          <View>
            <Ionicons name="ellipsis-vertical" size={30} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
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
});
