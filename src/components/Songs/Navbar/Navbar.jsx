import React, { useContext, useState } from "react";

import { FilterContext } from "../../../FilterContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./NavbarModule.css";

const Navbar = () => {
  const [tab, setTab] = useState("forYou");
  const { songs, setSongs, allSongs } = useContext(FilterContext);

  function handleSearch(e) {
    const input = e.target.value.toLowerCase();
    console.log(input, "input");

    let filtered = [];
    if (input === "") {
      filtered = allSongs.slice(0, 9);
    }

    filtered = allSongs
      .slice(0, 9)
      .filter(
        (s) =>
          s.name.toLowerCase().includes(input) ||
          s.artist.toLowerCase().includes(input)
      );
    setSongs(filtered);

    // setSongs(
    //   songs
    //     .slice(0, 9)
    //     .filter(
    //       (song) =>
    //         song.name
    //           .toLowerCase()
    //           .includes(e.target.value.toLowerCase()) ||
    //         song.artist
    //           .toLowerCase()
    //           .includes(e.target.value.toLowerCase())
    //     )
    // );
  }

  return (
    <div className="menu-search-navbar">
      <div className="menu-navbar">
        <h2
          className={
            "for-you-menu menu-items " +
            (tab === "forYou" ? "selected-tab" : "")
          }
          onClick={() => {
            setTab("forYou");
            setSongs(allSongs);
            // filterDispatch({ type: "FOR_YOU" });
          }}
        >
          For You
        </h2>
        <h2
          className={
            "top-tracks-menu menu-items " +
            (tab === "topTracks" ? "selected-tab" : "")
          }
          onClick={() => {
            setTab("topTracks");
            setSongs(
              allSongs.slice(0, 9).filter((song) => song.top_track === true)
            );
            // filterDispatch({ type: "TOP_TRACKS" });
          }}
        >
          Top Tracks
        </h2>
      </div>

      <div className="search-bar-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search Songs, Artists"
          onChange={handleSearch}
        />
        <div className="search-icon-container">
          <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
