import React from "react";
import styled from "styled-components";
import { SearchContainer } from "./Search.style";

const Search = ({ searchPeople }) => {
  return (
    <>
      <SearchContainer>
        <input
          type="text"
          placeholder="Digite o nome de um personagem"
          onChange={(e) => searchPeople(e.target.value)}
        />
      </SearchContainer>
    </>
  );
};

export default Search;
