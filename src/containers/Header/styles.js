import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled(FlexContainer)`
  padding: 20px 0;
`;

export const CartContainer = styled.div`
  padding: 0 15px;
  position: relative;
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
