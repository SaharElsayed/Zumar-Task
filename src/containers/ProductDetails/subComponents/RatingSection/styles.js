import styled from "styled-components";

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px 50px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }
`;

export const ProductCode = styled.p`
  color: ${(props) => props.theme.text};
  font-size: 16px;
`;
