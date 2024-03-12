import React, { useContext, useEffect, useRef, useState } from "react";
import { FilterContext } from "../../FilterContext";
import "./SongCardModule.css";

const SongCard = (song) => {
  const { id, name, artist, cover, url } = song;
  const { currentSong, setCurrentSong, setIsPlaying } =
    useContext(FilterContext);

  //URL was corrupt, so rectified it.
  const updatedURL = url.replaceAll(" ", "");
  // console.log(updatedURL);

  const imgURL = `https://cms.samespace.com/assets/${cover}`;
  const [mins, setMins] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const audio = useRef();

  const getTime = () => {
    const minutes = parseInt(audio.current.duration / 60);
    const secs = parseInt(audio.current.duration % 60);

    setMins(minutes != "NaN" ? minutes : 0);
    setSeconds(secs != "NaN" ? secs : 0);
    const d = audio.current.duration;
    console.log("time", d, "mins", minutes, "secs", secs);
  };

  return (
    <div
      id={currentSong === id ? "selected" : ""}
      className="song-card-wrapper"
      key={id}
      onClick={() => {
        setCurrentSong(id);
        setIsPlaying(true);
      }}
    >
      <div className="song-cover-details">
        <div className="song-cover-container">
          <img className="song-cover" src={imgURL} alt={name} />
        </div>

        <div className="song-details">
          <div className="song-name-container">
            <p className="song-name">{name}</p>
          </div>

          <div className="artist-name-container">
            <p className="artist-name">{artist}</p>
          </div>
        </div>
      </div>

      <div className="song-duration">
        <p className="duration">
          {mins}:{seconds}
        </p>
      </div>

      <audio src={updatedURL} ref={audio} onLoadedMetadata={getTime}></audio>
    </div>
  );
};

export default SongCard;
