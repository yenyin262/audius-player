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
  const [isPlaying, setIsPlaying] = React.useState(false);
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
      setCurrentTrack(track);
      const { sound } = await Audio.Sound.createAsync(
        await getStreamTrackSource(track.id)
      );
      setSound(sound);

      lastTrackId.current = track.id;
      _play();
    } else if (sound && (await sound.getStatusAsync()).isLoaded) {
      console.log("its sound");
      _play();
    } else {
      alert("can't play");
    }
  }

  async function pause() {
    if (sound && isPlaying) {
      const { isPlaying } = await sound.pauseAsync();
      setIsPlaying(isPlaying);
    }
  }

  async function _play() {
    if (sound && !isPlaying) {
      const { isPlaying } = await sound.playAsync();
      setIsPlaying(isPlaying);
    }
  }

  async function toggle() {
    if (isPlaying) {
      pause();
    } else {
      _play();
    }
  }

  return (
    <PlayerProvider
      value={{ track: currentTrack, isPlaying, toggle, play, pause }}
    >
      {children}
    </PlayerProvider>
  );
};

export { usePlayer, PlayerContextProvider };
