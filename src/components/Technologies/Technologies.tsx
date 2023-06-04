import { SectionHeader } from "../../Utility/GlobalStyles/GlobalComponents";
import { backEndTech, frontEndTech } from "../../static/constants";
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
            {frontEndTech.map((tech, index) => (
              <Items key={index}>{tech}</Items>
            ))}
          </DetailsCard>
        </CardsContainer>
        <CardsContainer>
          <TitleCard>Back End Development</TitleCard>
          <DetailsCard>
            {backEndTech.map((tech, index) => (
              <Items key={index}>{tech}</Items>
            ))}
          </DetailsCard>
        </CardsContainer>
      </CardWrapper>
    </Container>
  );
};

export default Technologies;
