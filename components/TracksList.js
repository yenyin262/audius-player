import React from "react";
import { ScrollView } from "react-native";
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

const Item = ({ id, title, onPress, artwork, name }) => {
  function onTrackClick() {
    onPress(id);
  }

  return (
    <TouchableOpacity style={styles.item} onPress={onTrackClick}>
      <Image source={{ uri: artwork }} style={{ width: 80, height: 80 }} />
      <View style={styles.contentContainer}>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.name} ellipsizeMode="tail" numberOfLines={1}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const TracksList = ({ tracks, onPress }) => {
  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      title={item.title}
      onPress={onPress}
      artwork={item.artwork["480x480"]}
      name={item.user.name}
    />
  );

  return (
    <ScrollView style={styles.container}>
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: "black",
    width: "100%",
  },

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

export default TracksList;
