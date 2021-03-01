import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
} from "react-native";

const Item = ({ id, title, onPress }) => {
  function onTrackClick() {
    onPress(id);
  }

  return (
    <TouchableOpacity style={styles.item} onPress={onTrackClick}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const TracksList = ({ tracks, onPress }) => {
  const renderItem = ({ item }) => (
    <Item id={item.id} title={item.title} onPress={onPress} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={tracks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default TracksList;
