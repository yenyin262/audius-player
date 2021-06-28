//import liraries
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import PlaylistView from "../../components/PlaylistView/PlaylistView";
import { Mood_Music } from "../../services/audiusMock";

// create a component
const FeaturedPlaylists = () => {
  const [playlistByMood, setPlaylistByMood] = useState([]);

  useEffect(() => {
    async function getPlaylistByMood() {
      const moodPlaylistMusic = Mood_Music();
      setPlaylistByMood(moodPlaylistMusic.data);
    }
    getPlaylistByMood();
  }, []);

  return (
    <View>
      {playlistByMood.length > 0 && <PlaylistView tracks={playlistByMood} />}
    </View>
  );
};

//make this component available to the app
export default FeaturedPlaylists;
