import React from "react";

import "./LogoModule.css";
import pfp from "../../assets/r-logo.png";
import spotify from "../../assets/Spotify-White-Logo.wine-cropped.svg";

const Logo = () => {
  return (
    <div className="spotify-logo-wrapper">
      <div className="spotify-logo">
        <img className="logo-img" src={spotify} alt="Spotify Logo" />
      </div>

      <div className="profile-logo">
        <img className="profile-img" src={pfp} alt="pfp" />
      </div>
    </div>
  );
};

export default Logo;
