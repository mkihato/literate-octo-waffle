import React from "react";
import "../artists/artist.scss";
import Recommended from "../recommended/Recommended";

const Artist = () => {
  return (
    <div className="artists">
      <div className="cards"></div>
      <Recommended />
    </div>
  );
};

export default Artist;
