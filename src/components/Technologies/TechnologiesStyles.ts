import styled from "styled-components";

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
`

export const CardsContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;
  display: flex;
  justify-content: space-around;
`;

export const TitleCard = styled.div`
  position: absolute;
  height: 25vh;
  width: 25vw;
  padding: 2%;
  border-radius: 10px;
  text-align: center;
  line-height: 25vh;
  background-color: #000099;
  box-shadow: 3px 3px 5px 1px white;
  font-family: "Courier New", Courier, monospace;
  z-index: 5;
  transition: ease 2s;
  backface-visibility: hidden;

  &:hover {
    transform: rotateY(-180deg);
    color: red;
  }
`;

export const DetailsCard = styled.div`
  position: absolute;
  height: 25vh;
  width: 25vw;
  padding: 2%;
  border-radius: 10px;
  text-align: center;
  background-color: #000099;
  box-shadow: 3px 3px 5px 1px white;
  font-family: "Courier New", Courier, monospace;
  z-index: 2;
`;


