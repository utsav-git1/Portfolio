import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 95vw;
  margin-bottom: 5%;
`;

export const NewPost = styled.div`
  height: 30vh;
  width: 70%;
  margin: auto;
  background-color: #4d94ff;
  z-index: 5;
  border-radius: 20px;
  padding: 2%;
  transition: all 2s;
`;

export const InputFields = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: auto;
  margin: 1%;
`;
export const NameInput = styled.input`
  margin: 1%;
  padding: 0.5%;
  width: 15vw;
  border-radius: 2px;
  outline: none;
  border: none;
`;
export const CompanyInput = styled.input`
  margin: 1%;
  padding: 0.5%;
  width: 25vw;
  border-radius: 2px;
  outline: none;
  border: none;
`;

export const ReviewInput = styled.input`
  margin: 1%;
  padding: 0.5%;
  width: 50vw;
  height: auto;
  border-radius: 2px;
  outline: none;
  border: none;

  &::placeholder{
    color:red
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  height: 20%;
  width: auto;
  margin: 1%;
`;

export const SubmitButton = styled.button`
width: 10vw;
border-radius: 10px;
font-size: 1rem;
cursor: pointer;
margin: 0 2%;
`
export const CloseButton = styled.button`
width: 10vw;
border-radius: 10px;
font-size: 1rem;
cursor: pointer;
margin: 0 2%;
`

export const Wrapper = styled.div`
  position: relative;
  height: auto;
  width: 100vw;
`;

export const PostReview = styled.div<React.MouseEventHandler<HTMLDivElement>>`
  position: absolute;
  right: 150px;
  top: -50px;
  height: auto;
  width: auto;
  cursor: pointer;
`;

export const SliderWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 50%;
  margin: auto;
  overflow-x: hidden;
`;

export const Slide = styled.div<{ index: number }>`
  flex-shrink: 0;
  width: 70%;
  height: 80%;
  margin: 5px;
  background-color: #66d9ff;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.index * -100}%);
  display: flex;
  border-radius: 15px;
  font-family: "Courier New", Courier, monospace;
  padding: 2%;
`;

export const Details = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 2%;
  word-wrap: break-word;
`;

export const NameField = styled.p`
  padding: 2% 5%;
  margin-left: 5%;
  background-color: #0000ff;
  width: 20%;
  border-radius: 10px;
`;

export const CompanyField = styled.p`
  padding: 2% 5%;
  margin-left: 5%;
  background-color: #0000ff;
  width: 30%;
  border-radius: 10px;
`;

export const ReviewField = styled.p`
  padding: 2% 5%;
  margin-left: 5%;
  background-color: #0000ff;
  width: auto;
  border-radius: 10px;
`;

export const Arrow = styled.div<{ direction: string }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.direction == "left" && "20%"};
  right: ${(props) => props.direction == "right" && "20%"};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #66d9ff;
  height: 30px;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
