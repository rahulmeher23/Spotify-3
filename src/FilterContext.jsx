import React, { useState, useEffect, useReducer, createContext } from "react";
import axios from "axios";

export const FilterContext = createContext();

const baseURL = "https://cms.samespace.com/items/songs";

const FilterProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState();
  const [allSongs, setAllSongs] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      setSongs(response.data.data);
      setCurrentSong(1);
      setAllSongs(response.data.data);
    });
  }, []);

  return (
    <FilterContext.Provider
      value={{
        songs,
        currentSong,
        setSongs,
        setCurrentSong,
        allSongs,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
