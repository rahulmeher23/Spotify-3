import React, { useContext } from "react";

import { FilterContext } from "../../../FilterContext";
import SongCard from "../../SongCard/SongCard";

import "./ListModule.css";

const List = () => {
  const { songs } = useContext(FilterContext);
  return (
    <>
      <div className="songs-list">
        <div className="for-you-list display">
          {songs.length === 0 ? (
            <div className="no-items-found">No Songs, Artists Found.</div>
          ) : (
            songs.slice(0, 9).map((song) => {
              return <SongCard {...song} />;
            })
          )}
        </div>
      </div>
    </>
  );
};

export default List;
