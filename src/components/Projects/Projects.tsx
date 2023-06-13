import { SectionHeader } from "../../Utility/GlobalStyles/GlobalComponents";
import {
  Card,
  CardContainer,
  Container,
  Description,
  DescriptionText,
  ExternalLinks,
  Image,
  LinkWrapper,
  Stack,
  StackChip,
  StackHeader,
} from "./ProjectStyles";

import { projects } from "../../static/constants";

const Projects = () => {
  return (
    <Container >
      <SectionHeader>Projects</SectionHeader>
      <CardContainer>
        {projects.map((project, index) => (
          <Card key={index}>
            <Image src={project.img}></Image>
            <Description>
              <DescriptionText>{project.description}</DescriptionText>
              <LinkWrapper>
                <ExternalLinks href={project.visit}>Visit</ExternalLinks>
                <ExternalLinks href={project.source}>Source</ExternalLinks>
              </LinkWrapper>
              <StackHeader>Stack</StackHeader>
              <Stack>
                {project.techStack.map((tech, index) => (
                  <StackChip key={index}>{tech}</StackChip>
                ))}
              </Stack>
            </Description>
          </Card>
        ))}
      </CardContainer>
    </Container>
  );
};

export default Projects;
