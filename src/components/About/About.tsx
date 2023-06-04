import { SectionHeader } from "../../Utility/GlobalStyles/GlobalComponents";
import { Container, Description, List, ListItems } from "./AboutStyles";
import { about } from "../../static/constants";

const About = () => {
  return (
    <Container id="about">
      <SectionHeader>About</SectionHeader>
      <Description>
        <List>
          {about.map((item, index) => (
            <ListItems key={index}>{item.description}</ListItems>
          ))}
        </List>
      </Description>
    </Container>
  );
};

export default About;
