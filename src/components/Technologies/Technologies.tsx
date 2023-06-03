import { SectionHeader } from "../../Utility/GlobalStyles/GlobalComponents";
import {
  CardWrapper,
  CardsContainer,
  Container,
  DetailsCard,
  Items,
  TitleCard,
} from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Container id="tech">
      <SectionHeader>Technologies</SectionHeader>
      <CardWrapper>
        <CardsContainer>
          <TitleCard>Front End Development</TitleCard>
          <DetailsCard>
            <Items>React </Items>
            <Items>Redux </Items>
            <Items>JavaScript</Items>
            <Items>TypeScript</Items>
          </DetailsCard>
        </CardsContainer>
        <CardsContainer>
          <TitleCard>Back End Development</TitleCard>
          <DetailsCard>
            <Items>Node</Items>
            <Items>Express</Items>
            <Items>MongoDB</Items>
            <Items>Postgres</Items>
            <Items>Java</Items>
          </DetailsCard>
        </CardsContainer>
      </CardWrapper>
    </Container>
  );
};

export default Technologies;
