import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Planet from "./Planet";
import AppRouter from "./routes";
import { PeopleContextProvider } from "./contexts/PeopleContext";
import { PlanetContextProvider } from "./contexts/PlanetContext";

ReactDOM.render(
  <React.StrictMode>
    <PeopleContextProvider>
      <PlanetContextProvider>
        <AppRouter>
          <App />
          <Planet />
        </AppRouter>
      </PlanetContextProvider>
    </PeopleContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
