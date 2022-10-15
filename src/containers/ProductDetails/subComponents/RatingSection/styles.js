import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

export const ProductCode = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 16px;
`;
