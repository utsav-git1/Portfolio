import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  backgroundColor: "#79ff4d",
  color: "#000000",
};

export const darkTheme = {
  backgroundColor: "#000066",
  color: "#ffffff",
};

export const GlobalStyles = createGlobalStyle<any>`
   body {
    background-color: ${(props) => props.theme.backgroundColor};
    color:${(props) => props.theme.color};
    transition: 0.5s all;
}`;
