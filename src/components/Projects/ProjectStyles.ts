import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 100vw;
`;

export const CardContainer = styled.div`
  height: 200vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 50% 50%;
  column-gap: 5%;
  padding-left: 8%;

  @media screen and (max-width: 500px) {
    column-gap: 10%;
    padding: 0;
  }
`;

export const Card = styled.div`
  height: 90%;
  width: 50%;
  background-color: #000099;
  margin-bottom: 6%;
  box-shadow: 3px 3px 5px 1px white;
  border-radius: 2%;

  @media screen and (max-width: 500px) {
    width: 180px;
    margin: 10%;
    box-shadow: none;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  height: 30%;
  width: 100%;
  border-top-left-radius: 2%;
  border-top-right-radius: 2%;
`;

export const Description = styled.div`
  object-fit: contain;
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DescriptionText = styled.p`
  object-fit: contain;
  flex: 2;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const StackHeader = styled.h3`
  font-size: 1.7em;
  text-decoration: underline;
  text-align: center;
  font-weight: bold;
`;

export const Stack = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  flex: 1;
`;

export const StackChip = styled.div`
  height: 4vh;
  width: auto;
  padding: 1% 4%;
  border-radius: 25px;
  text-align: center;
  line-height: 4vh;
  margin: 1%;
  font-family: "Courier New", Courier, monospace;
  background-color: #8080ff;
`;
