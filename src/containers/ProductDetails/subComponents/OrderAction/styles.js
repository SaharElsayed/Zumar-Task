import styled from "styled-components";

export const SectionWrapper = styled.section`
  margin-bottom: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  gap: 10px;
`;

export const Header = styled.h3`
  font-size: 20px;
  font-weight: "Poppins-SemiBold";
`;

export const Price = styled.h2`
  font-size: 24px;
  font-family: "Poppins-SemiBold";
  color: ${(props) => props.theme.primary};
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Poppins-SemiBold";
`;

export const Hint = styled.p`
  font-size: 12px;
  font-family: "Poppins-Light";
  color: ${(props) => props.theme.grey};
`;
