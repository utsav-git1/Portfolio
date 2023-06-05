import styled from "styled-components";

export const Container = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.5rem;

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const Logo = styled.div`
  color: white;
  padding: 50% 0;
  flex: 1;
  padding: 3vh 2%;
  cursor: pointer;
  font-size: 0.9em;
`;

export const Navigations = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 2;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  margin-left: 20px;
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size: 0.9em;

  &:hover {
    color: blueviolet;
    transition: all ease 0.3s;
  }
`;

export const SocialIcons = styled.a`
  color: white;
  margin-right: 4%;
  border-radius: 50px;
  transition: all ease 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;
