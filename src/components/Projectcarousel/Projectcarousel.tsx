import {
  SliderArrow,
  Card,
  CardContainer,
  Container,
  Description,
  DescriptionWrapper,
  Image,
  ImageWrapper,
  Title,
  StackHeader,
  Stack,
  StackChip,
  LinkWrapper,
  ExternalLinks,
} from "./ProjectcarouselStyles";
import { projects } from "../../static/constants";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import { SectionHeader } from "../../Utility/GlobalStyles/GlobalComponents";

const Projectcarousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  console.log(projects.map((p) => p.description));

  return (
    <Container>
      <SectionHeader  id="projects">Projects</SectionHeader>
      <CardContainer>
        {projects.map((project, index) => (
          <Card index={slideIndex} key={index}>
            <ImageWrapper>
              <Image src={project.img} alt={project.alt} />
              <LinkWrapper>
                <ExternalLinks href={project.visit}>Visit</ExternalLinks>
                <ExternalLinks href={project.source}>Source</ExternalLinks>
              </LinkWrapper>
            </ImageWrapper>
            <DescriptionWrapper>
              <Title>{project.title}</Title>
              <Description>{project.description}</Description>
              <StackHeader>Stack</StackHeader>
              <Stack>
                {project.techStack.map((tech, index) => (
                  <StackChip key={index}>{tech}</StackChip>
                ))}
              </Stack>
            </DescriptionWrapper>
          </Card>
        ))}
      </CardContainer>
      <SliderArrow
        direction="left"
        onClick={() =>
          setSlideIndex(slideIndex > 0 ? slideIndex - 1 : projects.length - 1)
        }
      >
        <MdArrowBackIosNew />
      </SliderArrow>
      <SliderArrow
        direction="right"
        onClick={() =>
          setSlideIndex(slideIndex < projects.length - 1 ? slideIndex + 1 : 0)
        }
      >
        <MdArrowForwardIos />
      </SliderArrow>
    </Container>
  );
};

export default Projectcarousel;
