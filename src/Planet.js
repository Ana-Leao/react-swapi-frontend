import React, { useContext, useEffect, useState } from "react";
import { Welcome } from "./App.style";
import { NavMenu } from "./App.style";
import Logo from "./assets/star-wars-logo.png";
import { PlanetContext } from "./contexts/PlanetContext";

const App = () => {
  const { planets, getPlanets } = useContext(PlanetContext);

  useEffect(() => {
    if (!planets) getPlanets();
  });

  return (
    <>
      <Welcome>
        <img className="logoStarWars" src={Logo} alt="logo" />
        <header>Not so long time ago, in a galaxy not so far away...</header>
      </Welcome>
      <NavMenu>
        <a>Personagens</a>
        <a>Planetas</a>
      </NavMenu>
    </>
  );
};

export default App;
