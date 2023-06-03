import {
  Container,
  Link,
  Links,
  Logo,
  Navigations,
  SocialIcons,
} from "./NavbarStyles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Navbar = () => {
  return (
    <Container>
      <Logo>Portfolio</Logo>
      <Navigations>
        <Link href="#projects">Projects</Link>
        <Link href="#tech">Tech</Link>
        <Link href="#about">About</Link>
      </Navigations>
      <Links>
        <SocialIcons href="https://github.com/utsav-git1">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/utsav-arora-b683181b2/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
      </Links>
    </Container>
  );
};

export default Navbar;
