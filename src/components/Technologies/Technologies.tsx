import { SectionHeader } from "../../Utility/GlobalStyles/GlobalComponents";
import {
    CardWrapper,
  CardsContainer,
  Container,
  DetailsCard,
  TitleCard,
} from "./TechnologiesStyles";

const Technologies = () => {
  return (
    <Container>
      <SectionHeader>Technologies</SectionHeader>
      <CardWrapper>
      <CardsContainer>
        <TitleCard>Front End Development</TitleCard>
        <DetailsCard>React</DetailsCard>
      </CardsContainer>
      <CardsContainer>
        <TitleCard>Back End Development</TitleCard>
        <DetailsCard>Node</DetailsCard>
      </CardsContainer>
      </CardWrapper>
    </Container>
  );
};

export default Technologies;
