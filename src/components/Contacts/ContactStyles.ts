import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: 95vw;
`;

export const LinkHeader = styled.div`
  display: flex;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 220px;
  width: 100%;
`;

export const LinkTitle = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 24px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const LinkItem = styled.a`
  font-size: 18px;
  line-height: 30px;
  color: #ffffff;
  margin-bottom: 16px;
  transition: 0.3s ease;
  position: relative;
  left: 0;

  &:hover {
    color: #fff;
    left: 6px;
    transform: scale(1.2);
  }
`;
