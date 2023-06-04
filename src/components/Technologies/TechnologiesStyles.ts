import styled from "styled-components";
import { darkTheme } from "../../Utility/GlobalStyles/theme";

export const Container = styled.div`
  height: auto;
  width: 100vw;
  margin-bottom: 20%;
`;

export const CardWrapper = styled.div`
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: space-between;
`;

export const CardsContainer = styled.div`
  position: relative;
  height: auto;
  width: 100vw;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    height: 30vh;
  }
`;

export const TitleCard = styled.div`
  position: absolute;
  height: 25vh;
  width: 25vw;
  padding: 2%;
  border-radius: 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme == darkTheme ? `#000099` : `#009933`};
  color : #ffffff;
  box-shadow: 3px 3px 5px 1px white;
  font-family: "Courier New", Courier, monospace;
  z-index: 5;
  transition: ease 2s;
  backface-visibility: hidden;

  &:hover {
    transform: rotateY(-180deg);
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    font-size: 1.5em;
  }
`;

export const DetailsCard = styled.div`
  position: absolute;
  height: 25vh;
  width: 25vw;
  padding: 2%;
  border-radius: 10px;
  text-align: center;
  background-color: ${props => props.theme == darkTheme ? `#000099` : `#009933`};
  color : #ffffff;
  box-shadow: 3px 3px 5px 1px white;
  font-family: "Courier New", Courier, monospace;
  z-index: 2;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 40vw;
    font-size: 1.5em;
  }
`;

export const Items = styled.p`
  height:1%;
  width: auto;
`
