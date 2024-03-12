import React, { useState, useContext, useRef, useEffect } from "react";

import SongCard from "../../components/SongCard/SongCard";
import Songs from "../../components/Songs/Songs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import spotify from "../../assets/Spotify-White-Logo.wine-cropped.svg";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FilterContext } from "../../FilterContext";
import Navbar from "../../components/Songs/Navbar/Navbar";
import Player from "../../components/Player/Player";
import "./MobileMenuModule.css";
import ScaleLoader from "react-spinners/ScaleLoader";

const MobileMenu = () => {
  const [menu, setMenu] = useState(false);
  const {
    songs,
    currentSong,
    setSongs,
    setCurrentSong,
    allSongs,
    isPlaying,
    setIsPlaying,
  } = useContext(FilterContext);
  // const currSong = filterState.currentSong;

  const [loading, setLoading] = useState(false);
  const color = `rgba(255, 255, 255, 0.5)`;

  useEffect(() => {
    const displayMenu = document.querySelector(".mobile-songs-list-wrapper");

    if (menu) {
      displayMenu.className = displayMenu.className.replace("hide", "display");
    } else {
      displayMenu.className = displayMenu.className.replace("display", "hide");
    }
  }, [menu]);

  let { accent } = "";
  if (allSongs[currentSong - 1] === undefined) {
    accent = "";
  } else {
    accent = allSongs[currentSong - 1].accent;
  }

  return (
    <>
      <div className="mobile-menu-wrapper">
        {/* Navbar */}
        <div className="mobile-navbar-container">
          <img src={spotify} alt="Spotify" className="mobile-logo" />

          <div className="menu-icon-container" onClick={() => setMenu(!menu)}>
            {menu ? (
              <FontAwesomeIcon icon={faXmark} className="menu-icon" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="menu-icon" />
            )}
          </div>
        </div>

        {/* Body  (Player and List)*/}
        <div className="body">
          {/* List */}

          <div
            className="nav-player-container"
            style={{
              background: `linear-gradient(to left top, #000, ${accent})`,
            }}
          >
            <div className="mobile-songs-list-wrapper hide">
              <Navbar />
              <div className="songs-list">
                {songs.length === 0 ? (
                  <div className="no-items-found">No Songs, Artists Found.</div>
                ) : (
                  songs.slice(0, 9).map((song) => {
                    return <SongCard {...song} />;
                  })
                )}
              </div>
            </div>
          </div>

          {/* Player*/}
          <div className="play">
            {allSongs[currentSong] === undefined ? (
              <ScaleLoader
                color={color}
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <Player />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
