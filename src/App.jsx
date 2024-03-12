import { useContext, useEffect, useState } from "react";
import "./App.css";

import { FilterContext } from "./FilterContext";
import Logo from "./components/Logo/Logo";
import Songs from "./components/Songs/Songs";
import Home from "./pages/Home/Home";
import Player from "./components/Player/Player";

function App() {
  useEffect(() => {
    document.title = "Spotify | Samespace";
  });
  return (
    <>
      <Home />
    </>
  );
}

export default App;
