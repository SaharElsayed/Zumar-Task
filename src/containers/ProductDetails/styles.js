import styled from "styled-components";

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 40px;
  padding: 50px 0;
  @media (max-width: 768px) {
    grid-template-columns: 1fr 2fr;
  }
  @media (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;

export const ImagesSection = styled.section`
  padding: 0 20px;
`;

export const DetailsSection = styled.section`
  padding: 0 20px;
`;

export const ProductName = styled.h1`
  font-size: 24px;
  font-family: "Poppins-SemiBold";
  margin-bottom: 30px;
`;
