import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  font-size: 16px;
  border: none;
  font-weight: 500;
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: rgba(0, 0, 0, 0.2);
    font-family: "Poppins-SemiBold";
  }
`;

export const IconContainer = styled.div`
  color: #999cad;
  padding: 0 15px;
`;
