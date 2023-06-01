import React from "react";
import { Container, HeaderText, Heading } from "./HeaderStyles";
import { SectionDivider, SectionHeader } from "../../Utility/GlobalStyles/GlobalComponents";

const Header = () => {
  return (
    <Container>
      <Heading>
        Welcome to <br /> My Personal Portfolio
      </Heading>
      <HeaderText>
        I am a Software Engineer with excellent problem-solving skills and<br /> ability to work well with a team.
      </HeaderText>
      <SectionDivider/>
    </Container>
  );
};

export default Header;
