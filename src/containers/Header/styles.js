import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    gap: 10px;
  }
  @media (max-width: 425px) {
    flex-wrap: wrap;
    gap: 30px 10px;
  }
`;

export const HeaderContainer = styled(FlexContainer)`
  padding: 20px 0;
  @media (max-width: 425px) {
    padding: 20px;
  }
`;

export const SearchFilterContainer = styled(FlexContainer)`
  @media (max-width: 425px) {
    order: 3;
    width: 100%;
  }
`;

export const CartContainer = styled.div`
  padding: 0 15px;
  position: relative;
  cursor: pointer;
`;

export const CartBagde = styled(FlexContainer)`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  font-size: 10px;
  background-color: ${(props) => props.theme.redPrimary};
  color: ${(props) => props.theme.white};
  box-shadow: 0px 4px 11px ${(props) => props.theme.redPrimary};
  justify-content: center;
  position: absolute;
  right: 5px;
`;

export const MobileMenu = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: block;
    position: relative;
  }
`;
