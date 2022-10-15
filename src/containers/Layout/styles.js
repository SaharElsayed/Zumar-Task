import styled from "styled-components";

export const Container = styled.main`
  width: 90vw;
  margin: 0 auto;
  @media (max-width: 425px) {
    width: 100vw;
  }
`;

export const HorizontalLine = styled.hr`
  border: 1px solid ${(props) => props.theme.lightGrey};
  width: 100%;
`;
