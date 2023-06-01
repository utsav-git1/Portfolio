import { Container, HeaderText, Heading } from "./HeaderStyles";

const Header = () => {
  return (
    <Container>
      <Heading>
        Welcome to <br /> My Personal Portfolio
      </Heading>
      <HeaderText>
        I am a Software Engineer with excellent problem-solving skills and<br /> ability to work well with a team.
      </HeaderText>
    </Container>
  );
};

export default Header;
