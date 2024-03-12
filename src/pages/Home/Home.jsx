import React, { useState, useEffect, useContext, useRef } from "react";

import "./HomeModule.css";
import Logo from "../../components/Logo/Logo";
import Player from "../../components/Player/Player";
import { FilterContext } from "../../FilterContext";
import Songs from "../../components/Songs/Songs";
import ScaleLoader from "react-spinners/ScaleLoader";
import MobileMenu from "../MobileMenu/MobileMenu";

const Home = () => {
  const baseURL = "https://cms.samespace.com/items/songs";
  const { allSongs, currentSong, setIsPlaying } = useContext(FilterContext);

  let { accent } = "";
  const [loading, setLoading] = useState(false);

  const color = `rgba(255, 255, 255, 0.5)`;

  if (allSongs[currentSong] === undefined) {
    accent = "";
  } else {
    accent = allSongs[currentSong - 1].accent;
  }

  return (
    <div
      className="app-wrapper"
      style={{
        background: `linear-gradient(to left top, #000, ${accent})`,
      }}
    >
      <div className="container-2">
        <div className="navbar-mobile">
          <MobileMenu />
        </div>

        <div className="navbar mobile-hide">
          <div className="navbar-pc ">
            <Logo />
          </div>
        </div>

        <div className="song-list mobile-hide">
          <Songs />
        </div>

        <div className="play mobile-hide">
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
  );
};

export default Home;
