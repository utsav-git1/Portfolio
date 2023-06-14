import styled from "styled-components";
import { darkTheme } from "./theme";

export const SectionHeader = styled.h1`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding: 2%;
  font-size: 3.5rem;
  font-weight: normal;

  &:target {
    background-image: ${(props) =>
      props.theme == darkTheme
        ? `linear-gradient(to left, rgba(0,0,0,0), rgba(50,255,255,1))`
        : `linear-gradient(to left, rgba(0,0,0,0), rgba(0,255,255,1))`};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const SectionDivider = styled.div`
  width: 5%;
  height: 5px;
  border-radius: 5px;
  background-image: ${(props) =>
    props.theme == darkTheme
      ? `linear-gradient(to left, rgba(0,0,0,0), rgba(0,255,255,1))`
      : `linear-gradient(to left, rgba(0,0,0,0), rgba(0,50,0,1))`};
  margin: 3%;
`;
