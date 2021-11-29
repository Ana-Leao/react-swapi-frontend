import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "../App.style";
import { Items } from "./List.style"
import styled from "styled-components";

const List = ({ peoples, setDetailPeople }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Items>
        {peoples.map((item) => (
          <li key={item.url}>
            <p>{item.name}</p>
            <button
              onClick={() => {
                setDetailPeople(item);
                navigate("/detalhes");
              }}
            >
              Ver detalhes
            </button>
          </li>
        ))}
      </Items>
    </Container>
  );
};

export default List;
