import styled from "styled-components";

export const Container = styled.div`
  background-color: black;
  color: white;
  height: 40vh;
  width: 100vw;
`;

export const Heading = styled.h1`
  color: white;
  font-size: 3rem;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  padding: 1% 2%;
  
  @media screen and (max-width: 500px){
    font-size: 1.5rem;
  }
`;

export const HeaderText = styled.p`
    color: white;
    font-size: 1.5rem;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 400;
    padding: 0 2%;

    @media screen and (max-width: 500px){
    font-size: 1.2rem;
  }
`
