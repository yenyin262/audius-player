import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
} from "react-native";
import ItemDetails from "../ItemDetails/ItemDetails";
import { useNavigation } from "@react-navigation/native";
import { usePlayer } from "../../context/player";
import BottomButtonIcons from "../BottomButtonIcons/BottomButtonIcons";

const Item = ({ id, title, onPress, artwork, name, playCount, duration }) => {
  const navigation = useNavigation();
  // const [heartCount, setHeartCount] = useState(0);
  // const [repeatCount, setRepeatCount] = useState(0);

  // const onRepeatPress = () => {
  //   setRepeatCount(repeatCount + 1);
  // };

  // const onHeartPress = () => {
  //   setHeartCount(heartCount + 1);
  // };

  // const onValuePress = () => {
  //   console.log("new component to show how many likes");
  // };
  function onTrackClick() {
    onPress(id);
  }
  const { track, play, pause } = usePlayer();

  return (
    <View style={{ marginVertical: 15 }}>
      {/* <TouchableOpacity style={styles.item} onPress={onTrackClick}> */}
      <TouchableOpacity style={styles.item} onPress={onPress}>
        <Image source={{ uri: artwork }} style={{ width: 80, height: 80 }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
            {name}
          </Text>
          <View>
            <ItemDetails playCount={playCount} duration={duration} />
          </View>
        </View>
      </TouchableOpacity>
      <BottomButtonIcons color="white" fontSize={20} />
    </View>
  );
};
export default Item;
const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  item: {
    marginVertical: 5,
    paddingHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "white",
    textAlign: "left",
    textTransform: "capitalize",
    marginBottom: 5,
  },

  name: {
    fontSize: 18,
    fontWeight: "400",
    color: "#999A9E",
    textTransform: "capitalize",
  },
});
