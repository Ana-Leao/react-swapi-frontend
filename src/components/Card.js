import React from "react";
import styled from "styled-components";
import { Container } from "../App.style";
import {  Content } from "./Card.style";

const Card = ({ people }) => {
  return (
    <Container>
      <Content>
        <h3>Detalhes do Personagem</h3>
        <br />
        <p>
          <b>
            Nome: <span>{people.name}</span>
          </b>
        </p>
        <p>
          <b>
            Altura: <span>{people.height}</span>
          </b>
        </p>
        <p>
          <b>
            Peso: <span>{people.mass}</span>
          </b>
        </p>
        <p>
          <b>
            Nascimento: <span>{people.birth_year}</span>
          </b>
        </p>
        <p>
          <b>
            Cabelo: <span>{people.hair_color}</span>
          </b>
        </p>
        <p>
          <b>
            Gênero: <span>{people.gender}</span>
          </b>
        </p>
      </Content>
    </Container>
  );
};

export default Card;