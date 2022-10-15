import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px 50px;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px 30px;
  }
`;

export const NumberOfPieces = styled.p`
  font-size: 12px;
`;

export const Price = styled.p`
  font-size: 24px;
  font-family: "Poppins-SemiBold";
`;
