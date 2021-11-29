import styled from "styled-components";

export const Welcome = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  color: #ffc107;
`;

export const Container = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  flex: 1;
  display: flex;
  position: relative;
  max-width: 900px;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
`;

export const NavMenu = styled.div`
  margin-top: 4rem;
  text-align: center;
  & a {
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 700; 
    color: #fff;
    margin: 0px 2rem;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      color:#ffc107;
  }
`;
