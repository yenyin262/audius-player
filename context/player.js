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
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      staysActiveInBackground: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
    });
  }, []);

  React.useEffect(() => {
    // Unload sound when track is changed
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  async function play(track) {
    if (isPlaying) pause();

    const nextTrack = track || currentTrack;

    if (lastTrackId.current === null || lastTrackId.current !== nextTrack.id) {
      setCurrentTrack(nextTrack);
      setIsPlaying(true);
      const { sound } = await Audio.Sound.createAsync(
        await getStreamTrackSource(track.id),
        {
          shouldPlay: true,
        }
      );
      setSound(sound);
    } else {
      sound.playAsync();
    }
  }

  function pause() {
    setIsPlaying(false);
    sound.pauseAsync();
  }

  function _play() {
    setIsPlaying(true);
    sound.playAsync();
  }

  function toggle() {
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
