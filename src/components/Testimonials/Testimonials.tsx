import { useState } from "react";
import { SectionHeader } from "../../Utility/GlobalStyles/GlobalComponents";
import {
  ActionButtons,
  Arrow,
  CloseButton,
  CompanyField,
  CompanyInput,
  Container,
  Details,
  InputFields,
  NameField,
  NameInput,
  NewPost,
  PostReview,
  ReviewField,
  ReviewInput,
  Slide,
  SliderWrapper,
  SubmitButton,
  Wrapper,
} from "./TestimonialStyles";

import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";

const slides = [
  { name: "utsav" },
  { name: "arora" },
  { name: "arora1" },
  { name: "arora2" },
];

const Testimonials = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <SectionHeader>Testimonials</SectionHeader>
      {open ? (
        <NewPost>
          <InputFields>
            <NameInput type="text" maxLength={25} placeholder="Name" />
            <CompanyInput
              type="text"
              maxLength={40}
              placeholder="Organization Name"
            />
            <ReviewInput
              type="text"
              maxLength={150}
              placeholder="Your Review..."
            />
          </InputFields>
          <ActionButtons>
            <SubmitButton>Save</SubmitButton>
            <CloseButton onClick={() => setOpen(false)}>Cancel</CloseButton>
          </ActionButtons>
        </NewPost>
      ) : (
        <Wrapper>
          <PostReview onClick={() => setOpen(true)}>
            <BiAddToQueue />
          </PostReview>
          <SliderWrapper>
            {slides.map(() => (
              <Slide index={slideIndex}>
                <Details>
                  <NameField>Utsav</NameField>
                  <CompanyField>ArisG</CompanyField>
                  <ReviewField>Very Impressive Portfolio</ReviewField>
                </Details>
              </Slide>
            ))}
          </SliderWrapper>
          <Arrow
            direction="left"
            onClick={() =>
              setSlideIndex(slideIndex > 0 ? slideIndex - 1 : slides.length - 1)
            }
          >
            <AiFillCaretLeft />
          </Arrow>
          <Arrow
            direction="right"
            onClick={() =>
              setSlideIndex(slideIndex < slides.length - 1 ? slideIndex + 1 : 0)
            }
          >
            <AiFillCaretRight />
          </Arrow>
        </Wrapper>
      )}
    </Container>
  );
};

export default Testimonials;
