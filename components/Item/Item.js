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
import { ScrollView } from "react-native-gesture-handler";

const Item = ({ id, title, onPress, artwork, name, playCount, duration }) => {
  const [heartCount, setHeartCount] = useState(0);
  const [repeatCount, setRepeatCount] = useState(0);

  const onRepeatPress = () => {
    setRepeatCount(repeatCount + 1);
  };

  const onHeartPress = () => {
    setHeartCount(heartCount + 1);
  };

  const onValuePress = () => {
    console.log("new component to show how many likes");
  };
  function onTrackClick() {
    onPress(id);
  }

  return (
    <>
      <TouchableOpacity style={styles.item} onPress={onTrackClick}>
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
            onIconPress={onRepeatPress}
            value={repeatCount}
            onValuePress={onValuePress}
            icon={(props) => <Ionicons name="repeat-sharp" {...props} />}
          />
          <ButtonIcon
            onIconPress={onHeartPress}
            value={heartCount}
            onValuePress={onValuePress}
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
    </>
  );
};
export default Item;
const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     marginTop: StatusBar.currentHeight || 0,
  //     backgroundColor: "black",
  //     width: "100%",
  //   },

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