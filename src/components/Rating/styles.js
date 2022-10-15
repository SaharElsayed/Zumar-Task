import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TextContainer = styled.div`
  display: flex;
`;

export const Stars = styled.div`
  color: ${(props) => props.theme.rating};
`;

export const RateNumber = styled.p`
  font-size: 18px;
`;

export const NumberOfRaters = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 18px;
`;
