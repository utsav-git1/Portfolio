import { SectionHeader } from "../../Utility/GlobalStyles/GlobalComponents";
import {
  Card,
  CardContainer,
  Container,
  Description,
  DescriptionText,
  Image,
  Stack,
  StackChip,
  StackHeader,
} from "./ProjectStyles";

const Projects = () => {
  return (
    <Container>
      <SectionHeader>Projects</SectionHeader>
      <CardContainer>
        <Card>
          <Image></Image>
          <Description>
            <DescriptionText>This is the MERN Project</DescriptionText>
            <StackHeader>Stack</StackHeader>
            <Stack>
              <StackChip>Typescript</StackChip>
            </Stack>
          </Description>
        </Card>
        <Card></Card>
        <Card></Card>
      </CardContainer>
    </Container>
  );
};

export default Projects;
