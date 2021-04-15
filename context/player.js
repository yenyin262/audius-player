import React from "react";
import { Audio } from "expo-av";

import { createStrictContext } from "./createStrictContext";
import {
  getStreamTrackSource,
  // trendingTracks,
} from "../services/audius";

const [PlayerProvider, usePlayer] = createStrictContext();

const PlayerContextProvider = ({ children }) => {
  /**
   * https://docs.expo.io/versions/latest/sdk/audio/#playing-sounds
   * @type {[Audio.Sound, Function]} SoundState
   */
  const [sound, setSound] = React.useState();
  /**
   * @type {[string, Function]} TrackState
   */
  const [currentTrack, setCurrentTrack] = React.useState();
  const lastTrackId = React.useRef(null);

  React.useEffect(() => {
    // Unload sound when track is changed
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function play(track) {
    if (sound) pause();

    if (
      track &&
      (lastTrackId.current === null || lastTrackId.current !== track.id)
    ) {
      const { sound } = await Audio.Sound.createAsync(
        await getStreamTrackSource(track.id)
      );
      setCurrentTrack(track);
      setSound(sound);

      lastTrackId.current = track.id;
      await sound.playAsync();
    } else if (sound && (await sound.getStatusAsync()).isLoaded) {
      console.log("its sound");
      await sound.playAsync();
    } else {
      alert("can't play");
    }
  }

  async function pause() {
    if (sound && (await sound.getStatusAsync()).isPlaying) {
      sound.pauseAsync();
    }
  }

  return (
    <PlayerProvider value={{ track: currentTrack, play, pause }}>
      {children}
    </PlayerProvider>
  );
};

export { usePlayer, PlayerContextProvider };
