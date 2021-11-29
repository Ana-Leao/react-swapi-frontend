import React, { createContext, useState } from "react";
import api from "../services/api";

export const PlanetContext = createContext({});

export const PlanetContextProvider = ({ children }) => {
  const [planets, setPlanets] = useState(null);
  const [detailPlanet, setDetailPlanet] = useState();

  const getPlanets = async () => {
    try {
      const swapiResult = await api.get("/planets");
      const { results } = swapiResult.data;
      setPlanets(results);
    } catch (error) {
      console.log("algo deu errado");
    }
  };

  const planetProviderValue = {
    planets,
    getPlanets,
    detailPlanet,
    setDetailPlanet,
  };

  return (
    <PlanetContext.Provider value={planetProviderValue}>
      {children}
    </PlanetContext.Provider>
  );
};
