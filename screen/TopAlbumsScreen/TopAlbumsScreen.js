//import liraries
import React, { Component, useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import TopAlbumsView from "../../components/TopAlbumsView/TopAlbumsView";
import { topAlbumsMock } from "../../services/audiusMock";

// create a component
const TopAlbumsScreen = () => {
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    async function getTopAlbums() {
      const topAlbums = topAlbumsMock();
      console.log(topAlbums.data);
      setTopAlbums(topAlbums.data);
    }

    getTopAlbums();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        {topAlbums.length > 0 && <TopAlbumsView albums={topAlbums} />}
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default TopAlbumsScreen;
