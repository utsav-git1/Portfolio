import { SectionHeader } from "../../Utility/GlobalStyles/GlobalComponents";
import { LinkWrapper } from "../Projects/ProjectStyles";
import { Container, LinkColumn, LinkItem, LinkTitle } from "./ContactStyles";

const Contacts = () => {
  return (
    <Container>
      <SectionHeader>Contacts</SectionHeader>
      <LinkWrapper>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:79767-29421">79767-29421</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:utsav.arora12@gmail.com">
            utsav.arora12@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkWrapper>
    </Container>
  );
};

export default Contacts;
