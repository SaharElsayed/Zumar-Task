import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Stars = styled.div`
  color: ${(props) => props.theme.rating};
  margin: 0 20px 0 50px;
`;

export const RateNumber = styled.p`
  font-size: 18px;
`;

export const NumberOfRaters = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 18px;
`;
