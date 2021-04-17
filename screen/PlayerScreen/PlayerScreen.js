import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import { MaterialIcons, Ionicons, Entypo } from "@expo/vector-icons";
import { usePlayer } from "../../context/player";
import PlayerIconControl from "../../components/PlayerIconControl/PlayerIconControl";

const { width } = Dimensions.get("window");
const imageSize = width - 96;

export default function PlayerScreen({}) {
  const { track, isPlaying, play, pause, toggle } = usePlayer();
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
