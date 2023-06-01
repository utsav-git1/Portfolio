import { Container, Icons, Items, Links, Logo, Navigations } from './NavbarStyles'
const Navbar = () => {
  return (
    <Container><Logo>Portfolio</Logo>
    <Navigations>
        <Items>Projects</Items>
        <Items>Skills</Items>
        <Items>About</Items>
    </Navigations>
    <Links>
    <Icons>Github</Icons>
    <Icons>LinkedIn</Icons>
    </Links>
    </Container>
  )
}

export default Navbar