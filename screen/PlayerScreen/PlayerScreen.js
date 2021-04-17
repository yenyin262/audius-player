import React, { useEffect } from "react";
import { View, Text, Image } from "react-native";
import ButtonIcon from "../../components/ButtonIcon/ButtonIcon";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { usePlayer } from "../../context/player";
import PlayerIconControl from "../../components/PlayerIconControl/PlayerIconControl";

export default function PlayerScreen({}) {
  const { track, isPlaying, play, pause, toggle } = usePlayer();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        marginTop: 100,
        flexDirection: "column",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "hotpink", fontSize: 30 }}>NOW PLAYING</Text>
      <Image
        source={{ uri: track.artwork["480x480"] }}
        style={{
          width: 350,
          height: 350,
          marginTop: 20,
        }}
      />

      <Text
        style={{
          color: "grey",
          textAlign: "center",
          fontSize: 24,
          marginTop: 40,
        }}
      >
        {track.title}
      </Text>
      <Text style={{ color: "hotpink", fontSize: 24, marginTop: 10 }}>
        {track.name}
      </Text>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 50,
        }}
      >
        <PlayerIconControl
          icon={(props) => <FontAwesome name="repeat" {...props} />}
        />

        <PlayerIconControl
          icon={(props) => <Ionicons name="play-back-sharp" {...props} />}
        />
        <PlayerIconControl
          icon={(props) => (
            <Ionicons
              name={isPlaying ? "md-pause-sharp" : "play-circle-sharp"}
              {...props}
              onPress={toggle}
              size={45}
            />
          )}
        />
        <PlayerIconControl
          icon={(props) => <Ionicons name="play-forward-sharp" {...props} />}
        />

        <PlayerIconControl
          icon={(props) => <Ionicons name="md-shuffle" {...props} />}
        />
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginHorizontal: 10,
          marginVertical: 10,
        }}
      >
        <View
          style={{
            flex: 6,
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
          <ButtonIcon icon={(props) => <Entypo name="forward" {...props} />} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <ButtonIcon
            icon={(props) => <Ionicons name="ellipsis-vertical" {...props} />}
          />
        </View>
      </View>
    </View>
  );
}
