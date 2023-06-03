import styled from "styled-components";
export const Container = styled.div`
  height: 10vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 1.5rem;

  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const Element = styled.div`
  display: flex;
  padding: 0 5%;
`;

export const Count = styled.div`
  margin-left: 0.5em;
`;

export const Mode = styled.div`
  height: 24px;
  width: 24px;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
