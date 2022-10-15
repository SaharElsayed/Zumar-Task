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

export const Price = styled.h5`
  font-size: 18px;
  color: ${(props) => props.theme.red};
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const OptionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ShippingType = styled.h5`
  font-size: 18px;
  font-weight: "Poppins-SemiBold";
`;

export const ShippingDuration = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.grey};
`;
