import styled from "styled-components";
import { Arrow } from "../Testimonials/TestimonialStyles";
import { Slide } from "../Testimonials/TestimonialStyles";
import { darkTheme } from "../../Utility/GlobalStyles/theme";

export const Container = styled.div`
  height: auto;
  width: 90vw;
  position: relative;
  margin-bottom: 10%;
`;

export const CardContainer = styled.div`
  height: 60vh;
  width: 55%;
  margin: auto;
  display: flex;
  overflow-x: hidden;

  @media screen and (max-width: 800px) {
    width: 400px;
  }
`;

export const Card = styled(Slide)`
  height: 90%;
  width: 95%;
  border-radius: 0%;
  background: ${(props) =>
    props.theme == darkTheme
      ? `linear-gradient(to left, rgba(0,0,0,0), rgba(0,255,255,1))`
      : `linear-gradient(to left, rgba(0,0,0,0), rgba(0,50,0,1))`};
`;

export const ImageWrapper = styled.div`
  flex: 1;
  height: 70%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 3%;

  @media screen and (max-width: 800px) {
    object-fit: contain;
  }
`;

export const Title = styled.h3`
  text-decoration: underline;
  font-style: italic;
  font-weight: lighter;
  font-size: 1.5em;
`;

export const DescriptionWrapper = styled.div`
  flex: 1;
  height: 70%;
  margin-left: 2%;
  width: 100%;
`;

export const Description = styled.p``;

export const SliderArrow = styled(Arrow)`
  left: ${(props) => props.direction == "left" && "18%"};
  right: ${(props) => props.direction == "right" && "18%"};
  top: 60%;

  @media screen and (max-width: 800px) {
    left: ${(props) => props.direction == "left" && "40%"};
    right: ${(props) => props.direction == "right" && "40%"};
    top: 100%;
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

export const LinkWrapper = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-around;
  margin-top: 5%;
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
