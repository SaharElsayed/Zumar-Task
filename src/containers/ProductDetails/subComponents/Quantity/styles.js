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
  font-family: "Poppins-SemiBold";
`;

export const Price = styled.h5`
  font-size: 18px;
  color: ${(props) => props.theme.red};
`;

export const ActionWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Pieces = styled.h5`
  font-size: 18px;
`;
