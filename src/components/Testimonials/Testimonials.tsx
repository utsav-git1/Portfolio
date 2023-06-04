import { useRef, useState } from "react";
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

type Review = {
  reviews: { id?: string; name?: string; orgName?: string; review?: string }[];
  name?: string;
  orgName?: string;
  review?: string;
  postReview: (data: ReviewData) => Promise<void>;
};

type ReviewData = {
  name?: string;
  orgName?: string;
  review?: string;
};

const Testimonials = (props: Review) => {
  const reviews = props.reviews;
  const [slideIndex, setSlideIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const orgNameRef = useRef<HTMLInputElement>(null);
  const reviewRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <SectionHeader>Testimonials</SectionHeader>
      {open ? (
        <NewPost>
          <InputFields>
            <NameInput
              type="text"
              maxLength={25}
              placeholder="Name"
              ref={nameRef}
            />
            <CompanyInput
              type="text"
              maxLength={40}
              placeholder="Organization Name"
              ref={orgNameRef}
            />
            <ReviewInput
              type="text"
              maxLength={150}
              placeholder="Your Review..."
              ref={reviewRef}
            />
          </InputFields>
          <ActionButtons>
            <SubmitButton
              onClick={() => {
                setOpen(false);
                props.postReview({
                  name:
                    nameRef.current?.value == ""
                      ? "ANONYMOUS"
                      : nameRef.current?.value,
                  orgName:
                    orgNameRef.current?.value == ""
                      ? "ANONYMOUS"
                      : orgNameRef.current?.value,
                  review:
                    reviewRef.current?.value == ""
                      ? "ANONYMOUS"
                      : reviewRef.current?.value,
                });
              }}
            >
              Save
            </SubmitButton>
            <CloseButton onClick={() => setOpen(false)}>Cancel</CloseButton>
          </ActionButtons>
        </NewPost>
      ) : (
        <Wrapper>
          <PostReview onClick={() => setOpen(true)}>
            <BiAddToQueue />
          </PostReview>
          <SliderWrapper>
            {reviews.slice(0, 5).map((review, index) => (
              <Slide index={slideIndex} key={index}>
                <Details>
                  <NameField>{review.name}</NameField>
                  <CompanyField>{review.orgName}</CompanyField>
                  <ReviewField>{review.review}</ReviewField>
                </Details>
              </Slide>
            ))}
          </SliderWrapper>
          <Arrow
            direction="left"
            onClick={() =>
              setSlideIndex(
                slideIndex > 0 ? slideIndex - 1 : reviews.slice(0, 5).length - 1
              )
            }
          >
            <AiFillCaretLeft />
          </Arrow>
          <Arrow
            direction="right"
            onClick={() =>
              setSlideIndex(
                slideIndex < reviews.slice(0, 5).length - 1 ? slideIndex + 1 : 0
              )
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
