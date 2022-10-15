import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin-bottom: 30px;
`;

export const Header = styled.h3`
  font-size: 20px;
  font-weight: "Poppins-SemiBold";
  margin-bottom: 20px;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  @media (max-width: 425px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const OptionContent = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding: 0 10px;
  .color-thumbnail {
    margin-right: 10px;
  }
`;

export const StorageNumber = styled.p`
  font-size: 30px;
  font-family: "Poppins-SemiBold";
  margin-right: 5px;
`;
