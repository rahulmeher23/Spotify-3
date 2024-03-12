import React, { useContext, useState, useEffect } from "react";

import "./SongsModule.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import { FilterContext } from "../../FilterContext";
import Navbar from "./Navbar/Navbar";
import List from "./List/List";

const Songs = () => {
  const [loading, setLoading] = useState(false);
  const { songs, currentSongs } = useContext(FilterContext);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const color = `rgba(255, 255, 255, 0.5)`;

  return (
    <div className="songs-list-wrapper">
      <Navbar />

      {loading ? (
        <div className="loader">
          <ScaleLoader
            color={color}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <List />
      )}
    </div>
  );
};

export default Songs;
