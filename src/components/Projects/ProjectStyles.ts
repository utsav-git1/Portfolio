import styled from "styled-components";
import { darkTheme } from "../../Utility/GlobalStyles/theme";

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
  background-image: ${(props) =>
    props.theme == darkTheme
      ? `linear-gradient(to left, rgba(0,0,0,0), rgba(0,255,255,1))`
      : `linear-gradient(to left, rgba(0,0,0,0), rgba(0,50,0,1))`};
  margin-bottom: 6%;
  box-shadow: 3px 3px 5px 1px white;
  border-radius: 2%;
  color: #ffffff;

  @media screen and (max-width: 500px) {
    width: 180px;
    margin: 10%;
    box-shadow: none;
  }
`;

export const Image = styled.img`
  height: 30%;
  width: 100%;
  border-radius: 3%;

  @media screen and (max-width: 800px) {
    object-fit: contain;
    height: auto;
  }
`;

export const Description = styled.div`
  object-fit: contain;
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1%;
  padding: 0 2%;
`;

export const DescriptionText = styled.p`
  object-fit: contain;
  flex: 2;
  font-family: Arial, Helvetica, sans-serif;
`;

export const LinkWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-around;
`;
export const ExternalLinks = styled.a`
  color: #ffffff;
  font-size: 1.2rem;
  padding: 1rem 1.5rem;
  background: ${(props) => (props.theme == darkTheme ? `#000000` : `#009933`)};
  border-radius: 15px;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) =>
      props.theme == darkTheme ? `#004d99` : `#00ff55`};
  }

  @media screen and (max-width: 800px) {
    width: 30px;
  }
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
  padding: 2%;
`;

export const StackChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  width: auto;
  padding: 1% 4%;
  border-radius: 25px;
  margin: 1%;
  font-family: "Courier New", Courier, monospace;
  background-color: ${(props) =>
    props.theme == darkTheme ? `#8080ff` : `#00b300`};
`;
