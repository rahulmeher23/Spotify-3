import React, { useContext, useRef, useState } from "react";

// import { FilterContext } from "../../../FilterContext";
import { FilterContext } from "../../../FilterContext";
import "./PlayerCoverModule.css";

const PlayerCover = ({ percentage, audioElem, duration }) => {
  const { allSongs, currentSong, isPlaying, setIsPlaying } =
    useContext(FilterContext);
  const { name, artist, cover, url } = allSongs[currentSong - 1];
  const imgURL = `https://cms.samespace.com/assets/${cover}`;

  function updateTime(e) {
    audioElem.current.currentTime = (duration / 100) * e.target.value;
    isPlaying ? "" : setIsPlaying(!isPlaying);
  }

  return (
    <>
      <div className="center">
        <div className="player-cover-container">
          <img className="player-cover" src={imgURL} alt={name} />
        </div>

        <div className="seeker-container">
          <div
            className="progress-bar"
            style={{ width: `${percentage}%` }}
          ></div>
          <input
            type="range"
            step="0.01"
            className="range"
            value={0}
            onChange={updateTime}
          />
        </div>
      </div>
    </>
  );
};

export default PlayerCover;
