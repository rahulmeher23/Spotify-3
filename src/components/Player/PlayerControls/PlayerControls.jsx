import React, { useState, useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { faCirclePause } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./PlayerControlsModule.css";
import { FilterContext } from "../../../FilterContext";

const PlayerControls = () => {
  const {
    songs,
    currentSong,
    setSongs,
    setCurrentSong,
    allSongs,
    isPlaying,
    setIsPlaying,
  } = useContext(FilterContext);

  const length = allSongs.length - 1;

  function prevSong() {
    if (currentSong > 1) {
      setCurrentSong(currentSong - 1);
    }
  }

  function nextSong() {
    if (currentSong < length) {
      setCurrentSong(currentSong + 1);
    }
  }

  return (
    <>
      <div className="controls">
        <div className="left-controls">
          <FontAwesomeIcon className="circle" icon={faCircle} />
          <FontAwesomeIcon className="dots" icon={faEllipsis} />
        </div>
        <div className="center-controls">
          <div className="backward-icon-container">
            <FontAwesomeIcon
              className="backward-icon"
              icon={faBackward}
              onClick={() => {
                prevSong();
                setIsPlaying(true);
              }}
            />
          </div>

          {isPlaying ? (
            <FontAwesomeIcon
              className="play-icon"
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
              icon={faCirclePause}
            />
          ) : (
            <FontAwesomeIcon
              className="play-icon"
              onClick={() => {
                setIsPlaying(!isPlaying);
              }}
              icon={faCirclePlay}
            />
          )}
          <div className="forward-icon-container">
            <FontAwesomeIcon
              className="forward-icon"
              icon={faForward}
              onClick={() => {
                nextSong();
                setIsPlaying(true);
              }}
            />
          </div>
        </div>
        <div className="right-controls">
          <FontAwesomeIcon className="circle" icon={faCircle} />
          <FontAwesomeIcon className="volume-icon" icon={faVolumeHigh} />
        </div>
      </div>
    </>
  );
};

export default PlayerControls;
