import React, { useContext, useEffect, useRef, useState } from "react";

import "./PlayerModule.css";
import { FilterContext } from "../../FilterContext";
import PlayerControls from "./PlayerControls/PlayerControls";
import PlayerCover from "./PlayerCover/PlayerCover";

const Player = () => {
  const { songs, allSongs, currentSong, isPlaying, setIsPlaying } =
    useContext(FilterContext);

  const { name, artist, cover, url } = allSongs[currentSong - 1];
  const audioElem = useRef();
  const [percentage, setPercentage] = useState(0);
  const [duration, setDuration] = useState(0);

  // Some URLs are corrupted
  const updatedURL = url.replaceAll(" ", "");

  useEffect(() => {
    if (isPlaying) {
      audioElem.current.play();
    } else {
      audioElem.current.pause();
    }
  }, [isPlaying, currentSong]);

  function getCurrentTime() {
    const currentTime = audioElem.current.currentTime;
    const dur = audioElem.current.duration;
    const percent = (currentTime / dur) * 100;
    setPercentage(percent);
    setDuration(dur);
    // console.log(currentTime, duration, percentage);
  }

  function songEnded() {
    // filterDispatch({ type: "TOGGLE_PLAYING" });
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="player-wrapper">
      <audio
        src={updatedURL}
        ref={audioElem}
        onTimeUpdate={getCurrentTime}
        onEnded={songEnded}
      />
      <div className="header">
        <h1 className="song-title">{name}</h1>
        <p className="artist-title">{artist}</p>
      </div>

      <PlayerCover
        percentage={percentage}
        audioElem={audioElem}
        duration={duration}
      />

      <PlayerControls />
    </div>
  );
};

export default Player;
