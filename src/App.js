import React, { useContext, useEffect, useState } from "react";
import { Welcome } from "./App.style";
import { NavMenu } from "./App.style";
import Logo from "./assets/star-wars-logo.png";
import List from "./components/List";
import Search from "./components/Search";
import { PeopleContext } from "./contexts/PeopleContext";
import { PlanetContext } from "./contexts/PlanetContext"; //contexto para planetas

const App = () => {
  const { peoples, getPeoples, setDetailPeople } = useContext(PeopleContext);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    if (!peoples) getPeoples();
  });

  const searchPeople = (term) => {
    const result = peoples.filter((item) =>
      item.name.toLowerCase().includes(term.toLowerCase())
    );

    setSearch(result);
  };


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
        <Search searchPeople={searchPeople} />
        {peoples ? (
          <List
            peoples={search ? search : peoples}
            setDetailPeople={setDetailPeople}
          />
        ) : null}
    </>
  );
};

export default App;
